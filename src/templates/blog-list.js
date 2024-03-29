import React from "react"
import { graphql } from "gatsby"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
        <div className="columns is-multiline">
            <header>
                {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return <div key={node.fields.slug}>{title}</div>
                })}
            </header>
        </div>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`