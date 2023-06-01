import { ReactNode } from 'react';
import BlurContainer from '../BlurContainer';

export default function ExternalLinkButton({
    link,
    dark = false,
    hover = false,
    className = '',
    children,
} : {
    link: string,
    dark?: boolean,
    hover?: boolean,
    className?: string,
    children: ReactNode
}) {

    return (
        <BlurContainer hover={hover} className={className}>
            <a 
                className="block"
                href={link}
                target="_blank"
            >
                {children}
            </a>
        </BlurContainer>
    )
}