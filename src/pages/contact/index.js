import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import contactImage from '../img/83690163_10218664607741292_6706243901130276864_n.png'
import linkedin from '../img/social/linkedin.svg'
import twitter from '../img/social/twitter.svg'
import dribbble from '../img/social/dribbble.svg'
import github from '../img/social/github.svg'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h1 className="title has-text-weight-bold is-bold-light">Get In Touch</h1>
              </div>
              <form
                className="contact_form"
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="column is-12 has-text-centered">
              <h1 className="has-text-centered">Let's say hi</h1>
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
        </section>
      </Layout>
    )
  }
}
