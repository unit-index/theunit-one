import { ReactNode } from "react"

export default function PageTemplate({
    title,
    subtitle,
    children
} : {
    title: string,
    subtitle: ReactNode,
    children: ReactNode
}) {

    return (
        <div className="pt-28 min-h-screen pb-56 max-w-[1248px] mx-auto">
            <div className="font-semibold text-5xl mb-12 text-center">
                {title}
            </div>
            <div className="mb-32 text-center">
                {subtitle}
            </div>
            {children}
        </div>
    )
}