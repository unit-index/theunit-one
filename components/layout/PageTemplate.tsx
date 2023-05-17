import { ReactNode } from "react"

export default function PageTemplate({
    title,
    subtitle,
    className,
    unitBgd = false,
    children
} : {
    title: string,
    subtitle: string,
    className?: string,
    unitBgd?: boolean,
    children: ReactNode
}) {

    const bgdClass = unitBgd ? 'bg-about bg-100%' : 'bg-page bg-50%'

    return (
        <div className={`${bgdClass} bg-left-top bg-no-repeat px-36 pt-36 pb-32 ${className}`}>
            <div className="font-semibold text-white text-5xl">
                {title}
            </div>
            <div className="mt-16 mb-20 whitespace-pre-line">
                {subtitle}
            </div>
            {children}
        </div>
    )
}