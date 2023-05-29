import Image from "next/image";
import go from "@/public/go.svg"

export default function LineButton({
    link,
    title,
    className = '',
} : {
    link: string,
    title: string,
    className?: string,
}) {
    return (
        <a className={"relative group inline-block py-6 px-12 text-white " + className} href={link}>
            <div
                className="absolute left-0 top-0 w-60 h-20 rounded-[80%] rotate-[5deg] border border-unit-blue transition-transform duration-700 ease-out group-hover:rotate-[160deg]" 
            />
            <div
                className="absolute left-0 top-0 w-60 h-20 rounded-[80%] -rotate-[5deg] border border-unit-orange transition-transform duration-700 ease-out group-hover:-rotate-[160deg]" 
            />
            <div className="flex items-center gap-2 text-lg justify-center">
                <div>{title}</div>
                <Image src={go} alt={title} />
            </div>
        </a>
    )
}