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

    return <div className={`group/mobile ${active ? 'is-show' : ''}`}>
        <Image width={20} height={20} onClick={onClick} src={active ? cross : menu } alt="menu" />
        <div 
            onClick={() => {
                setActive(false)
            }}
            className="hidden fixed right-0 bottom-0 top-14 h-screen shadow-lg shadow-white/20 bg-black-bgd/90 backdrop-blur-md group-[.is-show]/mobile:block w-3/5 pl-8 pt-10 text-white"
        >
            {children}
        </div>
    </div>
}