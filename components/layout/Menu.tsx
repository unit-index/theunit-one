'use client';

import Image from 'next/image';
import { Link, usePathname } from '@/navigation';
import { MenuItem } from '@/sanity.types';

export default function Menu({
    menus,
    isFooter = false
} : {
    menus: MenuItem[],
    isFooter?: boolean
}) {

    const pathname = usePathname();

    return (
        <>
            {menus.map((link) => {
                return ( 
                    <Link 
                        key={link.menuTitle}
                        className='block'
                        href={link.menuLink}
                        target={link.external ? '_blank' : '_self'}
                    >
                        <span className={"group-hover:text-gradient" + (isFooter ? '' : ' group-[.is-active]:text-gradient')}>
                            {link.menuTitle}
                        </span> 
                        {link.external && <>
                            <Image 
                                width={20} 
                                height={20}
                                src="/external.svg" 
                                className='group-hover:hidden inline-block -mt-1' 
                                alt='external link' 
                            />
                            <Image 
                                width={20} 
                                height={20}
                                src="/active-arrow.svg" 
                                className='hidden group-hover:inline-block -mt-1' 
                                alt='external link' 
                            />
                        </>}
                    </Link>
                )
            })}
        </>
    )
}