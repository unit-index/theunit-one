import FAQ from "@/components/FAQ"
import PageTemplate from "@/components/layout/PageTemplate"
import { linkTrans, whiteTrans } from "@/utils/TranslationHelper"
import { faqs } from "@/utils/constants"
import { useTranslations } from "next-intl"


export default function AboutPage() {

    const t = useTranslations('About')

    return (
        <PageTemplate 
            className="bg-[url(/about-the-unit.png),url(/page-bgd.png)]"
            title={t('title')}
            subtitle={t.rich('about-the-unit', whiteTrans)}
        >
            <div className="font-bold text-4xl text-white mt-56 mb-6">
                {t('faq')}
            </div>
            <div className="flex flex-col gap-6">
                {faqs.map((faq) => (
                    <FAQ 
                        key={faq}
                        question={t.rich(`faq-${faq}`, whiteTrans)} 
                        answer={
                            t.rich(`ans-${faq}`, { 
                                ...whiteTrans, 
                                ...linkTrans('docsSelectionCriteria', 'https://docs.theunit.one/theunit/the-unit/the-unit-selection-criteria'),
                                ...linkTrans('docsAlgorithm', 'https://docs.theunit.one/theunit/the-unit/algorithm')
                            })
                        } 
                    />
                ))}
            </div>
        </PageTemplate>
    )
}