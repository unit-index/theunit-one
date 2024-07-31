import { Menu as MenuItems } from '@/sanity.types'
import Header from './Header';

export default function Footer({
    menu
}: {
    menu: MenuItems
}) {
    return (
        <footer className="flex flex-col justify-between items-center border-t border-t-[#E7E7E7] py-6 h-24 lg:h-56">
            <div className='hidden lg:block'>
            <Header isFooter menu={menu} />
            </div>
            <div className='text-sm'>@2024 The UNIT copyright</div>
        </footer>
    )
}
