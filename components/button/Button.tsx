import { Translated } from "@/utils/types";

export default function Button({
    title,
    small = false,
    gradient = false
} : {
    title: Translated,
    small?: boolean,
    gradient?: boolean
}) {

    return (
        <div 
            className={
                "inline-block border border-gray-medium text-white" + 
                (small ? ' py-1 px-5 rounded-md text-base' : ' py-2 px-6 rounded-lg text-lg') + 
                (gradient ? ' bg-gradient-to-r from-unit-blue to-unit-orange' : ' hover:bg-gradient-to-r hover:from-unit-blue hover:to-unit-orange')
            } 
        >
            {title}
        </div>
    )
}