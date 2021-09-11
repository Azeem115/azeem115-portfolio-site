import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import readMore from '../img/read-more-arrow.svg'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div 
        data-sal="slide-left" 
        data-sal-duration="1000" 
        data-sal-delay="300"
        data-sal-easing="ease"
        className="columns is-multiline">
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

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
