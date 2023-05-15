import { useTranslations } from "next-intl"
import quarterCheck from "@/public/timeline-check.svg"
import Image from "next/image"

// number after -- means how many events that quarter has.
const timelines = [
    "2021-q2--3",
    "2021-q4--2",
    "2022-q1--3",
    "2022-q2--2",
    "2022-q3--2",
    "2023-q1--2",
    "2023-q2--3",
]

export default function DevelopersPage() {

    const t = useTranslations('Developers')

    return (
        <div className="bg-about bg-no-repeat bg-cover bg-left-top pt-28 pb-32">
            <div className="font-bold text-white text-6xl px-36">
                {t('title')}
            </div>
            <div className="mt-16 whitespace-pre-line px-36 mb-16">{t('intro')}</div>
            <div className="w-full relative h-[440px]">
                <div className="absolute left-0 top-0 bottom-0 right-0 pb-[100px] flex items-end">
                    <div className="bg-white h-[1px] w-full" />
                </div>
                <div className="absolute left-0 top-0 bottom-0 right-0 overflow-x-scroll px-[16.67%]">
                    <Timelines />
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-1/6 bg-gradient-to-r from-background via-background/80 to-background/0" />
                <div className="absolute right-0 top-0 bottom-0 w-1/6 bg-gradient-to-r from-background/0 via-background/80 to-background" />
            </div>

        </div>
    )
}

function Timelines() {
    return (
        <div className="flex items-end gap-24 min-w-min">
            {timelines.map((timeline) => (
                <Timeline key={timeline} quarter={timeline} position={1} />
            ))}
        </div>
    )
}

function Timeline({
    quarter,
    position,
} : {
    quarter: string,
    position: number,
}) {

    const heights = [215, 307, 372];
    const infoArr = quarter.split('--');
    const quarterTitle = infoArr[0];
    const events = Array.from(Array(parseInt(infoArr[1])).keys())
    const t = useTranslations('Developers')

    return (
        <div className="flex gap-2 w-56">
            <div className="flex-none flex flex-col items-center w-10">
                <div className="bg-white w-3 h-3 rounded-md" />
                <div 
                    className="bg-gradient-to-b from-main to-main/0"
                    style={{height: heights[position]+'px', width: '1px'}}
                />
                <Image src={quarterCheck} alt="checked" />
                <div className="text-gray-light whitespace-nowrap mt-2">{quarterTitle.toUpperCase()}</div>
            </div>
            <ul className="flex-auto list-disc text-white text-base">
                {events.map((event) => (
                    <li key={event}>
                        {t(`${quarterTitle}-${event+1}`)}
                    </li>
                ))}
            </ul>

        </div>
    )
}