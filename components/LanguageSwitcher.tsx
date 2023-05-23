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
        <Link href="/" locale="en">English</Link>
        <Link href="/" locale="es">Español</Link>
        <Link href="/" locale="cn">中文</Link>
    </>
}
