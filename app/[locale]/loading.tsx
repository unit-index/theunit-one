import Image from "next/image";
import logo from "@/public/logo-small.svg"

export default function Loading() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Image 
                src={logo} 
                className="block animate-spin"
                alt="loading" 
            />
        </div>
    )
}