import { ReactNode } from 'react';

export default function ExternalLinkButton({
    link,
    dark = false,
    children,
} : {
    link: string,
    dark?: boolean,
    children: ReactNode
}) {

    return (
        <a 
            className={"block backdrop-blur-sm rounded-xl border border-gray-border " + (dark ? "bg-black-bgd/40" : "bg-gray-heavy/60")}
            href={link}
            target="_blank"
        >
            {children}
        </a>
    )
}