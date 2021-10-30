import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import readMore from '../img/read-more-arrow.svg'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogList extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
        <div className="columns is-multiline">
            {posts &&
            posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
              <article
                className={`blog-list-item tile is-child`}
              >
                <header>
                  <div className="post-meta">
                    <span className="subtitle is-size-4 is-block">
                      {post.frontmatter.date}
                    </span>
                    <div className="post-meta-title"> 
                      <h3>
                        <Link
                          className="title is-size-2"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </h3>
                        <Link 
                          className="button" to={post.fields.slug}
                        >
                          Keep Reading <span><img className="readmore" src={readMore} alt="Keep Reading" /></span>
                        </Link>
                    </div>
                  </div>
                </header>
              </article>
            </div>
          ))}
        </div>
    )
  }
}

BlogList.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

export default BlogList

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`