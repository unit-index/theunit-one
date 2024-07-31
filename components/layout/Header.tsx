import Image from 'next/image'
import Menu from './Menu';
import LinkButton from '../button/LinkButton';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from '../LanguageSwitcher';
import AvailableLocales from '../LocaleLinks';
import { Link } from '@/navigation';
import { MenuItem, Menu as MenuItems } from '@/sanity.types';
import ThemeButton from '../button/ThemeButton';

export default function Header({
    isFooter = false,
    menu
}: {
    isFooter?: boolean,
    menu: MenuItems
}) {

    const menuItems = menu.menuItems as unknown as MenuItem[];

    return (
        <nav className="w-full flex items-center justify-between py-3 px-8 xl:px-20">
            <Link href='/' className='w-[235px]'>
                <Image className='flex-none' src={menu.logo ?? '/logo.png'} alt='logo' width={118} height={41} />
            </Link>
            <div className='hidden md:flex gap-10 text-base'>
                <Menu menus={menuItems} />
            </div>
            <div className='hidden xl:flex flex-none text-sm gap-6 items-center'>
                <ThemeButton title={menu.buttonText} link={menu.buttonLink} />
                <LanguageSwitcher />
            </div>
            <div className='xl:hidden'>
                <MobileMenu>
                    <div className='flex flex-col text-base gap-14'>
                        <Menu menus={menuItems} />
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