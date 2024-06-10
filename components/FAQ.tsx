'use client'

import Image from "next/image"
import { ReactNode, useEffect, useState } from "react"
import useMeasure from 'react-use-measure'
import angleDown from "@/public/angle-down.svg"
import { twMerge } from "tailwind-merge"

export default function FAQ({
    question,
    answer,
} : {
    question: string,
    answer: ReactNode,
}) {

    const [show, setShow] = useState(false)
    const [faqHeight, setFaqHeight] = useState(0)
    const [ansHeight, setAnsHeight] = useState(0)
    const [ref, bounds] = useMeasure()
    const [refAns, boundsAns] = useMeasure()

    useEffect(() => {
        if (faqHeight == 0 && bounds.height > 0) {
            // need to add the y padding
            setFaqHeight(bounds.height+23)
        }
        if (ansHeight == 0 && boundsAns.height > 0) {
            setAnsHeight(boundsAns.height)
        }
    }, [ansHeight, bounds, boundsAns, faqHeight])

    return (
        <div 
            className="border-b border-[#DFDFDF] transition-all duration-500 ease-in-out overflow-hidden"
            style={{ height: show ? faqHeight+ansHeight+'px' : faqHeight+'px' }}
        >
            <div 
                className={twMerge("flex items-center cursor-pointer font-bold text-[#9E9E9E]", show ? 'text-black': '')}
                ref={ref}
                onClick={() => {
                    setShow(!show)
                }}
            >
                <div className="flex-auto">{question}</div>
                <Image 
                    src={angleDown} 
                    alt="faq" 
                    className={"transition-transform " + (show ? "rotate-180" : "rotate-0")}
                />
            </div>
            <div 
                ref={refAns} 
                className={"transition-opacity duration-500 ease-in-out text-base pt-4 " + (show ? 'opacity-100' : 'opacity-0')}
            >
                {answer}
            </div>
        </div>
    )
}