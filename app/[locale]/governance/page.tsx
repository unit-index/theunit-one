import { useLocale } from "next-intl"
import PageTemplate from "@/components/layout/PageTemplate";
import request, { gql } from "graphql-request";
import { sanityGraphqlEndpoint } from "@/sanity/lib/client";
import { Dao, GovernancePage, SocialItem } from "@/sanity.types";
import Description from "@/components/Description";
import { CommunityLink } from "../page";
import ThemeButton from "@/components/button/ThemeButton";

const query = gql`
  query getGovernancePage($locale: String!) {
    allGovernancePage(where: { language: { eq: $locale }}) {
        pageTitle
        description: descriptionRaw
        DAO {
            _type
            sectionTitle
            description: descriptionRaw
            buttonText
            buttonLink
            image
        }
        socials {
            logo
            ctaLink
            ctaText
            description
        }
    }
  }
`

export default async function CommunityPage() {


    const locale = useLocale();
    const pageData: any = await request(sanityGraphqlEndpoint, query, { locale })
    const page: GovernancePage = pageData.allGovernancePage[0];
    const socials: SocialItem[] = page.socials as unknown as SocialItem[];
    const dao: Dao = page.DAO as unknown as Dao;

    return <>
        <PageTemplate 
            title={page.pageTitle}
            subtitle={(
                <Description text={page.description} />
            )}
        >
            <div className='flex items-center border border-[#E7E7E7] my-28'>
                <img className='flex-none h-[417px]' src={dao.image} alt='UNIT DAO' />
                <div className='w-full h-[417px] flex flex-col justify-center bg-white pl-14'>
                <div className='font-medium text-xxl mb-2 text-title'>{dao.sectionTitle}</div>
                <Description text={dao.description} />
                <ThemeButton link={dao.buttonLink} title={dao.buttonText} className='mt-11 w-fit' />
                </div>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-3 text-white">
          {socials.map((so, index) => (
              <CommunityLink key={so.name} item={so} index={index} />
          ))}
      </div>
        </PageTemplate>
    </>
}
