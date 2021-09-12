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
    <div className="container hero_section">
      <div className="full-width-image margin-top-0">
        <div className="hero-frame">
          <h1  
            data-sal="slide-left"
            data-sal-duration="1000" 
            data-sal-delay="300"
            data-sal-easing="ease" 
            className="has-text-weight-bold is-size-3-mobile hero-heading-h1">
              {title}
          </h1>
        </div>
        <div className="hero-image">
          <img className="hero-image-width"
            src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt="Main featured image"/>
        </div>
      </div>
    </div>
    <section className="section section--gradient who_am_i">
      <div className="container">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <div className="columns">
              <div className="column is-12">
                <h1
                  data-sal="slide-right" 
                  data-sal-duration="1000" 
                  data-sal-delay="300"
                  data-sal-easing="ease"
                  className="has-text-centered">{mainpitch.title}</h1>
                <div
                  data-sal="slide-right" 
                  data-sal-duration="1000" 
                  data-sal-delay="300"
                  data-sal-easing="ease"
                  >
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient my_experiences">
      <div className="container">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <div className="columns">
              <div className="column is-12">
                <h1 
                  data-sal="slide-left" 
                  data-sal-duration="1000" 
                  data-sal-delay="300"
                  data-sal-easing="ease"
                  className="has-text-centered">
                    My experiences
                </h1>
                  <BlogRoll />
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
    <section className="section section--gradient lets_say_hi">
      <div className="container hero_section">
        <div className="full-width-image margin-top-0">
          <div className="hero-frame">
            <div className="contact_info-wrapper">    
              <p 
                data-sal="slide-up" 
                data-sal-duration="1000" 
                data-sal-delay="300"
                className="mainpitch-desc">{mainpitch.description}
              </p>
              <div 
                data-sal="slide-up" 
                data-sal-duration="1000" 
                data-sal-delay="300"
                className="column is-12 social has-text-centered">
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
          <div className="hero-image">
            <img className="hero-image-width" 
              src={contactImage} alt="Memorable image with all the design gurus of Karachi" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <div className="columns">
              <div className="column is-12 has-text-centered">
                <h1 
                  data-sal="slide-up" 
                  data-sal-duration="1000" 
                  data-sal-delay="300"
                  className="has-text-centered">
                    Let's say hi
                </h1>
                <div 
                  data-sal="slide-up" 
                  data-sal-duration="1000" 
                  data-sal-delay="300"
                  className="column is-12 has-text-centered">
                  <img src={contactImage} alt="Memorable image with all the design gurus of Karachi" />
                </div>
                  <p 
                     data-sal="slide-up" 
                     data-sal-duration="1000" 
                     data-sal-delay="300"
                  className="mainpitch-desc">{mainpitch.description}</p>
                  <div 
                     data-sal="slide-up" 
                     data-sal-duration="1000" 
                     data-sal-delay="300"
                     className="column is-12 social has-text-centered">
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
