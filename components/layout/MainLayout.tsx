import { Suspense } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "../Loading";
import request, { gql } from "graphql-request";
import { sanityGraphqlEndpoint } from "@/sanity/lib/client";
import { useLocale } from "next-intl";
import { Menu } from "@/sanity.types";

const query = gql`
  query getMenu($locale: String!) {
    allMenu(where: { language: { eq: $locale }}) {
        logo
        buttonText
        buttonLink
        menuItems {
            menuTitle
            menuLink
            external
        }
        socialItems {
            name
            logo
            description
            link
        }
    }
  }
`

export default async function MainLayout({children} : {children: React.ReactNode}) {

    const locale = useLocale();
    const menuData: any = await request(sanityGraphqlEndpoint, query, { locale })
    const menu: Menu = menuData.allMenu[0];

    return <>
        <Header menu={menu} />
        <main>
            <Suspense fallback={<Loading />}>
                { children }
            </Suspense>
        </main>
        <Footer menu={menu} />
    </>
}