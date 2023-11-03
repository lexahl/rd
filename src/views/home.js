import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavLinks from '../components/nav-links'
import Testimonial from '../components/testimonial'
import './home.css'

const HOME = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Responsible Digital Solutions</title>
        <meta property="og:title" content="Responsible Digital Solutions" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <Link to="/" className="home-navlink">
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
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-right">
                <NavLinks></NavLinks>
                <div className="home-button">
                  <a
                    href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
                    className="home-work-with-us button"
                  >
                    <span className="home-text">Contact</span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="home-image"
                    />
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-work-with-us1 button">
              <span className="home-text01">work with us</span>
              <img alt="image" src="/hamburger.svg" className="home-image01" />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <span className="home-text02">Responsible Digital</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-middle"
              >
                <div className="home-links">
                  <Link to="/" className="home-link navLink">
                    Home
                  </Link>
                  <Link to="/about" className="home-link01 navLink">
                    About
                  </Link>
                  <Link to="/projects" className="home-link02 navLink">
                    Projects
                  </Link>
                </div>
                <a
                  href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
                  className="home-work-with-us2 button"
                >
                  <span className="home-text03">work with us</span>
                </a>
              </nav>
            </div>
            <div className="home-socials">
              <div className="home-row">
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
              <div className="home-row1"></div>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-header">
          <h1 className="home-text04">
            Designing digital solutions for and with socially responsible and
            sustainability conscious teams.
          </h1>
        </div>
        <img
          alt="image"
          src="/dither_it_screen%20shot%202023-10-24%20at%202.37.16%20pm-1500w.png"
          className="home-image05"
        />
      </div>
      <div className="home-who">
        <div className="home-header1">
          <div className="home-heading">
            <h2 className="home-text05">
              Represent your brand with care-driven web design and digital
              services at Responsible Digital.
            </h2>
            <span className="home-text06">
              At Responsible Digital, we design with accountability,
              accessibility, transparency, and sustainability in mind. Earn
              trust with your community, customers, coworkers, and partners by
              choosing sustainable digital options. Responsible Digital commits
              to delivering high-performance websites and solutions that meet
              your goals, align with your values, and prioritize care and
              sustainability at every step.
            </span>
          </div>
          <button className="home-button1 button">learn more</button>
        </div>
      </div>
      <div className="home-section">
        <div className="home-case-studies">
          <div className="home-caption">
            <span className="home-text07">SERVICES</span>
            <div className="home-date-range">
              <span className="home-text08">2019</span>
              <span className="home-text09">——</span>
              <span className="home-text10">2023</span>
            </div>
          </div>
          <div className="home-gallery">
            <div className="home-row2"></div>
            <div className="home-case">
              <div className="home-heading1">
                <span className="home-text11">Web Development and Design</span>
                <span className="home-text12">
                  Static Sites, Frontend and backend, Ecommerce, and Content
                  Management Systems.
                </span>
              </div>
            </div>
            <div className="home-case1">
              <div className="home-heading2">
                <span className="home-text13">Data and AI Advising</span>
                <span className="home-text14">
                  Ensure that the data you choose to collect and to use
                  represents your community and values.
                </span>
              </div>
            </div>
            <div className="home-case2">
              <div className="home-heading3">
                <span className="home-text15">Digital Marketing</span>
                <span className="home-text16">
                  Responsibly and sustainably create and advertise online.   
                </span>
              </div>
            </div>
            <div className="home-case3">
              <div className="home-heading4">
                <span className="home-text17">Education</span>
                <span className="home-text18">
                  Learn how to be digitally responsible. From data transparency
                  to accessible coding practices and beyond. 
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-testimonials">
          <div className="home-header2">
            <span className="home-caption1">What our clients say</span>
            <div className="home-controls">
              <svg
                id="quote-previous"
                viewBox="0 0 1024 1024"
                className="home-icon2"
              >
                <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="home-text19">——</span>
              <svg
                id="quote-next"
                viewBox="0 0 1024 1024"
                className="home-icon4"
              >
                <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </div>
          </div>
          <div className="home-row3">
            <div className="quote">
              <Testimonial rootClassName="testimonial-root-class-name"></Testimonial>
            </div>
            <div className="home-quote1 quote">
              <Testimonial
                Name="Coco White"
                Avatar="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;h=200"
                Origin="@white_co"
                rootClassName="testimonial-root-class-name1"
              ></Testimonial>
            </div>
            <div className="quote">
              <Testimonial
                Avatar="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY5NzI4OTg4&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="testimonial-root-class-name2"
              ></Testimonial>
            </div>
            <div className="home-gradiant"></div>
          </div>
        </div>
      </div>
      <div className="home-book">
        <div className="home-content">
          <div className="home-left">
            <h2 className="home-text20">
              Be part of the responsible digital transformation towards an
              internet that uses less energy, collect better data, and represent
              your business authentically. 
            </h2>
            <a
              href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
              className="home-link06 button"
            >
              <span className="home-text21">work with us</span>
            </a>
          </div>
        </div>
      </div>
      <div className="home-section1">
        <div className="home-about-us">
          <div className="home-header3">
            <span className="home-caption2">About Responsible digital</span>
          </div>
          <div className="home-dna">
            <span className="home-description">
              <span className="home-text22">
                Responsible Digital provides digital solutions with socially
                responsible and sustainability conscious teams. Our services
                include website development, data and AI advising, digital
                marketing, and education. At Responsible Digital, we prioritize
                accountability, accessibility, transparency, and sustainability.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text23"></br>
              <br className="home-text24"></br>
              <span className="home-text25">
                We create websites responsibly, selecting sustainable tools for
                what is needed and making sure to not waste energy or use.
                Striving to work against Mark Zuckerberg&apos;s, founder of Meta
                (formerly Facebook), motto: “Move fast and break things,
                Responsible Digital designs with care to build digital solutions
                that last. We create with tools that use less energy, have lower
                carbon emissions, are less exploitative, and are designed with
                your audience in mind.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text26"></br>
              <br className="home-text27"></br>
              <span className="home-text28">
                Designing with care in a way that is authentic and aligns with
                your values. Earn trust with your community, customers,
                coworkers, and partners by choosing to have a more ecologically
                and socially responsible website, make your community and
                customers feel safe by choosing to host their data securely, and
                Responsible digital is committed to finding high-performance
                websites and solutions that not only meet your goals and align
                with your values, but also prioritize care and sustainability at
                every step.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text29"></br>
              <br className="home-text30"></br>
              <span className="home-text31">
                Contact Responsible Digital at hello@responsibledigital.com to
                learn more. 
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-recruit">
            <h2 className="home-text33">Responsible Digital&apos;s Values</h2>
            <div className="home-sections">
              <div className="home-section2">
                <span className="home-text34">
                  Accountability
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text35">
                  Holding ourselves responsible for the implications and impacts
                  of our decisions, digital platforms, and tools.
                </span>
              </div>
              <div className="home-section3">
                <span className="home-text36">Accessibility</span>
                <span className="home-text37">
                  Designing with inclusivity at the forefront, ensuring most
                  users can seamlessly navigate our web solutions.
                </span>
              </div>
              <div className="home-section4">
                <span className="home-text38">Transparency</span>
                <span className="home-text39">
                  Ensuring users and clients understand the reasoning behind
                  each digital choices.
                </span>
              </div>
              <div className="home-section5">
                <span className="home-text40">Sustainability</span>
                <span className="home-text41">
                  Prioritizing eco-conscious choices in web solutions and
                  embracing minimal resource usage. 
                </span>
              </div>
            </div>
            <a
              href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
              className="home-link07 button"
            >
              <span className="home-text42">
                <span>learn more</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-header4">
          <span className="home-branding2">Responsible Digital</span>
          <div className="home-socials1">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
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
              className="home-link09"
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
              className="home-link10"
            >
              <img
                alt="image"
                src="/linkedin%20-%20negative1.svg"
                className="social"
              />
            </a>
          </div>
        </div>
        <div className="home-content1">
          <div className="home-contact">
            <a
              href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
              className="home-email"
            >
              hello@responsibledigital.com
            </a>
            <span className="home-text45">
              <span className="home-text46">
                This website does not use cookies.
              </span>
              <br></br>
              <span>Responsible Digital © 2023</span>
              <br></br>
            </span>
          </div>
          <div className="home-links-row">
            <div className="home-links-column">
              <Link to="/about" className="home-link11">
                Accessible Web Design
              </Link>
              <Link to="/about" className="home-link12">
                Static Website Design
              </Link>
            </div>
            <div className="home-links-column1">
              <Link to="/about" className="home-link13">
                About
              </Link>
              <Link to="/projects" className="home-link14">
                Projects
              </Link>
              <a
                href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
                className="home-link15"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="home-socials2">
          <div className="home-row4">
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

export default HOME
