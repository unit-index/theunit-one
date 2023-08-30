import { NavLink, SiteLocale } from "./types";

const githubBaseUrl = 'https://github.com/toknowwhy';
const serverBaseUrl = 'https://api.20y.org';

export const githubUrl = githubBaseUrl;
export const serverUrl = serverBaseUrl;
export const twitterUrl = 'https://x.com/unit_index';
export const mediumUrl = 'https://blog.20y.org';
export const mediumApi = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@20y';
export const discordUrl = 'https://discord.gg/4MjRckMJZN';
export const valuesUrl = `${githubBaseUrl}/20y-values-paper/blob/main/toknowwhy-values.md`;
export const unitPaperUrl = `${githubBaseUrl}/the-unit-paper/blob/main/the_unit_paper.pdf`;
export const docsUrl = 'https://docs.theunit.one';
export const forumUrl = 'https://forum.theunit.one';
export const telegramUrl = 'https://t.me/unit_one';
export const youtubeUrl =
  'https://www.youtube.com/channel/UCvm-dscVWZi7PtNxjKJ84Kg';
export const snapshotUrl = 'https://snapshot.org/#/shuajj.eth';
export const resourcesUrl = `${githubBaseUrl}/the-blocktree-resources-paper/blob/main/the-blocktree-resources-paper.pdf`;
export const siteUrl = 'https://unitindex.org';
export const graphUrl = 'https://graph.theunit.one';
export const appUrl = 'https://app.unitindex.org';

export const currentWorldPopulation = 7953953000;
export const averageLifeExpectancyInYears = 73.2;
export const localUSDPlaceholder = 1.5;

export const navLinks: NavLink[] = [{
    link: "/about",
    key: "about",
}, {
    link: "/developers",
    key: "developers",
}, {
    link: "/community",
    key: "community",
}, {
    link: mediumUrl,
    key: "blog",
    external: true,
}];

export const partners: string[] = [
    "Near Foundation", 
    "Aave Grants DAO", 
    "The Graph Foundation", 
    "Chainlink", 
    "CryptoYC", 
    "Attention Ventures", 
    "TradingView", 
    "CoinGecko", 
    "Unstoppable", 
    "ENS"
]

export const faqs: string[] = [
    'what-is-the-unit',
    'what-is-unit',
    'is-unit-money',
    'what-features-the-unit',
    'what-mission',
    'what-features-unit',
]

export const AVAILABLE_LOCALES: SiteLocale[] = [
    {
        locale: 'en',
        title: 'English'
    },
    {
        locale: 'es',
        title: 'Español'
    },
    {
        locale: 'cn',
        title: '中文'
    },
]