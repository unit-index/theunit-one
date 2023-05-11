import Image from 'next/image'
import logo from '@/public/logo.svg'
import Menu from './Menu';
import Button from '../button/Button';
import { useTranslations } from 'next-intl';
import { appUrl } from '@/utils/constants';

export default function Header() {

    const t = useTranslations();

    return (
        <div className="sticky flex items-center pt-3 px-20 backdrop-blur-md bg-background/60">
            <Image className='flex-none' src={logo} alt='logo' />
            <div className='flex-auto flex text-xl gap-20 justify-center'>
                <Menu />
            </div>
            <div className='flex-none'>
                <Button title={t('launch-app')} link={appUrl} />
            </div>
        </div>
    )
}