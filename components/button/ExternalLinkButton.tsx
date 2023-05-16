import externalWhite from '@/public/external-white.svg';
import Image from 'next/image';

export default function ExternalLinkButton({
    title,
    link,
} : {
    title: string,
    link: string,
}) {

    return (
        <a 
            className={"flex justify-between items-center bg-gray-heavy/60 backdrop-blur-sm rounded-xl py-6 px-10 border border-gray-border text-white text-xl"} 
            href={link}
            target="_blank"
        >
            <div>{title}</div>
            <Image src={externalWhite} alt={title} />
        </a>
    )
}