import { useLocale } from "next-intl"
import Image from "next/image"
import PageTemplate from "@/components/layout/PageTemplate"
import Description from "@/components/Description"
import request, { gql } from "graphql-request"
import { sanityGraphqlEndpoint } from "@/sanity/lib/client"
import { DeveloperLink as DeveloperLinkType, DeveloperPage, MilestoneItem } from "@/sanity.types"
import ThemeButton from "@/components/button/ThemeButton"

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
            buttonText
            description: descriptionRaw
        }
    }
  }
`

export default async function DevelopersPage() {

    const locale = useLocale();
    const pageData: any = await request(sanityGraphqlEndpoint, query, { locale })
    const page: DeveloperPage = pageData.allDeveloperPage[0];
    const links: DeveloperLinkType[] = page.developerLinks as unknown as DeveloperLinkType[];
    const milestones: MilestoneItem[] = page.milestones as unknown as MilestoneItem[];
    const firstLink = links[0];
    const secondLink = links[1];
    const thirdLink = links[2];

    return (<div>
        <PageTemplate
            title={page.pageTitle}
            subtitle={(
                <Description text={page.description} />
            )}
        >

            <div className="grid grid-cols-2 gap-5 mt-24">
                <DeveloperLink link={firstLink} height={380} btnText={firstLink.buttonText} />
                <div className="flex flex-col gap-5">
                <DeveloperLink link={secondLink} />
                <DeveloperLink link={thirdLink} />    
                </div>
            </div>

            {links.length > 3 && (
                <div className="grid grid-cols-2 gap-5 mt-5">
                    {links.slice(3).map((link) => <DeveloperLink key={link.linkTitle} link={link} />)}
                </div>
            )}

            <div className="mt-48">
                {page.milestoneTitle}
            </div>

        </PageTemplate>
        <div className="relative -mt-24 mb-64">
                    <div className="px-24 w-screen overflow-x-scroll no-scrollbar">
                        <Timelines timelines={milestones} />
                    </div>
                    <div className="absolute bg-black h-[1px] w-full bottom-[60px]" />
                </div>
        </div>
    )
}

function DeveloperLink({
    link,
    height = 180,
    btnText,
}: {
    link: DeveloperLinkType,
    height?: number,
    btnText?: string,
}) {
    return (
        <a 
            key={link.linkTitle} 
            href={link.link}
            className="w-full flex flex-col justify-between rounded-2xl shadow-lg bg-white/60 py-10 px-8"
            style={{ height: `${height}px` }}
        >
            <div>
            <div className="flex items-center justify-between">
                <div className="font-bold text-2xl text-gradient">{link.linkTitle}</div>
                <Image 
                    width={48} 
                    height={48}
                    src={link.linkLogo}
                    alt='external link' 
                />
            </div>
            {btnText && (
                <Description text={link.description} />
            )}
            </div>
            {btnText ? (
                <div className="text-right">
                    <ThemeButton title={btnText} link={link.link} className="w-fit" />
                </div>
            ) : (
                <div className="text-xl flex gap-2 items-end">
                    <div className="flex-auto">
                        <Description text={link.description} />
                    </div>
                    <Image 
                        width={20} 
                        height={20}
                        src='/external.svg'
                        alt='external link' 
                        className="opacity-30"
                    />
                </div>
            )}
        </a>
    )
}

function Timelines({
    timelines
}: {
    timelines: MilestoneItem[]
}) {
    return (
        <div className="flex items-end gap-24 min-w-min">
            {timelines?.map((timeline, index) => (
                <Timeline key={timeline._id} milestone={timeline} position={(index+2)%3} />
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
        <div className="flex gap-2 w-56 text-title">
            <div className="flex-none flex flex-col items-center w-10">
                <div className="bg-black w-3 h-3 rounded-md" />
                <div 
                    className="bg-gradient-to-b from-main to-main/0"
                    style={{height: heights[position]+'px', width: '1px'}}
                />
                <Image src="/milestone-check.svg" width={40} height={40} alt="checked" />
                <div className="whitespace-nowrap mt-2">{milestone.time.toUpperCase()}</div>
            </div>
            <ul className="flex-auto list-disc text-base">
                {milestone.milestones.map((event, index) => (
                    <li key={index}>
                        {event}
                    </li>
                ))}
            </ul>

        </div>
    )
}