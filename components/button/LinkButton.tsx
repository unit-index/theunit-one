import Button from "./Button";

export default function LinkButton({
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
            download={download} 
            target={target}
            href={link}
        >
            <Button title={title} small={small} />
        </a>
    )
}