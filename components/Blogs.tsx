'use client'

import Image from "next/image";
import { ReactNode } from "react";
import { BlogItem } from "@/sanity.types";
import { format } from "date-fns";

export default async function Blogs({
    readMore,
    allBlogs,
    title,
    children,
} : {
    readMore: string,
    allBlogs: BlogItem[],
    title: string,
    children: ReactNode,
}) {

    const blogs = allBlogs.slice(0, Math.min(4)) as BlogItem[];

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

export function Blog({
    blog, 
    readMore
} : {
    blog: BlogItem, 
    readMore: string
}) {

    return (
            <a 
                className="cursor-pointer"
                href={`/blog/${blog._id}`}
            >
                <div className="w-full aspect-2/1 relative overflow-hidden">
                    <Image 
                        src={blog.cover}
                        alt={blog.blogTitle} 
                        fill
                        className="object-cover rounded-3xl"
                        placeholder="blur"
                        blurDataURL="/post-placeholder.JPG"
                        onError={() => {
                            // setBlogUrl("/post-placeholder.JPG");
                        }}
                    />
                </div>
                <div className="mt-4 text-base font-normal mb-2">
                    {format(new Date(blog._createdAt), 'dd MMM, yyyyy')}
                </div>
                <div className="mb-6 line-clamp-6">
                    <div className="font-semibold text-xl text-title mb-2 line-clamp-2 w-full overflow-ellipsis">
                        {blog.blogTitle}
                    </div>
                    <div className="w-full line-clamp-3 overflow-ellipsis text-base">
                        {blog.blogIntro}
                    </div>
                </div>
                <div className="w-fit text-title text-base flex items-center gap-2 font-light hover:bg-white hover:shadow-lg rounded-lg py-3 pr-4 pl-0 hover:pl-4">
                    {readMore} <Image src="/external.svg" alt="link" width={20} height={20} />
                </div>
            </a>
    )
}
