import Image from 'next/image'
import logo from '@/public/logo.svg'
import discord from '@/public/discord.svg'
import twitter from '@/public/twitter.svg'
import youtube from '@/public/youtube.svg'
import Menu from './Menu';
import { discordUrl, twitterUrl, youtubeUrl } from '@/utils/constants'

export default function Footer() {
    return (
        <div className="flex items-center pt-10 pb-44 px-20 bg-footer bg-contain bg-no-repeat bg-right border-t border-t-white text-base">
            <div className='flex-auto flex items-center gap-20 text-white'>
                <Image width={190} className='inline-block mt-[-7px]' src={logo} alt='logo' />
                <Menu isWhite />
            </div>
            <div className='flex-none flex items-center gap-10'>
                <SocialLink icon={discord} link={discordUrl} />
                <SocialLink icon={twitter} link={twitterUrl} />
                <SocialLink icon={youtube} link={youtubeUrl} />
            </div>
        </div>
    )
}

function SocialLink({
    icon, 
    link
} : {
    icon: string,
    link: string,
}) {
    return (
        <a href={link} target="_blank">
            <Image src={icon} alt='social' />
        </a>
    )
}