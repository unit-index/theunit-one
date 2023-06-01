import Image from 'next/image'
import { Link } from 'next-intl';
import earth from '@/public/earth.svg'

export default function LanguageSwitcher() {

    return (
        <div className="relative group">
            <Image src={earth} alt="language" /> 
            <div className='hidden group-hover:block absolute pt-4 rounded-lg'>
                <div className='flex flex-col gap-4 p-4 rounded-lg border border-gray-medium text-white text-base'>
                    <AvailableLocales />
                </div>
            </div>
        </div>
    )
}

export function AvailableLocales() {
    return <>
        <LocaleLink key="en" title='English' />
        <LocaleLink key="es" title='Español' />
        <LocaleLink key="cn" title='中文' />
    </>
}

function LocaleLink({
    key,
    title,
} : {
    key: string,
    title: string,
}) {
    return (
        <Link 
            className='hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-unit-blue to-unit-orange' 
            href="/" 
            locale={key}
        >
            {title}
        </Link>
    )
}
