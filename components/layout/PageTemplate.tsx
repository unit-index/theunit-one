import { ReactNode } from "react"

export default function PageTemplate({
    title,
    subtitle,
    className = '',
    children
} : {
    title: string,
    subtitle: ReactNode,
    className?: string,
    children: ReactNode
}) {

    return (
        <div className={`bg-[position:right_top,left] bg-no-repeat bg-[length:100%,80%] lg:bg-[length:50%,30%] px-8 lg:px-36 pt-36 pb-32 ${className}`}>
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