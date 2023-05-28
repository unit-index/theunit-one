import Image from "next/image";
import ellipse from "@/public/ellipse.svg"
import go from "@/public/go.svg"

export default function LineButton({
    link,
    title,
} : {
    link: string,
    title: string,
}) {
    return (
        <a className="relative group inline-block py-6 px-12 text-white" href={link}>
            <div
                className="absolute left-0 top-0 w-60 h-20 rounded-[80%] border border-unit-blue transition-transform duration-700 ease-in-out group-hover:rotate-180" 
            />
            <div
                className="absolute left-0 top-0 w-60 h-20 rounded-[80%] -rotate-[7deg] border border-unit-orange transition-transform duration-700 ease-in-out group-hover:-rotate-[187deg]" 
            />
            <div className="flex items-center gap-2 text-lg">
                <div>{title}</div>
                <Image src={go} alt="go" />
                <Image src={go} alt="go" />
            </div>
        </a>
    )
}