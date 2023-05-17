'use client'

import { mediumApi } from "@/utils/constants";
import { BlogType } from "@/utils/types";
import useData from "@/utils/useData"
import Image from "next/image";
import Button from "./button/Button";

export default function Blogs({
    readMore,
    title,
    subtitle,
} : {
    readMore: string,
    title: string,
    subtitle: string,
}) {
    const { data } = useData<any>(mediumApi);

    if (!data || data.items?.length < 3) {
        return null;
    }

    const blogs = data.items.slice(0, 3) as BlogType[];

    return (
        <div className="px-32 mb-56">
            <div className='text-4xl text-center font-semibold mb-4 text-white'>{title}</div>
            <div className='text-xl text-center max-w-2xl mx-auto mb-10 w-full'>{subtitle}</div>
            <div className="grid grid-cols-3 gap-12">
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
    return (
        <a 
            className="px-6 py-8 border border-transparent hover:bg-black-bgd/40 hover:backdrop-blur-sm rounded-2xl hover:border-gray-border cursor-pointer"
            href={blog.link}
            target="_blank"
        >
            <div className="relative aspect-2/1">
                <Image 
                    src={blog.thumbnail} 
                    alt={blog.title} 
                    fill
                />
            </div>
            <div className="line-clamp-6 text-lg my-6">
                {ToText(blog.content)}
            </div>
            <div className="text-right">
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