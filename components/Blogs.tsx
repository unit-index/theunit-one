'use client'

import { mediumApi } from "@/utils/constants";
import { BlogType } from "@/utils/types";
import useData from "@/utils/useData"
import Image from "next/image";
import Button from "./button/Button";
import { ReactNode, useEffect, useState } from "react";
import BlurContainer from "./BlurContainer";

export default function Blogs({
    readMore,
    title,
    children,
} : {
    readMore: string,
    title: string,
    children: ReactNode,
}) {
    const { data } = useData<any>(mediumApi);

    if (!data?.items || data.items.length < 3) {
        return null;
    }

    const blogs = data.items.slice(0, 4) as BlogType[];

    return (
            <div>
                <div className="text-title text-xxl mb-[18px] text-center">{title}</div>
                <div className="mb-12 text-center">{children}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {blogs.map((blog) => <Blog key={blog.title} blog={blog} readMore={readMore} />)}
                </div>
            </div>
    )
}

function decodeHtml(html: string) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function Blog({
    blog, 
    readMore
} : {
    blog: BlogType, 
    readMore: string
}) {
    const [blogUrl, setBlogUrl] = useState('/post-placeholder.JPG');

    useEffect(() => {
        if (blog.thumbnail) {
            setBlogUrl(blog.thumbnail)
        } else {
            const parser = new DOMParser();
            const doc = parser.parseFromString(blog.content, 'text/html');
            const firstImageSrc = doc.querySelector('img')?.src;
            if (firstImageSrc) {
                setBlogUrl(firstImageSrc)
            }
        }
    }, [blog])

    const blogTitle = decodeHtml(blog.title);

    return (
            <a 
                className="cursor-pointer"
                href={blog.link}
                target="_blank"
            >
                <div className="w-full aspect-2/1 relative overflow-hidden">
                    <Image 
                        src={blogUrl}
                        alt={blogTitle} 
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="/post-placeholder.JPG"
                        onError={() => {
                            // setBlogUrl("/post-placeholder.JPG");
                        }}
                    />
                </div>
                <div className="mt-6 mb-6 h-48 line-clamp-6">
                    <div className="font-semibold text-xl mb-2 line-clamp-1 w-full overflow-ellipsis">
                        {blogTitle}
                    </div>
                    <div className="w-full line-clamp-4 overflow-ellipsis text-base">
                        {ToText(blog.content)}
                    </div>
                </div>
            </a>
    )
}

function ToText(node: string) {
    let tag = document.createElement('div');
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
}