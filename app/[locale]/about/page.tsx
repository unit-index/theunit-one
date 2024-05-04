import Description from "@/components/Description"
import FAQ from "@/components/FAQ"
import PageTemplate from "@/components/layout/PageTemplate"
import { AboutPage as AboutPageType, FaqItem } from "@/sanity.types"
import { sanityGraphqlEndpoint } from "@/sanity/lib/client"
import request, { gql } from "graphql-request"
import { useLocale } from "next-intl"

const query = gql`
  query getAboutPage($locale: String!) {
    allAboutPage(where: { language: { eq: $locale }}) {
        pageTitle
        description: descriptionRaw
        faqTitle
        faqs {
            question
            answer: answerRaw
        }
    }
  }
`


export default async function AboutPage() {

    const locale = useLocale();
    const pageData: any = await request(sanityGraphqlEndpoint, query, { locale })
    const page: AboutPageType = pageData.allAboutPage[0];
    const faqs: FaqItem[] = page.faqs as unknown as FaqItem[];

    return (
        <PageTemplate 
            className="bg-[url(/about-the-unit.png),url(/page-bgd.png)]"
            title={page.pageTitle}
            subtitle={(
                <Description text={page.description} />
            )}
        >
            <div className="font-bold text-4xl text-white mt-56 mb-6">
                {page.faqTitle}
            </div>
            <div className="flex flex-col gap-6">
                {faqs.map((faq) => (
                    <FAQ 
                        key={faq._id}
                        question={faq.question} 
                        answer={(
                            <Description text={faq.answer} />
                        )} 
                    />
                ))}
            </div>
        </PageTemplate>
    )
}