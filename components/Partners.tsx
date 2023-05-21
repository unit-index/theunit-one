import { partners } from "@/utils/constants";
import Image from "next/image"

export default function Partners() {
    return <>
        <PartnersRow names={partners.slice(0, 3)} />
        <PartnersRow names={partners.slice(3, 7)} />
        <PartnersRow names={partners.slice(7, partners.length)} />
    </>
}

function PartnersRow({names} : {names: string[]}) {

    const len = names.length;

    return (
        <div className="flex gap-5 justify-center mb-5">
            {names.map((name, index) => <Partner key={index} url={name.toLowerCase().replaceAll(' ', '-')} />)}
        </div>
    )
}

function Partner({url} : {url: string}) {
    return (
        <Image 
            className="opacity-75 cursor-pointer hover:opacity-100 rounded-2xl hover:scale-110 transition-transform duration-400 ease-in-out"
            src={`/${url}.png`}
            width={110}
            height={110}
            alt="partner"
        />
    )
}