import React from 'react'

import { Helmet } from 'react-helmet'

import './data-justice.css'

const DATAJUSTICE = (props) => {
  return (
    <div className="datajustice-container">
      <Helmet>
        <title>DATA-JUSTICE - Responsible Digital Solutions</title>
        <meta
          property="og:title"
          content="DATA-JUSTICE - Responsible Digital Solutions"
        />
      </Helmet>
    </div>
  )
}

export default DATAJUSTICE
