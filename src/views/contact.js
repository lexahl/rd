import React from 'react'

import { Helmet } from 'react-helmet'

import './contact.css'

const CONTACT = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>CONTACT - Responsible Digital Solutions</title>
        <meta
          property="og:title"
          content="CONTACT - Responsible Digital Solutions"
        />
      </Helmet>
    </div>
  )
}

export default CONTACT
