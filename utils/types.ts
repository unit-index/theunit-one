import { ReactElement, ReactNodeArray } from "react";
import { locales } from '@/navigation';

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

export type SupportedLocale = 'en' | 'es' | 'cn';

export interface SiteLocale {
    locale: Supported_Locale;
    title: string;
}