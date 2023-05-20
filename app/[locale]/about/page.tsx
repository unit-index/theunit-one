import FAQ from "@/components/FAQ"
import PageTemplate from "@/components/layout/PageTemplate"
import { faqs } from "@/utils/constants"
import { useTranslations } from "next-intl"
import Image from 'next/image'


export default function AboutPage() {

    const t = useTranslations('About')

    return (
        <PageTemplate 
            unitBgd
            title={t('title')}
            subtitle={t.rich('about-the-unit',{important: (chunks) => <span className="text-white">{chunks}</span>})}
        >
            <div className="font-bold text-4xl text-white mt-56 mb-6">
                {t('faq')}
            </div>
            <div className="flex flex-col gap-6">
                {faqs.map((faq) => (
                    <FAQ 
                        key={faq}
                        question={t.rich(`faq-${faq}`,{important: (chunks) => <span className="text-white">{chunks}</span>})} 
                        answer={t.rich(`ans-${faq}`,{important: (chunks) => <span className="text-white">{chunks}</span>, docsSelectionCriteria: (chunks) => <a className="inline" href="https://docs.theunit.one/theunit/the-unit/the-unit-selection-criteria" target="_blank">{chunks} <Image className="inline" src="/external-white.svg" width="20" height="20" alt="link" /></a>})} 
                    />
                ))}
            </div>
        </PageTemplate>
    )
}