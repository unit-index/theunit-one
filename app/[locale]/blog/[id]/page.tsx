import { Suspense } from "react";
import Loading from "../../loading";
import request, { gql } from "graphql-request";
import { sanityGraphqlEndpoint } from "@/sanity/lib/client";
import { BlogItem } from "@/sanity.types";
import { notFound } from "next/navigation";
import Image from "next/image";
import Description from "@/components/Description";
import ShareButton from "@/components/button/ShareButton";
import { Metadata, ResolvingMetadata } from 'next'

const blogQuery = gql`
  query blogItems($id: ID!) {
    allBlogItem(where: {_id: {eq: $id}}) {
      _id
      blogTitle
      _createdAt
      cover
      blogIntro
      content: contentRaw
      category
    }
  }
`

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  if (!params.id) {
    return {};
  }
 
  // fetch data
  const blogsData: any = await request(sanityGraphqlEndpoint, blogQuery, { id: params.id })
  const blog = blogsData[0] as BlogItem;
 
 
  return {
    title: blog?.blogTitle ?? 'UNIT',
    description: blog?.blogIntro ?? 'UNIT Index',
    openGraph: {
      images: [blog?.cover],
    },
  }
}

export default async function SingleBlogPage({ params }: Props) {

  if (!params.id) {
    return notFound();
  }
  const blogsData: any = await request(sanityGraphqlEndpoint, blogQuery, { id: params.id })
  if (!blogsData.allBlogItem?.length) {
    return notFound();
  }
  const blogData: BlogItem = blogsData.allBlogItem[0];
  
  return (
    <Suspense fallback={<Loading />}>
        <div className="pt-24 min-h-screen pb-56 max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
              <Image src="/arrow-back.svg" alt="back" width={21} height={19} /> Back
            </div>
            <div className="text-[64px] leading-[1.2] text-title mt-9">
              {blogData.blogTitle}
            </div>
            <div className="flex justify-end mt-4 mb-24">
              <ShareButton blogId={blogData._id} blogTitle={blogData.blogTitle} />
            </div>
            <div className="text-title">
              <Description text={blogData.content} />
            </div>
        </div>
    </Suspense>
  )
}
