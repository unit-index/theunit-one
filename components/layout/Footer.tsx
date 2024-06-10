import { Menu as MenuItems } from '@/sanity.types'
import Header from './Header';

export default function Footer({
    menu
}: {
    menu: MenuItems
}) {
    return (
        <footer className="flex flex-col justify-between items-center border-t border-t-[#E7E7E7] py-6 h-56">
            <Header isFooter menu={menu} />
            <div className='text-sm'>@2024 The UNIT copyright</div>
        </footer>
    )
}
