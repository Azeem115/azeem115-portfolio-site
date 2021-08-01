import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Azeem Abbas"
            style={{ width: '14em', height: '10em', marginBottom: '1em' }}
          />
          <p 
            style={{ fontSize: '16px' }}
          >&copy; {new Date().getFullYear()} Azeem Abbas. Your Digital Craftsman. Are you done scrolling already?</p>
        </div>
      </footer>
    )
  }
}

export default Footer
