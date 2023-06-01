import { ReactNode } from "react";

export default function BlurContainer({
    hover = false,
    className = '',
    children,
} : {
    hover?: boolean,
    className?: string,
    children: ReactNode
}) {
    return (
        <div className={
                "py-8 px-6 bg-gray-heavy/60 backdrop-blur-sm rounded-2xl border border-gray-border" +
                (hover ? ' hover:bg-black-bgd/60 ' : ' ') + className
            }
        >
            { children }
        </div>
    )
}