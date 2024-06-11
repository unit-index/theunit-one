import { useLocale } from "next-intl"
import Image from "next/image"
import ExternalLinkButton from "@/components/button/ExternalLinkButton"
import externalWhite from '@/public/external-white.svg';
import LinkButton from "@/components/button/LinkButton";
import PageTemplate from "@/components/layout/PageTemplate";
import BlurContainer from "@/components/BlurContainer";
import request, { gql } from "graphql-request";
import { sanityGraphqlEndpoint } from "@/sanity/lib/client";
import { AssetItem, GovernancePage, SocialItem } from "@/sanity.types";
import Description from "@/components/Description";
import { CommunityLink } from "../page";

const query = gql`
  query getGovernancePage($locale: String!) {
    allGovernancePage(where: { language: { eq: $locale }}) {
        pageTitle
        description: descriptionRaw
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

    return <>
        <PageTemplate 
            title={page.pageTitle}
            subtitle={(
                <Description text={page.description} />
            )}
        >
            <div className="grid gap-10 grid-cols-1 md:grid-cols-3 text-white -mt-16">
          {socials.map((so, index) => (
              <CommunityLink key={so.name} item={so} index={index} />
          ))}
      </div>
        </PageTemplate>
    </>
}
