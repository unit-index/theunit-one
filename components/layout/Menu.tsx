import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ClientLink from './ClientLink';
import { navLinks } from '@/utils/constants';
import activeArrow from '@/public/active-arrow.svg';
import externalWhite from '@/public/external-white.svg';
import Link from 'next/link';

export default function Menu({isFooter = false} : {isFooter?: boolean}) {
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
                                width={24} 
                                src={externalWhite} 
                                className='group-hover:hidden inline-block -mt-1' 
                                alt='external link' 
                            />
                            <Image 
                                width={24} 
                                src={activeArrow} 
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