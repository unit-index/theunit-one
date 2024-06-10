import { type SchemaTypeDefinition } from "sanity";
import { partner } from "@/schemaTypes/partner";
import { hero } from "@/schemaTypes/hero";
import { marketCap } from "@/schemaTypes/marketCap";
import { partners } from "@/schemaTypes/partners";
import { traders } from "@/schemaTypes/traders";
import { supports } from "@/schemaTypes/supports";
import { unit } from "@/schemaTypes/unit";
import { youtube } from "@/schemaTypes/youtube";
import { blogs } from "@/schemaTypes/blogs";
import { homepage } from "@/schemaTypes/homepage";
import { menuItem } from "@/schemaTypes/menuItem";
import { menu } from "@/schemaTypes/menu";
import { socialItem } from "@/schemaTypes/socialItem";
import { aboutPage } from "@/schemaTypes/aboutPage";
import { assetItem } from "@/schemaTypes/assetItem";
import { communityPage } from "@/schemaTypes/communityPage";
import { developerLink } from "@/schemaTypes/developerLink";
import { developerPage } from "@/schemaTypes/developerPage";
import { faqItem } from "@/schemaTypes/faqItem";
import { milestoneItem } from "@/schemaTypes/milestoneItem";
import { dao } from "@/schemaTypes/dao";
import { farm } from "@/schemaTypes/farm";
import { bottomSection } from "@/schemaTypes/bottomSection";
import { aboutItem } from "@/schemaTypes/aboutItem";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero,
    marketCap,
    supports,
    partner,
    partners,
    unit,
    youtube,
    traders,
    farm,
    blogs,
    dao,
    homepage,
    menuItem,
    socialItem,
    bottomSection,
    menu,
    aboutItem,
    aboutPage,
    assetItem,
    communityPage,
    developerLink,
    developerPage,
    faqItem,
    milestoneItem,
  ],
};
