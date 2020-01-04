import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { PostsList } from "../components/posts-list"

class BlogTemplate extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/blog/" : "/blog/" + (currentPage - 1).toString()
    const nextPage = "/blog/" + (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />

        <PostsList posts={posts} />

        <hr
            style={{
              marginBottom: rhythm(1),
            }}
         />

        {!isFirst && (
          
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}

      </Layout>
    )
  }
}

export default BlogTemplate

export const pageBlogQuery = graphql`
  query pageBlogQuery($skip: Int, $limit: Int) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {published: {ne: false}}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
