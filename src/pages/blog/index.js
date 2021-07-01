import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="full-width-image margin-top-0">
            <div className="hero-frame">
              <h1 className="has-text-weight-bold is-size-3-mobile hero-heading-h1">
                My Case Studies
              </h1>
            </div>
            <div className="hero-image">
              <img className="hero-image-width"
                src='/img/blog-index.jpg' alt="Main featured image"/>
            </div>
          </div>
        </div>
  
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
