import Description from "@/components/Description"
import FAQ from "@/components/FAQ"
import PageTemplate from "@/components/layout/PageTemplate"
import { AboutItem, AboutPage as AboutPageType, FaqItem } from "@/sanity.types"
import { sanityGraphqlEndpoint } from "@/sanity/lib/client"
import request, { gql } from "graphql-request"
import { useLocale } from "next-intl"

const query = gql`
  query getAboutPage($locale: String!) {
    allAboutPage(where: { language: { eq: $locale }}) {
        pageTitle
        description: descriptionRaw
        items {
            title
            description: descriptionRaw
        }
    }
  }
`


export default async function AboutPage() {

    const locale = useLocale();
    const pageData: any = await request(sanityGraphqlEndpoint, query, { locale })
    const page: AboutPageType = pageData.allAboutPage[0];
    const items: AboutItem[] = page.items as unknown as AboutItem[];

    return (
        <PageTemplate 
            title={page.pageTitle}
            subtitle={(
                <Description text={page.description} />
            )}
        >
            <div className="grid grid-cols-2 gap-x-12">
                <div className="flex flex-col gap-8">
                    {items.filter((ite, index) => index % 2 == 0).map((item, index) => (
                        <div key={item.title} className="border border-[#E7E7E7] rounded-xl px-14 py-6">
                            <ul>
                                <li className="list-disc">
                                    <Description text={item.description} />
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-8">
                {items.filter((ite, index) => index % 2 != 0).map((item, index) => (
                        <div key={item.title} className="border border-[#E7E7E7] rounded-xl px-14 py-6">
                            <ul>
                                <li className="list-disc">
                                    <Description text={item.description} />
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </PageTemplate>
    )
}