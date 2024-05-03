'use client';

import { usePathname } from "next/navigation";
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
    const path = pathname?.substring(1)
    let active = path === linkKey || (path?.startsWith(linkKey) && linkKey !== '/');

    return (
        <div className={`group ${active ? 'is-active' : ''} ${className ?? ''}`}>
            {children}
        </div>
    )
}