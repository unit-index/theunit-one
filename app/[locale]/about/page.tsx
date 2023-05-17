import FAQ from "@/components/FAQ"
import PageTemplate from "@/components/layout/PageTemplate"
import { faqs } from "@/utils/constants"
import { useTranslations } from "next-intl"

export default function AboutPage() {

    const t = useTranslations('About')

    return (
        <PageTemplate 
            unitBgd
            title={t('title')}
            subtitle={t('about-the-unit')}
        >
            <div className="font-bold text-4xl text-white mt-56 mb-6">
                {t('faq')}
            </div>
            <div className="flex flex-col gap-6">
                {faqs.map((faq) => (
                    <FAQ 
                        key={faq}
                        question={t(`faq-${faq}`)} 
                        answer={t(`ans-${faq}`)} 
                    />
                ))}
            </div>
        </PageTemplate>
    )
}