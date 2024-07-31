import { ReactNode, Suspense } from "react"
import Loading from "../Loading"

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
        <Suspense fallback={<Loading />}>
            <div className="pt-24 min-h-screen pb-56 max-w-7xl mx-auto px-6 xl:px-0">
                <div className="mb-8 text-2xl">
                    {title}
                </div>
                <div className="rich-text text-title text-[28px] leading-9">
                    {subtitle}
                </div>
                {children}
            </div>
        </Suspense>
    )
}