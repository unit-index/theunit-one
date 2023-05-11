export default function Button({
    title,
    small = false,
} : {
    title: string,
    small?: boolean,
}) {

    return (
        <div 
            className={"inline-block border border-gray-medium text-white " + (small ? 'py-1 px-5 rounded-md text-base' : 'py-2 px-6 rounded-lg text-lg')} 
        >
            {title}
        </div>
    )
}