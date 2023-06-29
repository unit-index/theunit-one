'use client'

import { AVAILABLE_LOCALES } from '@/utils/constants';
import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';

export default function AvailableLocales() {

    const path = usePathname();

    return <>
       {AVAILABLE_LOCALES.map((loc) => (
            <LocaleLink 
                language={loc.locale} 
                title={loc.title} 
                key={loc.locale} 
                path={path}
            />
       ))}
    </>
}

function LocaleLink({
    language,
    title,
    path,
} : {
    language: string,
    title: string,
    path: string,
}) {

    return (
        <Link 
            className='group/locale' 
            href={path} 
            locale={language}
        >
            <span className='group-hover/locale:text-gradient'>{title}</span>
        </Link>
    )
}