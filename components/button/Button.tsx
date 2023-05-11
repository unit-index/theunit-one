export default function Button({
    title,
    link,
    download = false,
    target = '_blank',
    small = false,
} : {
    title: string,
    link: string,
    download?: boolean,
    target?: string,
    small?: boolean,
}) {

    return (
        <a 
            className={"inline-block border border-gray-medium text-white " + (small ? 'py-1 px-5 rounded-md text-base' : 'py-2 px-6 rounded-lg text-lg')} 
            download={download} 
            target={target}
            href={link}
        >
            {title}
        </a>
    )
}