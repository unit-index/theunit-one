import { Link, useTranslations } from 'next-intl';
import Image from 'next/image';
import ClientLink from './ClientLink';
import { navLinks } from '@/utils/constants';
import external from '@/public/external.svg';

export default function Menu() {
    const t = useTranslations();

    return (
        <div className='flex text-xl gap-20 justify-center'>
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
                        {t(link.key)} {link.external && <Image src={external} className='inline-block' alt='external link' />}
                    </Link>
                </ClientLink>
            })}
        </div>
    )
}