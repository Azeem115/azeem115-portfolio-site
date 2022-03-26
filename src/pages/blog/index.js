import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="blog-full-width-image margin-top-0">
            <div className="hero-frame">
              <h1 className="is-size-3-mobile work-heading-h1">
                My Work
              </h1>
            </div>
            <div className="hero-image">
              <img className="hero-image-width"
                src='/img/blog-index.jpg' alt="Main featured image"/>
            </div>
          </div>
          <section className="section">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <BlogRoll />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
