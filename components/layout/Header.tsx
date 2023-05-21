import Image from 'next/image'
import logo from '@/public/logo.svg'
import Menu from './Menu';
import LinkButton from '../button/LinkButton';
import { Link, useTranslations } from 'next-intl';
import { appUrl } from '@/utils/constants';
import MobileMenu from './MobileMenu';

export default function Header() {

    const t = useTranslations();

    return (
        <div className="fixed top-0 left-0 right-0 flex items-center justify-between py-3 px-8 xl:px-20 backdrop-blur-md bg-background/60 z-[999]">
            <Link href='/'>
                <Image className='flex-none' src={logo} alt='logo' />
            </Link>
            <div className='hidden xl:flex flex-auto text-base gap-20 justify-center'>
                <Menu />
            </div>
            <div className='hidden xl:flex flex-none'>
                <LinkButton title={t('launch-app')} link={appUrl} />
            </div>
            <div className='xl:hidden'>
                <MobileMenu>
                    <div className='flex flex-col text-base gap-14'>
                        <Menu />
                        <LinkButton title={t('launch-app')} link={appUrl} />
                    </div>
                </MobileMenu>
            </div>
        </div>
    )
}