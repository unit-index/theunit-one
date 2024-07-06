import Image from 'next/image'
import AvailableLocales from './LocaleLinks';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {

    const locale = useLocale();

    return (
        <div className="relative group border border-black px-4 py-2.5 rounded-full flex items-center gap-2">
            <Image className='cursor-pointer' src="/earth.svg" width={21} height={21} alt="language" />
            <div>{locale.toUpperCase()}</div>
            <div className='hidden group-hover:flex flex-col gap-3 px-8 absolute top-[41px] right-0 py-4 rounded-2xl border border-black'>
                <AvailableLocales />
            </div>
        </div>
    )
}
