import { useLocale } from "next-intl"
import Image from "next/image"
import PageTemplate from "@/components/layout/PageTemplate"
import Description from "@/components/Description"
import request, { gql } from "graphql-request"
import { sanityGraphqlEndpoint } from "@/sanity/lib/client"
import { DeveloperLink as DeveloperLinkType, DeveloperPage } from "@/sanity.types"

const widths = ['40', '40', '50', '40', '70']

const query = gql`
  query getDeveloperPage($locale: String!) {
    allDeveloperPage(where: { language: { eq: $locale }}) {
        pageTitle
        description: descriptionRaw
        developerLinks {
            linkTitle
            linkLogo
            link
            description: descriptionRaw
        }
    }
  }
`

export default async function DevelopersPage() {

    const locale = useLocale();
    const pageData: any = await request(sanityGraphqlEndpoint, query, { locale })
    const page: DeveloperPage = pageData.allDeveloperPage[0];
    const links: DeveloperLinkType[] = page.developerLinks as unknown as DeveloperLinkType[];

    return (
        <PageTemplate
            title={page.pageTitle}
            subtitle={(
                <Description text={page.description} />
            )}
        >
            <div className="flex flex-wrap gap-12">
                {links.map((link, index) => (
                    <a 
                        key={link.linkTitle} 
                        href={link.link}
                        className="rounded-xl border border-[#E7E7E7] px-14 py-6"
                        style={{ width: `${widths[index % widths.length]}%` }}
                    >
                        <div className="flex items-center justify-between">
                            <div className="font-bold text-2xl">{link.linkTitle}</div>
                            <Image 
                                width={20} 
                                height={20}
                                src="/external.svg" 
                                alt='external link' 
                            />
                        </div>
                        <Description text={link.description} />
                    </a>
                ))}
            </div>
        </PageTemplate>
    )
}
