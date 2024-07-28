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
        itemsTitle
        items {
            title
            itemTitle
            image
            description: descriptionRaw
        }
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
    const items: AboutItem[] = page.items as unknown as AboutItem[];
    const faqs: FaqItem[] = page.faqs as unknown as FaqItem[];

    return (
        <PageTemplate 
            title={page.pageTitle}
            subtitle={(
                <Description text={page.description} />
            )}
        >
            <div className="mt-24 mb-8">{page.itemsTitle}</div>
            <div className="grid grid-cols-3 gap-10">
                {items.map((item) => (
                    <div 
                        key={item.itemTitle} 
                        className="rounded-2xl bg-white p-10 bg-no-repeat min-h-[323px]"
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: '70%',
                            backgroundPosition: 'right bottom'
                        }}
                    >
                        <div className="text-gradient mb-8 font-bold">{item.itemTitle}</div>
                        <div className="text-base text-title">
                        <Description text={item.description} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-32 mb-8">FAQ</div>
            <div className="flex flex-col gap-6 mb-64">
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