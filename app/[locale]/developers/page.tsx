import { useLocale } from "next-intl"
import Image from "next/image"
import ExternalLinkButton from "@/components/button/ExternalLinkButton"
import externalWhite from '@/public/external-white.svg';
import PageTemplate from "@/components/layout/PageTemplate"
import Description from "@/components/Description"
import request, { gql } from "graphql-request"
import { sanityGraphqlEndpoint } from "@/sanity/lib/client"
import { DeveloperLink, DeveloperPage, MilestoneItem } from "@/sanity.types"
import { ReactNode } from "react"

const query = gql`
  query getDeveloperPage($locale: String!) {
    allDeveloperPage(where: { language: { eq: $locale }}) {
        pageTitle
        description: descriptionRaw
        milestoneTitle
        milestones {
            time
            milestones
        }
        developerLinks {
            linkTitle
            linkLogo
            link
            description: descriptionRaw
        }
    }
  }
`

export default async function DevelopersPage() {

    const locale = useLocale();
    const pageData: any = await request(sanityGraphqlEndpoint, query, { locale })
    const page: DeveloperPage = pageData.allDeveloperPage[0];
    const milestones: MilestoneItem[] = page.milestones as unknown as MilestoneItem[];
    const links: DeveloperLink[] = page.developerLinks as unknown as DeveloperLink[];

    return <>
        <PageTemplate
            title={page.pageTitle}
            subtitle={(
                <Description text={page.description} />
            )}
            className="bg-[url(/developers.png),url(/page-bgd.png)] bg-[position:right_top,left_bottom] overflow-x-hidden"
        >
            <div className="text-4xl mb-12 text-white font-semibold">
                {page.milestoneTitle}
            </div>
            <div className="w-full relative h-[440px] mb-24">
                <div className="absolute left-0 lg:left-[-16.67%] top-0 bottom-0 right-0 lg:right-[-16.67%] pb-[100px] flex items-end">
                    <div className="bg-white h-[1px] w-full" />
                </div>
                <div className="absolute left-0 lg:left-[-16.67%] top-0 bottom-0 right-0 lg:right-[-16.67%] overflow-x-scroll px-[16.67%]">
                    <Timelines timelines={milestones} />
                </div>
                <div className="hidden lg:block absolute left-0 lg:left-[-16.67%] -top-12 bottom-0 w-1/4 bg-gradient-to-r from-background via-background/95 to-background/0" />
                <div className="hidden lg:block absolute right-0 lg:right-[-16.67%] -top-12 bottom-0 w-1/4 bg-gradient-to-r from-background/0 via-background/95 to-background" />
            </div>
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-8 2xl:mx-36 py-32 border-t border-t-gray-border mb-24">
                {links.map((l) => (
                    <DeveloperLink 
                        key={l._id}
                        title={l.linkTitle}
                        icon={l.linkLogo}
                        subtitle={(
                            <Description text={l.description} />
                        )} 
                        link={l.link} 
                    />
                ))}
            </div>
        </PageTemplate>
    </>
}

function Timelines({
    timelines
}: {
    timelines: MilestoneItem[]
}) {
    return (
        <div className="flex items-end gap-24 min-w-min">
            {timelines.map((timeline) => (
                <Timeline key={timeline._id} milestone={timeline} position={1} />
            ))}
        </div>
    )
}

function Timeline({
    milestone,
    position,
} : {
    milestone: MilestoneItem,
    position: number,
}) {

    const heights = [215, 307, 372];

    return (
        <div className="flex gap-2 w-56">
            <div className="flex-none flex flex-col items-center w-10">
                <div className="bg-white w-3 h-3 rounded-md" />
                <div 
                    className="bg-gradient-to-b from-main to-main/0"
                    style={{height: heights[position]+'px', width: '1px'}}
                />
                <Image src="/timeline-check.svg" width={40} height={40} alt="checked" />
                <div className="text-gray-light whitespace-nowrap mt-2">{milestone.time.toUpperCase()}</div>
            </div>
            <ul className="flex-auto list-disc text-white text-base">
                {milestone.milestones.map((event, index) => (
                    <li key={index}>
                        {event}
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
    subtitle: ReactNode,
    link: string,
}) {
 return (
    <ExternalLinkButton hover link={link} className="h-full">
        <div className="text-gray-light text-xl flex items-center gap-2 justify-between">
            <div className="flex-1">
                <Image 
                    className="inline-block -mt-1 mr-1" 
                    src={icon} 
                    width={24}
                    height={24}
                    alt={title}
                />
                {title}
            </div>
            <Image className="flex-none" src={externalWhite} alt={title} />
        </div>
        <div className="mt-4 text-xl">{subtitle}</div>
    </ExternalLinkButton>
 )
}