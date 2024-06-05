import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ClientLink from './ClientLink';
import { navLinks } from '@/utils/constants';
import { Link } from '@/navigation';
import { MenuItem } from '@/sanity.types';

export default function Menu({
    menu,
    isFooter = false
} : {
    menu: MenuItem[],
    isFooter?: boolean
}) {
    const t = useTranslations();

    return (
        <>
            {navLinks.map((link) => {
                return <ClientLink 
                            linkKey={link.key} 
                            key={link.key}
                        >
                    <Link 
                        key={link.key}
                        className='block'
                        href={link.link}
                        target={link.external ? '_blank' : '_self'}
                    >
                        <span className={"group-hover:text-gradient" + (isFooter ? '' : ' group-[.is-active]:text-gradient')}>
                            {t(link.key)}
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
                </ClientLink>
            })}
        </>
    )
}