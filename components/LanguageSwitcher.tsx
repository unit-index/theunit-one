import Image from 'next/image'
import earth from '@/public/earth.svg'
import AvailableLocales from './LocaleLinks';

export default function LanguageSwitcher() {

    return (
        <div className="relative group">
            <Image className='cursor-pointer' src={earth} alt="language" />
            <div className='hidden group-hover:block absolute pt-4 rounded-lg bg-gray-heavy/60 backdrop-blur-sm'>
                <div className='flex flex-col gap-4 p-4 rounded-lg border border-gray-medium text-white text-base'>
                    <AvailableLocales />
                </div>
            </div>
        </div>
    )
}
