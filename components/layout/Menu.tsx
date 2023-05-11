import { Link, useTranslations } from 'next-intl';
import Image from 'next/image';
import ClientLink from './ClientLink';
import { navLinks } from '@/utils/constants';
import external from '@/public/external.svg';
import externalWhite from '@/public/external-white.svg';

export default function Menu({isWhite = false} : {isWhite?: boolean}) {
    const t = useTranslations();

    return (
        <>
            {navLinks.map((link) => {
                return <ClientLink 
                            className="hover:text-white"
                            linkKey={link.key} 
                            key={link.key}
                        >
                    <Link 
                        key={link.key}
                        className='group-[.is-active]:text-white'
                        href={link.link}
                        target={link.external ? '_blank' : '_self'}
                    >
                        {t(link.key)} {link.external && (
                            <Image 
                                width={24} 
                                src={isWhite ? externalWhite : external} 
                                className='inline-block -mt-1' 
                                alt='external link' 
                            />
                        )}
                    </Link>
                </ClientLink>
            })}
        </>
    )
}