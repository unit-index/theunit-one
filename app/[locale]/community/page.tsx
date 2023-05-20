import { useTranslations } from "next-intl"
import Image from "next/image"
import ExternalLinkButton from "@/components/button/ExternalLinkButton"
import externalWhite from '@/public/external-white.svg';
import { discordUrl, twitterUrl, youtubeUrl } from "@/utils/constants";
import discord from '@/public/discord.svg'
import twitter from '@/public/twitter.svg'
import youtube from '@/public/youtube.svg'
import LinkButton from "@/components/button/LinkButton";
import PageTemplate from "@/components/layout/PageTemplate";

interface BrandAssetType {
    name: string;
    width: number;
    height: number;
    title?: string;
}

export default function CommunityPage() {

    const t = useTranslations('Community')

    const assets: BrandAssetType[] = [
        {
            name: 'asset',
            width: 132,
            height: 132,
            title: t('logo')
        },
        {
            name: 'vasset',
            width: 132,
            height: 182,
            title: t('stacked')
        },
        {
            name: 'hasset',
            width: 234,
            height: 88,
            title: t('horizontal')
        }
    ]

    return <>
        <PageTemplate 
            title={t('title')}
            subtitle={t.rich('intro',{important: (chunks) => <span className="text-white">{chunks}</span>})}
        >
            <div className="grid gap-12 grid-cols-3 mx-36 pb-32 border-b border-b-gray-border text-xl text-white">
                <CommunityLink title={t('discord')} icon={discord} link={discordUrl} />
                <CommunityLink title={t('twitter')} icon={twitter} link={twitterUrl} />
                <CommunityLink title={t('youtube')} icon={youtube} link={youtubeUrl} />
            </div>
            <div className="px-36">
                <div className="font-bold text-4xl mb-6 text-white">
                    {t('brand-assets')}
                </div>
                {assets.map((asset) => (
                        <BrandAssets key={asset.name} asset={asset} />
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
 return (
        <div className="relative">
            <Image 
                className="absolute scale-[3.5] opacity-10 right-1/3 top-1/3" 
                src={icon} 
                alt={title} 
            /> 
            <ExternalLinkButton link={link}>
                <div className="text-center py-8 px-2 gap-2">
                    <Image className="inline-block scale-[2]" src={icon} alt={title} />
                    <div className="flex items-center justify-center pt-9">
                        {title} <Image src={externalWhite} alt={title} />
                    </div>
                </div>
            </ExternalLinkButton>
        </div>
 )
}

function BrandAssets({asset} : {asset: BrandAssetType}) {

    const t = useTranslations('Community')

    return <>
        { asset.title && (
            <div className="text-white mt-20 mb-8">
                {asset.title}
            </div>
        )}
        <div className="flex gap-36">
            {[1, 2].map((index) => (
                <div key={index} className="flex flex-col gap-8">
                    <ExternalLinkButton link="#">
                        <div className="p-8">
                            <Image 
                                src={`/${asset.name}-${index}.png`}  
                                width={asset.width}
                                height={asset.height}
                                alt="asset" 
                            />
                        </div>
                    </ExternalLinkButton>
                    <LinkButton 
                        title={t('download')} 
                        link={`/${asset.name}-${index}.png`} 
                        download
                    />
                </div>
            ))}
        </div>
    </>
}
