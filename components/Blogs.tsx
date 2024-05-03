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

    const blogs = data.items.slice(0, 3) as BlogType[];

    return (
        <div className="px-2 md:px-8 lg:px-32">
            <div className='text-4xl text-center font-semibold mb-4 text-white'>{title}</div>
            <div className='text-xl text-center max-w-2xl mx-auto mb-10 w-full'>{children}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
        <BlurContainer hover>
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
                    <span className="text-white font-semibold text-xl">
                        {blogTitle}
                    </span><br />
                    <span className="text-lg">
                        {ToText(blog.content)}
                    </span>
                </div>
                <div className="text-center xl:text-right">
                    <Button title={readMore} />
                </div>
            </a>
        </BlurContainer>
    )
}

function ToText(node: string) {
    let tag = document.createElement('div');
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
}