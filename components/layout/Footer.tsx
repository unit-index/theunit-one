import Image from 'next/image'
import logo from '@/public/logo.svg'
import discord from '@/public/discord.svg'
import twitter from '@/public/twitter.svg'
import github from '@/public/github.svg'
import Menu from './Menu';
import { discordUrl, twitterUrl, githubUrl } from '@/utils/constants'

export default function Footer() {
    return (
        <footer className="flex items-center justify-center sm:justify-between pt-10 pb-10 lg:pb-44 px-20 bg-footer bg-contain bg-no-repeat bg-right border-t border-t-white text-base">
            <div className='hidden flex-auto sm:flex items-center gap-20 text-white'>
                <Image width={190} className='inline-block mt-[-7px]' src={logo} alt='logo' />
                <div className='hidden xl:flex items-center gap-20'>
                    <Menu isFooter />
                </div>
            </div>
            <div className='flex-none flex items-center gap-10'>
                <SocialLink icon={discord} link={discordUrl} />
                <SocialLink icon={twitter} link={twitterUrl} />
                <SocialLink icon={github} link={githubUrl} />
            </div>
        </footer>
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