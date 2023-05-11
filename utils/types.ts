export interface NavLink {
    link: string;
    key: string;
    external?: boolean;
}

export type BlogType = {
    title: string;
    link: string;
    content: string;
    thumbnail: string;
};