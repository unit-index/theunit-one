'use client';

import { usePathname } from "next-intl/client";
import { ReactNode } from "react";

export default function ClientLink({
    linkKey,
    className,
    children,
} : {
    linkKey: string,
    className?: string,
    children: ReactNode,
}) {
    const pathname = usePathname();
    let active = pathname === linkKey || (pathname?.startsWith(linkKey) && linkKey !== '/');

    return (
        <div className={`group ${active ? 'is-active' : ''} ${className ?? ''}`}>
            {children}
        </div>
    )
}