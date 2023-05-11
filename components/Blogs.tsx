'use client'

import { mediumApi } from "@/utils/constants";
import { BlogType } from "@/utils/types";
import useData from "@/utils/useData"
import Image from "next/image";
import Button from "./button/Button";

export default function Blogs({
    readMore,
    title,
} : {
    readMore: string,
    title: string,
}) {
    const { data } = useData<BlogType[]>(mediumApi);

    if (!data) {
        return null;
    }

    return (
        <div className="px-32">
            <div className='text-4xl text-center font-bold mb-10 text-white'>{title}</div>
            <div className="grid grid-cols-3 gap-12">
                {data?.map((blog) => <Blog key={blog.title} blog={blog} readMore={readMore} />)}
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
            <div className="relative aspect-3/2">
                <Image 
                    src={blog.thumbnail} 
                    alt={blog.title} 
                    fill
                />
            </div>
            <div className="line-clamp-6 text-lg my-6">{ToText(blog.content)}</div>
            <div className="text-right">
                <Button title={readMore} link={blog.link} />
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