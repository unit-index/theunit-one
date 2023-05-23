import Image from "next/image";
import logo from "@/public/logo-small.svg"

export default function Loading() {
    return (
        <Image 
            src={logo} 
            className="block animate-spin"
            alt="loading" 
        />
    )
}