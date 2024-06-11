import { useLocale } from "next-intl"
import Image from "next/image"
import ExternalLinkButton from "@/components/button/ExternalLinkButton"
import externalWhite from '@/public/external-white.svg';
import LinkButton from "@/components/button/LinkButton";
import PageTemplate from "@/components/layout/PageTemplate";
import BlurContainer from "@/components/BlurContainer";
import request, { gql } from "graphql-request";
import { sanityGraphqlEndpoint } from "@/sanity/lib/client";
import { AssetItem, CommunityPage as CommunityPageType, SocialItem } from "@/sanity.types";
import Description from "@/components/Description";

const query = gql`
  query getCommunityPage($locale: String!) {
    allCommunityPage(where: { language: { eq: $locale }}) {
        pageTitle
        description: descriptionRaw
        socials {
            logo
            link
            description
        }
        assetsTitle
        downloadText
        brandAssets {
            type
            assetUrls
            width
            height
        }
    }
  }
`

export default async function CommunityPage() {

    const locale = useLocale();
    const pageData: any = await request(sanityGraphqlEndpoint, query, { locale })
    const page: CommunityPageType = pageData.allCommunityPage[0];
    const socials: SocialItem[] = page.socials as unknown as SocialItem[];
    const assetItems: AssetItem[] = page.brandAssets as unknown as AssetItem[];

    return <>
        <PageTemplate 
            title={page.pageTitle}
            subtitle={(
                <Description text={page.description} />
            )}
            className="bg-[url(/community.png),url(/page-bgd.png)]"
        >
            <div className="grid gap-12 grid-cols-1 md:grid-cols-3 mx-8 xl:mx-16 2xl:mx-36 pb-32 text-xl text-white">
                {socials.map((so) => (
                    <CommunityLink key={so.name} title={so.description} icon={so.logo} link={so.link} />
                ))}
            </div>
            <div className="border-t border-t-gray-border pt-32">
                <div className="font-semibold text-4xl mb-6 text-white">
                    {page.assetsTitle}
                </div>
                {assetItems.map((asset) => (
                    <BrandAssets key={asset.type} asset={asset} downloadText={page.downloadText} />
                ))}
            </div>
        </PageTemplate>
    </>
}

function CommunityLink({
    title,
    icon,
    link,
} : {
    title: string,
    icon: string,
    link: string,
}) {
    const imageSize = 48;
 return (
        <div className="relative">
            <Image 
                className="absolute scale-[3.5] opacity-10 right-1/3 top-1/3" 
                src={icon} 
                alt={title} 
                width={imageSize}
                height={imageSize}
            /> 
            <ExternalLinkButton hover link={link} className="h-full text-center">
                <Image 
                    className="inline-block scale-[2]" 
                    src={icon} 
                    alt={title} 
                    width={imageSize}
                    height={imageSize}
                />
                <div className="mt-6">
                    {title} 
                    <Image 
                        src={externalWhite} 
                        alt={title} 
                        className="inline-block pl-1"
                    />
                </div>
            </ExternalLinkButton>
        </div>
 )
}

function BrandAssets({
    asset,
    downloadText,
} : {
    asset: AssetItem,
    downloadText: string,
}) {

    return <>
        { asset.type && (
            <div className="text-white mt-20 mb-8">
                {asset.type}
            </div>
        )}
        <div className="flex gap-8 md:gap-36">
            {asset.assetUrls.map((url, index) => (
                <div key={index} className="flex flex-col gap-8">
                    <BlurContainer className={index%2 == 1 ? ' bg-black-bgd/60' : ''}>
                        <div className="lg:p-8">
                            <Image 
                                src={url}  
                                width={asset.width}
                                height={asset.height}
                                alt="asset" 
                            />
                        </div>
                    </BlurContainer>
                    <LinkButton 
                        title={downloadText} 
                        link={url} 
                        download
                    />
                </div>
            ))}
        </div>
    </>
}
