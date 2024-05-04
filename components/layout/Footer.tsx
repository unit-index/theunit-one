import Image from 'next/image'
import Menu from './Menu';
import { Menu as MenuItems, SocialItem } from '@/sanity.types'

export default function Footer({
    menu
}: {
    menu: MenuItems
}) {
    return (
        <footer className="flex items-center justify-center sm:justify-between pt-10 pb-10 lg:pb-44 px-20 bg-footer bg-contain bg-no-repeat bg-right border-t border-t-white text-base">
            <div className='hidden flex-auto sm:flex items-center gap-20 text-white'>
                <Image width={190} height={65} className='inline-block mt-[-7px]' src={menu.logo} alt='logo' />
                <div className='hidden xl:flex items-center gap-20'>
                    <Menu isFooter menu={menu.menuItems as any} />
                </div>
            </div>
            <div className='flex-none flex items-center gap-10'>
                {menu.socialItems.map((sl) => {
                    const socialLink = sl as unknown as SocialItem
                    return (
                        <SocialLink key={socialLink.name} icon={socialLink.logo} link={socialLink.link} />
                    )
                })}
            </div>
        </footer>
    )
}

function SocialLink({
    icon, 
    link,
    width = 48,
} : {
    icon: string,
    link: string,
    width?: number,
}) {
    return (
        <a href={link} target="_blank">
            <Image src={icon} alt='social' width={width} height={width} />
        </a>
    )
}