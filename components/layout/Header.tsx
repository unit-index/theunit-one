import Image from 'next/image'
import Menu from './Menu';
import LinkButton from '../button/LinkButton';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from '../LanguageSwitcher';
import AvailableLocales from '../LocaleLinks';
import { Link } from '@/navigation';
import { Menu as MenuItems } from '@/sanity.types';

export default function Header({
    menu
}: {
    menu: MenuItems
}) {

    return (
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between py-3 px-8 xl:px-20 backdrop-blur-md bg-background/60 z-[999]">
            <Link href='/'>
                <Image className='flex-none' src={menu.logo ?? '/logo.svg'} alt='logo' width={99} height={34} />
            </Link>
            <div className='hidden xl:flex flex-auto text-base gap-20 justify-center text-white'>
                <Menu menu={menu.menuItems as any} />
            </div>
            <div className='hidden xl:flex items-center gap-12 flex-none'>
                <LinkButton title={menu.buttonText} link={menu.buttonLink} />
                <LanguageSwitcher />
            </div>
            <div className='xl:hidden'>
                <MobileMenu>
                    <div className='flex flex-col text-base gap-14'>
                        <Menu menu={menu.menuItems as any} />
                        <LinkButton title={menu.buttonText} link={menu.buttonLink} />
                        <div className='flex flex-col text-white gap-6'>
                            <AvailableLocales />
                        </div>
                    </div>
                </MobileMenu>
            </div>
        </nav>
    )
}