import { useLocale } from "next-intl"
import request, { gql } from "graphql-request";
import { sanityGraphqlEndpoint } from "@/sanity/lib/client";
import { BlogItem, Blogs } from "@/sanity.types";
import PageTemplate from "@/components/layout/PageTemplate";
import { Blog } from "@/components/Blogs";
import Description from "@/components/Description";

const query = gql`
  query getBlogs($locale: String!) {
    allBlogs(where: { language: { eq: $locale }}) {
        sectionTitle
        description: descriptionRaw
        readMoreText
        tag1
        tag2
    }
  }
`

const queryBlog = gql`
  query getBlogItem($locale: String!, $limit: Int!) {
    allBlogItem(where: { language: { eq: $locale }}, limit: $limit) {
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

export default async function BlogPage() {

  const locale = useLocale();
    const pageData: any = await request(sanityGraphqlEndpoint, query, { locale })
    const page: Blogs = pageData.allBlogs[0];
    const readMoreText = page.readMoreText;
    const blogsData: any = await request(sanityGraphqlEndpoint, queryBlog, { locale, limit: 24 })
    const blogs: BlogItem[] = blogsData.allBlogItem;
    

  return (
    <PageTemplate title={page.sectionTitle} subtitle={(
      <Description text={page.description} />
    )}>
      <div className="mt-11 flex flex-wrap gap-3">
        <div className="text-gradient">
          {page.tag1}
        </div>
        <div className="text-gradient mb-20">
          {page.tag2}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 border-t border-t-[#6B6767] pt-12">
        {blogs.map((b) => <Blog key={b._id} blog={b} readMore={page.readMoreText} />)}
      </div>
    </PageTemplate>
  )
}