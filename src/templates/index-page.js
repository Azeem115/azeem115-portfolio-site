import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import contactImage from '../img/83690163_10218664607741292_6706243901130276864_n.png'
import linkedin from '../img/social/linkedin.svg'
import twitter from '../img/social/twitter.svg'
import dribbble from '../img/social/dribbble.svg'
import github from '../img/social/github.svg'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
    >

      <img className="hero-image-width"
        src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt="Main featured image"/>
      <div className="hero-frame">
        <h1 className="has-text-weight-bold is-size-3-mobile hero-heading-h1">
          {title}
        </h1>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="has-text-weight-semibold is-size-1 has-text-centered">{mainpitch.title}</h1>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    {description}
                  </div>
                </div>
                <div className="column is-12">
                  <h1 className="has-text-weight-semibold is-size-1 has-text-centered">
                    My experiences
                  </h1>
                  <BlogRoll />
                </div>
                <div className="column is-12 has-text-centered">
                  <h1 className="has-text-weight-semibold is-size-1 has-text-centered">
                    Let's say hi
                  </h1>
                  <div className="column is-12 has-text-centered">
                    <img src={contactImage} alt="Memorable image with all the design gurus of Karachi" />
                  </div>
                  <p>{mainpitch.description}</p>
                  <div className="column is-12 social has-text-centered">
                    <a title="twitter" href="https://twitter.com/mrAzeemAbbas">
                      <img
                        className="fas fa-lg"
                        src={twitter}
                        alt="Twitter"
                      />
                    </a>
                    <a title="linkedin" href="https://www.linkedin.com/in/azeemabbas/">
                      <img
                        className="fas fa-lg"
                        src={linkedin}
                        alt="LinkedIn"
                      />
                    </a>
                    <a title="dribbble" href="https://dribbble.com/azeem115">
                      <img
                        className="fas fa-lg"
                        src={dribbble}
                        alt="Dribbble"
                      />
                    </a>
                    <a title="github" href="https://github.com/Azeem115">
                      <img
                        className="fas fa-lg"
                        src={github}
                        alt="Github"
                      />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
