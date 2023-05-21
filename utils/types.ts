import { ReactElement, ReactNodeArray } from "react";

export interface NavLink {
    link: string;
    key: string;
    external?: boolean;
}

export interface BlogType {
    title: string;
    link: string;
    content: string;
    thumbnail: string;
};

export type Translated = string | ReactElement | ReactNodeArray;