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
            <div className="pt-28 min-h-screen pb-56 max-w-[1248px] mx-auto">
                <div className="font-semibold text-5xl mb-12 text-center">
                    {title}
                </div>
                <div className="max-w-[1000px] mx-auto mb-32 text-center rich-text">
                    {subtitle}
                </div>
                {children}
            </div>
        </Suspense>
    )
}