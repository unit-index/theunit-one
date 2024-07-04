import { useLocale } from "next-intl"
import request, { gql } from "graphql-request";
import { sanityGraphqlEndpoint } from "@/sanity/lib/client";
import { BlogItem, Blogs } from "@/sanity.types";
import PageTemplate from "@/components/layout/PageTemplate";

const query = gql`
  query getBlogs($locale: String!) {
    allBlogs(where: { language: { eq: $locale }}) {
        sectionTitle
        subitle
        tag1
        tag2
    }
  }
`

const query2 = gql`
  query getBlogItem($locale: String!) {
    allBlogItem(where: { language: { eq: $locale }}) {
        blogTitle
        _createdAt
        cover
        content: contentRaw
        category
    }
  }
`

export default async function BlogPage() {

  const locale = useLocale();
    const pageData: any = await request(sanityGraphqlEndpoint, query, { locale })
    const page: Blogs = pageData.allBlogs[0];
    const blogsData: any = await request(sanityGraphqlEndpoint, query2, { locale })
    const blogs: BlogItem[] = blogsData.allBlogItem;
    

  return (
    <PageTemplate title={page.sectionTitle} subtitle={(
      <div>{page.subitle}</div>
    )}>
      <div className="mt-11 flex gap-3">
        <div className="text-gradient">
          {page.tag1}
        </div>
        <div className="text-gradient mb-20">
          {page.tag2}
        </div>
      </div>
      <div className="grid grid-cols-3">
        
      </div>
    </PageTemplate>
  )
}