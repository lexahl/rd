import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavLinks from '../components/nav-links'
import './projects.css'

const PROJECTS = (props) => {
  return (
    <div className="projects-container">
      <Helmet>
        <title>PROJECTS - Responsible Digital Solutions</title>
        <meta
          property="og:title"
          content="PROJECTS - Responsible Digital Solutions"
        />
      </Helmet>
      <div className="projects-navbar">
        <header data-thq="thq-navbar" className="projects-navbar-interactive">
          <div className="projects-branding">
            <Link to="/" className="projects-navlink">
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
            className="projects-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="projects-nav"
            >
              <div className="projects-right">
                <NavLinks></NavLinks>
                <div className="projects-button">
                  <a
                    href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
                    className="projects-work-with-us button"
                  >
                    <span className="projects-text">Contact</span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="projects-image"
                    />
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="projects-burger-menu">
            <button className="projects-work-with-us1 button">
              <span className="projects-text01">work with us</span>
              <img
                alt="image"
                src="/hamburger.svg"
                className="projects-image01"
              />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="projects-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="projects-nav1"
            >
              <div className="projects-top">
                <div className="projects-branding1">
                  <span className="projects-text02">Responsible Digital</span>
                </div>
                <div data-thq="thq-close-menu" className="projects-menu-close">
                  <svg viewBox="0 0 1024 1024" className="projects-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="projects-middle"
              >
                <div className="projects-links">
                  <Link to="/" className="projects-link navLink">
                    Home
                  </Link>
                  <Link to="/about" className="projects-link01 navLink">
                    About
                  </Link>
                  <Link to="/projects" className="projects-link02 navLink">
                    Projects
                  </Link>
                </div>
                <a
                  href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
                  className="projects-work-with-us2 button"
                >
                  <span className="projects-text03">work with us</span>
                </a>
              </nav>
            </div>
            <div className="projects-socials">
              <div className="projects-row">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    alt="image"
                    src="/facebook%20-%20negative1.svg"
                    className="social projects-image02"
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
                    className="social projects-image03"
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
                    className="social projects-image04"
                  />
                </a>
              </div>
              <div className="projects-row1"></div>
            </div>
          </div>
        </header>
      </div>
      <div className="projects-section">
        <div className="projects-case-studies">
          <div className="projects-row2">
            <img
              alt="image"
              src="/dither_it_screen%20shot%202023-10-24%20at%202.37.16%20pm-2700h.png"
              className="projects-image05"
            />
          </div>
          <div className="projects-row3">
            <img
              alt="image"
              src="/dither_it_screen%20shot%202023-10-24%20at%202.37.16%20pm-2700h.png"
              className="projects-image06"
            />
          </div>
          <div className="projects-row4">
            <img
              alt="image"
              src="/dither_it_screen%20shot%202023-10-24%20at%202.37.16%20pm-2700h.png"
              className="projects-image07"
            />
          </div>
          <div className="projects-gallery">
            <div className="projects-case">
              <div className="projects-heading">
                <span className="projects-text04">
                  Web Development and Design
                </span>
                <span className="projects-text05">
                  Static Sites, Frontend and backend, Ecommerce, and Content
                  Management Systems.
                </span>
              </div>
            </div>
            <div className="projects-case1">
              <div className="projects-heading1">
                <span className="projects-text06">Data and AI Advising</span>
                <span className="projects-text07">
                  Ensure that the data you choose to collect and to use
                  represents your community and values.
                </span>
              </div>
            </div>
            <div className="projects-case2">
              <div className="projects-heading2">
                <span className="projects-text08">Digital Marketing</span>
                <span className="projects-text09">
                  Responsibly and sustainably create and advertise online.   
                </span>
              </div>
            </div>
            <div className="projects-case3">
              <div className="projects-heading3">
                <span className="projects-text10">Education</span>
                <span className="projects-text11">
                  Learn how to be digitally responsible. From data transparency
                  to accessible coding practices and beyond. 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-information">
        <div className="projects-industries">
          <span className="projects-caption">
            SERVICES    ——    CLICK TO LEARN MORE
          </span>
          <div className="projects-list">
            <div data-role="accordion-container" className="projects-accordion">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="projects-title">Landing Pages +</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="projects-text12">Perspiciatis</span>
              </div>
            </div>
            <div data-role="accordion-container" className="projects-item">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="projects-title1">Event Pages +</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="projects-text13">Perspiciatis</span>
              </div>
            </div>
            <div data-role="accordion-container" className="projects-item1">
              <div
                data-role="accordion-trigger"
                className="projects-trigger2 accordion-trigger"
              >
                <span className="projects-title2">Ecommerce +</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="projects-text14">Perspiciatis</span>
              </div>
            </div>
            <div data-role="accordion-container" className="projects-item2">
              <div
                data-role="accordion-trigger"
                className="projects-trigger3 accordion-trigger"
              >
                <span className="projects-title3">Digital Marketing +</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="projects-text15">Perspiciatis</span>
              </div>
            </div>
            <div data-role="accordion-container" className="projects-item3">
              <div
                data-role="accordion-trigger"
                className="projects-trigger4 accordion-trigger"
              >
                <span className="projects-title4">Portfolios +</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="projects-text16">Perspiciatis</span>
              </div>
            </div>
          </div>
          <div>
            <div className="projects-container2">
              <Script
                html={`<script>
      /*
  Accordion - Code Embed
  */

  /* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
  the Accordions will still work*/

  const listenForUrlChangesAccordion = () => {
        let url = location.href;
        document.body.addEventListener(
          "click",
          () => {
            requestAnimationFrame(() => {
              if (url !== location.href) {
                runAccordionCodeEmbed();
                url = location.href;
              }
            });
          },
          true
        );
      };


  const runAccordionCodeEmbed = () => {
      const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
      const allTriggers = document.querySelectorAll('[data-role="accordion-trigger"]'); // All accordion triggers
      const allContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content

      accordionContainers.forEach((container) => {
        const accordionTrigger = container.querySelector('[data-role="accordion-trigger"]'); // Scopped accordion trigger
        const accordionContent = container.querySelector('[data-role="accordion-content"]'); // Scopped accordion content

        accordionTrigger.addEventListener("click", ()=>{
          /*
          Uncomment the code bellow to make all the other sections
          collapse when clicking on one of them.

          allTriggers.forEach(trigger => trigger.classList.remove("accordion-trigger-active"))
          allContents.forEach(content => content.classList.remove("accordion-content-active"))
          */
          if(accordionContent.classList.contains("accordion-content-active")){
            accordionContent.classList.remove("accordion-content-active");
            accordionTrigger.classList.remove("accordion-trigger-active")
          } else {
            accordionContent.classList.add("accordion-content-active");
            accordionTrigger.classList.add("accordion-trigger-active")
          }
        })

      });
  }

  runAccordionCodeEmbed()
  listenForUrlChangesAccordion()

  /*
  Here's what the above is doing:
      1. Selects all accordion containers, contents, and icons
      2. Hides all accordion contents
      3. Adds an event listener to each accordion container
      4. When an accordion container is clicked, it:
          - Hides all accordion contents
          - Resets all icon transforms to 0deg (default)
          - Checks if this container has class "accordion-open"
              - If it does, it removes class "accordion-open"
              - If it doesn't, it:
                  - Removes class "accordion-open" from all containers
                  - Adds class "accordion-open" to this container
                  - Shows accordion content
                  - Rotates accordion icon 180deg
  */
</script>
`}
              ></Script>
            </div>
          </div>
        </div>
        <div className="projects-purpose">
          <span className="projects-caption1">Interested?</span>
          <span className="projects-description">
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
      <footer className="projects-footer">
        <div className="projects-header">
          <span className="projects-branding2">Responsible Digital</span>
          <div className="projects-socials1">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-link06"
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
              className="projects-link07"
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
              className="projects-link08"
            >
              <img
                alt="image"
                src="/linkedin%20-%20negative1.svg"
                className="social"
              />
            </a>
          </div>
        </div>
        <div className="projects-content1">
          <div className="projects-contact">
            <a
              href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
              className="projects-email"
            >
              hello@responsibledigital.com
            </a>
            <span className="projects-text17">
              <span className="projects-text18">
                This website does not use cookies.
              </span>
              <br></br>
              <span>Responsible Digital © 2023</span>
              <br></br>
            </span>
          </div>
          <div className="projects-links-row">
            <div className="projects-links-column">
              <Link to="/about" className="projects-link09">
                Accessible Web Design
              </Link>
              <Link to="/about" className="projects-link10">
                Static Website Design
              </Link>
            </div>
            <div className="projects-links-column1">
              <Link to="/about" className="projects-link11">
                About
              </Link>
              <Link to="/projects" className="projects-link12">
                Projects
              </Link>
              <a
                href="mailto:hello@responsibledigital.com?subject=Responsible Digital Inquiry"
                className="projects-link13"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="projects-socials2">
          <div className="projects-row5">
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

export default PROJECTS
