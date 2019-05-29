import React from "react"
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react";

import Layout from "../components/layout"
import SEO from "../components/seo"



const disqusShortname = "RohitGupta";

const BlogDetails = data => (
    < Layout >
        <SEO title={data.data.contentfulBlogs.title} keywords={[`gatsby`, `ecommerce`, `react`, `contentFul`, `Snipcart`]} />
        <div className="blogs-page">
            <div class="post-thumbnail">
                <Img sizes={data.data.contentfulBlogs.featureImage.fixed} />
            </div>
            <div className="container">
                <div class="post-details">
                    <h2 className="title with-underline">{data.data.contentfulBlogs.title}</h2>
                    <div class="post-date">
                        <i class="fas fa-calendar-alt"></i>
                        {data.data.contentfulBlogs.publicData}
                    </div>
                    <div className="author">
                        <Img sizes={data.data.contentfulBlogs.author.photo.fixed} />
                        <strong className="name">{data.data.contentfulBlogs.author.name}</strong>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.data.contentfulBlogs.description.childMarkdownRemark.html
                        }}
                    />

                </div>
                <DiscussionEmbed
                    shortname={disqusShortname}
                    config={{
                        identifier: data.data.contentfulBlogs.id,
                        title: data.data.contentfulBlogs.title
                    }}
                />
            </div>
        </div>
    </Layout >
)

export default BlogDetails

export const query = graphql`
  query BlogDetailsQuery($slug: String!) {
        contentfulBlogs(slug: {eq: $slug }) {
            id
            title
            slug
            publicData(formatString: "MMMM D, YYYY")
            author {
            name
            photo {
                fixed(width: 50, height: 50) {
                width
                height
                src
                srcSet
                }
            }
            }
            description {
                childMarkdownRemark {
                    html
                    excerpt(pruneLength: 250)
                }
            }
            featureImage {
            fixed(width: 1120, height: 500) {
                width
                height
                src
                srcSet
            }
        }
    }
}
`
