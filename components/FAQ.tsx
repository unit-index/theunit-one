'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import useMeasure from 'react-use-measure'
import angleDown from "@/public/angle-down.svg"
import { Translated } from "@/utils/types"

export default function FAQ({
    question,
    answer,
} : {
    question: Translated,
    answer: Translated,
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
            className="bg-gray-heavy/60 backdrop-blur-sm rounded-lg border border-gray-border px-10 transition-all duration-500 ease-in-out overflow-hidden"
            style={{ height: show ? faqHeight+ansHeight+'px' : faqHeight+'px' }}
        >
            <div 
                className={"flex items-center cursor-pointer font-semibold text-white pt-6"}
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
                className={"transition-opacity duration-500 ease-in-out text-lg pt-4 " + (show ? 'opacity-100' : 'opacity-0')}
            >
                {answer}
            </div>
        </div>
    )
}