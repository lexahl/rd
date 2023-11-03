import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './nav-links.css'

const NavLinks = (props) => {
  return (
    <div className="nav-links-links">
      <Link to="/" className="nav-links-link navLink">
        {props.Link}
      </Link>
      <Link to="/about" className="nav-links-link1 navLink">
        {props.Link3}
      </Link>
      <Link to="/projects" className="nav-links-link2 navLink">
        {props.Link1}
      </Link>
    </div>
  )
}

NavLinks.defaultProps = {
  Link1: 'Projects',
  Link3: 'About',
  Link: 'Home',
  Link2: 'Contact',
}

NavLinks.propTypes = {
  Link1: PropTypes.string,
  Link3: PropTypes.string,
  Link: PropTypes.string,
  Link2: PropTypes.string,
}

export default NavLinks
