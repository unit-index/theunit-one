import { useTranslations } from "next-intl"
import quarterCheck from "@/public/timeline-check.svg"
import Image from "next/image"
import ExternalLinkButton from "@/components/button/ExternalLinkButton"
import { docsUrl, githubUrl, unitPaperUrl } from "@/utils/constants"
import externalWhite from '@/public/external-white.svg';
import PageTemplate from "@/components/layout/PageTemplate"
import { whiteTrans } from "@/utils/TranslationHelper"
import { Translated } from "@/utils/types"

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

    return <>
        <PageTemplate
            title={t('title')}
            subtitle={t.rich('intro', whiteTrans)}
        >
            <div className="w-full relative h-[440px]">
                <div className="absolute left-[-16.67%] top-0 bottom-0 right-[-16.67%] pb-[100px] flex items-end">
                    <div className="bg-white h-[1px] w-full" />
                </div>
                <div className="absolute left-[-16.67%] top-0 bottom-0 right-[-16.67%] overflow-x-scroll px-[16.67%]">
                    <Timelines />
                </div>
                <div className="absolute left-[-16.67%] top-0 bottom-0 w-1/4 bg-gradient-to-r from-background via-background/95 to-background/0" />
                <div className="absolute right-[-16.67%] top-0 bottom-0 w-1/4 bg-gradient-to-r from-background/0 via-background/95 to-background" />
            </div>
            <div className="grid gap-12 grid-cols-3 mx-36 py-32 border-y border-y-gray-border mb-32">
                <DeveloperLink 
                    title="Github" 
                    subtitle={t.rich('github-intro', whiteTrans)} 
                    link={githubUrl} 
                />
                <DeveloperLink 
                    title={t('docs')} 
                    subtitle={t.rich('docs-intro', whiteTrans)} 
                    link={docsUrl} 
                />
                <DeveloperLink 
                    title={t('white-paper')} 
                    subtitle={t.rich('white-paper-intro', whiteTrans)} 
                    link={unitPaperUrl} 
                />
            </div>
        </PageTemplate>
    </>
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

function DeveloperLink({
    title,
    subtitle,
    link,
} : {
    title: string,
    subtitle: Translated,
    link: string,
}) {
 return (
    <ExternalLinkButton link={link}>
        <div className="flex justify-between items-center py-6 px-10 h-full">
            <div className="h-full">
                <div className="text-white text-xl">{title}</div>
                <div className="mt-2 text-xl pr-2">{subtitle}</div>
            </div>
            <Image src={externalWhite} alt={title} />
        </div>
    </ExternalLinkButton>
 )
}