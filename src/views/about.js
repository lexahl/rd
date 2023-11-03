import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavLinks from '../components/nav-links'
import './about.css'

const ABOUT = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>ABOUT - Responsible Digital Solutions</title>
        <meta
          property="og:title"
          content="ABOUT - Responsible Digital Solutions"
        />
      </Helmet>
      <div className="about-navbar">
        <header data-thq="thq-navbar" className="about-navbar-interactive">
          <div className="about-branding">
            <Link to="/" className="about-navlink">
              Responsible Digital
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Link>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="about-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="about-nav"
            >
              <div className="about-right">
                <NavLinks></NavLinks>
                <div className="about-button">
                  <a
                    href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
                    className="about-work-with-us button"
                  >
                    <span className="about-text">Contact</span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="about-image"
                    />
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="about-burger-menu">
            <button className="about-work-with-us1 button">
              <span className="about-text01">work with us</span>
              <img alt="image" src="/hamburger.svg" className="about-image01" />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="about-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="about-nav1"
            >
              <div className="about-top">
                <div className="about-branding1">
                  <span className="about-text02">Responsible Digital</span>
                </div>
                <div data-thq="thq-close-menu" className="about-menu-close">
                  <svg viewBox="0 0 1024 1024" className="about-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="about-middle"
              >
                <div className="about-links">
                  <Link to="/" className="about-link navLink">
                    Home
                  </Link>
                  <Link to="/about" className="about-link01 navLink">
                    About
                  </Link>
                  <Link to="/projects" className="about-link02 navLink">
                    Projects
                  </Link>
                </div>
                <a
                  href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
                  className="about-work-with-us2 button"
                >
                  <span className="about-text03">work with us</span>
                </a>
              </nav>
            </div>
            <div className="about-socials">
              <div className="about-row">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    alt="image"
                    src="/facebook%20-%20negative1.svg"
                    className="social"
                  />
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    alt="image"
                    src="/instagram%20-%20negative1.svg"
                    className="social"
                  />
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    alt="image"
                    src="/linkedin%20-%20negative1.svg"
                    className="social"
                  />
                </a>
              </div>
              <div className="about-row1"></div>
            </div>
          </div>
        </header>
      </div>
      <div className="about-information">
        <div className="about-purpose">
          <span className="about-caption">What we do</span>
          <span className="about-description">
            <span>
              Responsible Digital provides digital solutions with socially
              responsible and sustainability conscious teams. If you&apos;re
              determined to make your brand stand out with a sustainable edge on
              your website, partner with Responsible Digital. Our services
              include website development, data and AI advising, digital
              marketing, and education. At Responsible Digital, we prioritize
              accountability, accessibility, transparency, and sustainability.
            </span>
            <br></br>
            <br></br>
            <span>
              Responsible Digital make all kinds of websites. Landing Pages,
              Event Pages, Ecommerce sites, Portfolio sites, websites for
              Tourism, and more. Websites don&apos;t always need huge databases
              or heavy platforms such as Wordpress to be effective. At
              Responsible Digital, we design accessible, efficient, and a lot
              less energy consuming sites all while without compromising on
              aesthetics or functionality.
            </span>
            <br></br>
            <br></br>
            <span>
              Responsible Digital specializes in static websites. A static
              website displays pre-defined content using HTML, CSS, and
              JavaScript, as opposed to dynamic sites which generate the content
              in real-time upon request. We create code that is accessible,
              beautiful, and functional. Static files are lightweight and they
              load faster than dynamic sites such as those created with
              Wordpress, Wix, Squarespace, and other website builders. Because
              of this, they use less energy and are also more cost-effective.
              Additionally, static sites are optimal for SEO since search
              engines can efficiently scan their pre-rendered content directly
              from the HTML files.
            </span>
            <br></br>
            <br></br>
            <span>
              In this way, Responsible Digital creates websites responsibly. We
              create with tools that use less energy, have lower carbon
              emissions, are less exploitative, and are designed with your
              audience in mind.
            </span>
            <br></br>
            <br></br>
            <span>
              Designing with care in a way that is authentic and aligns with
              your values. Earn trust with your community, customers, coworkers,
              and partners by choosing to have a more ecologically and socially
              responsible website, make your community and customers feel safe
              by choosing to host their data securely, and Responsible digital
              is committed to finding high-performance websites and solutions
              that not only meet your goals and align with your values, but also
              prioritize care and sustainability at every step.
            </span>
          </span>
        </div>
        <div className="about-book">
          <div className="about-content">
            <div className="about-left">
              <h2 className="about-text17">
                Static sites (design+code+set-up) start at 500CAD/USD/EUR/GBP.
                BYOD (bring your own domain). 
              </h2>
              <a
                href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
                className="about-link06 button"
              >
                <span className="about-text18">work with us</span>
              </a>
            </div>
          </div>
        </div>
        <div className="about-purpose1">
          <span className="about-caption1">Interested?</span>
          <span className="about-description1">
            Contact Responsible Digital at hello@responsibledigital.com to learn
            more.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
      </div>
      <footer className="about-footer">
        <div className="about-header">
          <span className="about-branding2">Responsible Digital</span>
          <div className="about-socials1">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="about-link07"
            >
              <img
                alt="image"
                src="/facebook%20-%20negative1.svg"
                className="social"
              />
            </a>
            <a
              href="https://www.instagram.com/responsibledigitaldesign/"
              target="_blank"
              rel="noreferrer noopener"
              className="about-link08"
            >
              <img
                alt="image"
                src="/instagram%20-%20negative1.svg"
                className="social"
              />
            </a>
            <a
              href="https://linkedin.com/company/responsibledigital"
              target="_blank"
              rel="noreferrer noopener"
              className="about-link09"
            >
              <img
                alt="image"
                src="/linkedin%20-%20negative1.svg"
                className="social"
              />
            </a>
          </div>
        </div>
        <div className="about-content1">
          <div className="about-contact">
            <a
              href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
              className="about-email"
            >
              hello@responsibledigital.com
            </a>
            <span className="about-text19">
              <span className="about-text20">
                This website does not use cookies.
              </span>
              <br></br>
              <span>Responsible Digital © 2023</span>
              <br></br>
            </span>
          </div>
          <div className="about-links-row">
            <div className="about-links-column">
              <Link to="/about" className="about-link10">
                Accessible Web Design
              </Link>
              <Link to="/about" className="about-link11">
                Static Website Design
              </Link>
            </div>
            <div className="about-links-column1">
              <Link to="/about" className="about-link12">
                About
              </Link>
              <Link to="/projects" className="about-link13">
                Projects
              </Link>
              <a
                href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
                className="about-link14"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="about-socials2">
          <div className="about-row2">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/facebook%20-%20negative1.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/instagram%20-%20negative1.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/linkedin%20-%20negative1.svg"
                className="social"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ABOUT
