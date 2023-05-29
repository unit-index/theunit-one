'use client'

import { mediumApi } from "@/utils/constants";
import { BlogType, Translated } from "@/utils/types";
import useData from "@/utils/useData"
import Image from "next/image";
import Button from "./button/Button";
import { useState } from "react";

export default function Blogs({
    readMore,
    title,
    subtitle,
} : {
    readMore: string,
    title: string,
    subtitle: Translated,
}) {
    const { data } = useData<any>(mediumApi);

    if (!data || data.items?.length < 3) {
        return null;
    }

    const blogs = data.items.slice(0, 3) as BlogType[];

    return (
        <div className="px-2 md:px-8 lg:px-32">
            <div className='text-4xl text-center font-semibold mb-4 text-white'>{title}</div>
            <div className='text-xl text-center max-w-2xl mx-auto mb-10 w-full'>{subtitle}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {blogs.map((blog) => <Blog key={blog.title} blog={blog} readMore={readMore} />)}
            </div>
        </div>
    )
}

function Blog({
    blog, 
    readMore
} : {
    blog: BlogType, 
    readMore: string
}) {
    const [blogUrl, setBlogUrl] = useState('');

    return (
        <a 
            className="px-6 py-8 border hover:bg-gradient-to-r hover:from-unit-blue hover:to-unit-orange hover:text-white rounded-2xl border-gray-border cursor-pointer"
            href={blog.link}
            target="_blank"
        >
            <div className="w-full aspect-2/1 relative overflow-hidden">
                <Image 
                    src={blogUrl ? blogUrl : blog.thumbnail}
                    alt={blog.title} 
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="/post-placeholder.png"
                    onError={() => {
                        setBlogUrl("/post-placeholder.png");
                    }}
                />
            </div>
            <div className="mt-6 mb-6 h-48 line-clamp-6">
                <span className="text-white font-semibold text-xl">
                    {blog.title}
                </span><br />
                <span className="text-lg">
                    {ToText(blog.content)}
                </span>
            </div>
            <div className="text-center xl:text-right">
                <Button title={readMore} />
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