import { useTranslations } from "next-intl"
import quarterCheck from "@/public/timeline-check.svg"
import Image from "next/image"
import ExternalLinkButton from "@/components/button/ExternalLinkButton"
import { docsUrl, githubUrl, unitPaperUrl } from "@/utils/constants"
import externalWhite from '@/public/external-white.svg';
import PageTemplate from "@/components/layout/PageTemplate"
import { whiteTrans } from "@/utils/TranslationHelper"
import { Translated } from "@/utils/types"
import github from "@/public/github.svg"
import docs from "@/public/docs.svg"
import paper from "@/public/paper.svg"

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
            className="bg-[url(/developers.png),url(/page-bgd.png)] bg-[position:right_top,left_bottom] overflow-x-hidden"
        >
            <div className="text-4xl mb-12 text-white font-semibold">
                {t('milestones')}
            </div>
            <div className="w-full relative h-[440px] mb-24">
                <div className="absolute left-0 lg:left-[-16.67%] top-0 bottom-0 right-0 lg:right-[-16.67%] pb-[100px] flex items-end">
                    <div className="bg-white h-[1px] w-full" />
                </div>
                <div className="absolute left-0 lg:left-[-16.67%] top-0 bottom-0 right-0 lg:right-[-16.67%] overflow-x-scroll px-[16.67%]">
                    <Timelines />
                </div>
                <div className="hidden lg:block absolute left-0 lg:left-[-16.67%] -top-12 bottom-0 w-1/4 bg-gradient-to-r from-background via-background/95 to-background/0" />
                <div className="hidden lg:block absolute right-0 lg:right-[-16.67%] -top-12 bottom-0 w-1/4 bg-gradient-to-r from-background/0 via-background/95 to-background" />
            </div>
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-8 2xl:mx-36 py-32 border-t border-t-gray-border mb-24">
                <DeveloperLink 
                    title="Github" 
                    icon={github}
                    subtitle={t.rich('github-intro', whiteTrans)} 
                    link={githubUrl} 
                />
                <DeveloperLink 
                    title={t('docs')} 
                    icon={docs}
                    subtitle={t.rich('docs-intro', whiteTrans)} 
                    link={docsUrl} 
                />
                <DeveloperLink 
                    title={t('white-paper')} 
                    icon={paper}
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
    icon,
    subtitle,
    link,
} : {
    title: string,
    icon: string,
    subtitle: Translated,
    link: string,
}) {
 return (
    <ExternalLinkButton hover link={link} className="h-full">
        <div className="text-gray-light text-xl flex items-center gap-2 justify-between">
            <div className="flex-1">
                <Image 
                    className="inline-block -mt-1 mr-1" 
                    src={icon} alt={title} 
                />
                {title}
            </div>
            <Image className="flex-none" src={externalWhite} alt={title} />
        </div>
        <div className="mt-4 text-xl">{subtitle}</div>
    </ExternalLinkButton>
 )
}