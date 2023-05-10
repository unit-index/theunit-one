import { NavLink } from "./types";

const githubBaseUrl = 'https://github.com/toknowwhy';
const serverBaseUrl = 'https://api.20y.org';

export const githubUrl = githubBaseUrl;
export const serverUrl = serverBaseUrl;
export const twitterUrl = 'https://twitter.com/TheUnit_one';
export const mediumUrl = 'https://blog.20y.org';
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
export const siteUrl = 'https://theunit.one';
export const graphUrl = 'https://graph.theunit.one';
export const appUrl = 'https://app.theunit.one';

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