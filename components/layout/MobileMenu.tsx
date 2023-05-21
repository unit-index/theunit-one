'use client';

import { ReactNode, useEffect, useState } from "react";
import menu from '@/public/menu.png';
import cross from '@/public/cross.png';
import Image from "next/image";
import { usePathname } from "next-intl/client";

export default function MobileMenu({children} : {children: ReactNode}) {
    const [active, setActive] = useState(false);
    const pathname = usePathname();

    const onClick = () => {
        setActive(!active);
    }

    useEffect(() => {
        setActive(false)
      }, [pathname])

    return <div className={`group ${active ? 'is-active' : ''}`}>
        <Image width={20} height={20} onClick={onClick} src={active ? cross : menu } alt="menu" />
        <div className="hidden fixed right-0 bottom-0 top-16 h-screen shadow-lg shadow-white/20 bg-background group-[.is-active]:block w-4/5 pl-8 pt-10">
            {children}
        </div>
    </div>
}