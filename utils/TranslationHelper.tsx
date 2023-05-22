import { ReactNode } from "react"
import Image from 'next/image'
import { RichTranslationValues } from "next-intl"

export const whiteTrans: RichTranslationValues = {
    important: (chunks: ReactNode) => <span className="text-white">{chunks}</span>
}

export const boldTrans: RichTranslationValues = {
    important: (chunks: ReactNode) => <strong>{chunks}</strong>
}

export const linkTrans = (
    key: string,
    link: string,
    external = true,
) : RichTranslationValues => {
    return {
        [key]: (chunks: ReactNode) => (
            <a 
                className="text-white items-center" 
                style={{ display: 'inline-flex' }}
                href={link}
                target={external ? "_blank" : "_self"}
            >
                <div>{chunks}</div> 
                {external && (
                    <div>
                        <Image className="inline" src="/external-white.svg" width="20" height="20" alt="link" />
                    </div>
                )}
            </a>
        )
    }
}
