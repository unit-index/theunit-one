import FAQ from "@/components/FAQ"
import { faqs } from "@/utils/constants"
import { useTranslations } from "next-intl"

export default function AboutPage() {

    const t = useTranslations('About')

    return (
        <div className="bg-about bg-no-repeat bg-cover bg-left-top px-36 pt-28 pb-32">
            <div className="font-bold text-white text-6xl">
                {t('title')}
            </div>
            <div className="mt-16 whitespace-pre-line">{t('about-the-unit')}</div>
            
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
        </div>
    )
}