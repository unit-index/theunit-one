import Image from 'next/image'
import logo from '@/public/logo.svg'
import Menu from './Menu';
import LinkButton from '../button/LinkButton';
import { Link, useTranslations } from 'next-intl';
import { appUrl } from '@/utils/constants';

export default function Header() {

    const t = useTranslations();

    return (
        <div className="fixed top-0 left-0 right-0 flex items-center pt-3 px-20 backdrop-blur-md bg-background/60 z-[999]">
            <Link href='/'>
                <Image className='flex-none' src={logo} alt='logo' />
            </Link>
            <div className='flex-auto flex text-xl gap-20 justify-center'>
                <Menu />
            </div>
            <div className='flex-none'>
                <LinkButton title={t('launch-app')} link={appUrl} />
            </div>
        </div>
    )
}