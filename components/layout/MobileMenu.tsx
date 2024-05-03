'use client';

import { ReactNode, useEffect, useState } from "react";
import Hamburger from 'hamburger-react'
import { usePathname } from "next/navigation";

export default function MobileMenu({children} : {children: ReactNode}) {
    const [active, setActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setActive(false)
      }, [pathname])

    return <div className={`group/mobile ${active ? 'is-show' : ''}`}>
        <Hamburger size={23} color='#ffffff' toggled={active} toggle={setActive} />
        <div 
            onClick={() => {
                setActive(false)
            }}
            className="hidden fixed right-0 bottom-0 top-16 h-screen shadow-lg shadow-white/20 bg-black-bgd/90 backdrop-blur-md group-[.is-show]/mobile:block w-3/5 pl-8 pt-10 text-white"
        >
            {children}
        </div>
    </div>
}