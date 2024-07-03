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
            <div className="pt-24 min-h-screen pb-56 max-w-7xl mx-auto">
                <div className="text-title mb-8">
                    {title}
                </div>
                <div className="rich-text">
                    {subtitle}
                </div>
                {children}
            </div>
        </Suspense>
    )
}