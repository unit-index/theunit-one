import { Link, useTranslations } from 'next-intl';
import Image from 'next/image';
import ClientLink from './ClientLink';
import { navLinks } from '@/utils/constants';
import activeArrow from '@/public/active-arrow.svg';
import externalWhite from '@/public/external-white.svg';

export default function Menu({isFooter = false} : {isFooter?: boolean}) {
    const t = useTranslations();

    return (
        <>
            {navLinks.map((link) => {
                return <ClientLink 
                            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-unit-blue hover:to-unit-orange"
                            linkKey={link.key} 
                            key={link.key}
                        >
                    <Link 
                        key={link.key}
                        className={isFooter ? '' :
                            'group-[.is-active]:text-transparent group-[.is-active]:bg-clip-text group-[.is-active]:bg-gradient-to-r group-[.is-active]:from-unit-blue group-[.is-active]:to-unit-orange'
                        }
                        href={link.link}
                        target={link.external ? '_blank' : '_self'}
                    >
                        {t(link.key)} {link.external && <>
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