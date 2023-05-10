export default function Button({
    title,
    link,
    download = false,
    target = '_blank',
} : {
    title: string,
    link: string,
    download?: boolean,
    target?: string,
}) {
    return (
        <a 
            className="py-2 px-6 inline-block border border-gray-medium rounded-lg text-lg text-white" 
            download={download} 
            target={target}
            href={link}
        >
            {title}
        </a>
    )
}