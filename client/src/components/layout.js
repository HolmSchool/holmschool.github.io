import React from "react"
import { css } from '@emotion/react'
import { StaticQuery, Link, graphql } from "gatsby"
import Helmet from "react-helmet"


import logo from "../img/square_logo_small.png"
import public_domain_small from "../img/public_domain_small.png"
import favicon from "../img/favicon.ico"
import * as siteWideCSS from "./main.css"

const navItem = css`
  margin-right: 15px;
  text-decoration: none;
  color: #96d7af;
  size: 1.5rem;
  

  &:hover {
    text-decoration: underline;
    text-decoration-color: #96d7af;
  }

  @supports (-webkit-text-stroke: 0.5px #5c8c72) {
    -webkit-text-stroke: 0.5px #5c8c72;
  }
`

const hamburger = css`
// @import url(https://fonts.googleapis.com/css?family=Raleway);
// h2 {
//   vertical-align: center;
//   text-align: center;
// }

html, body {
  margin: 0;
  height: 100%;
  
}

* {
  box-sizing: border-box;
}

.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // background-color: #00BAF0;
  // background: linear-gradient(to left, #f46b45, #eea849);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #96d7af;
  height: 50px;
  padding: 1em;
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  margin: 0 1rem;
  overflow: hidden;
  font-family: 'Philosopher', sans-serif;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #96d7af;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
  margin-right: 50px;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

@media (max-width: 700px) {
  .menu-button-container {
    display: flex;
  }
  .menu {
    position: absolute;
    top: 0;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {
    border: 1px solid #333;
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: #96d7af;
    background-color: #222;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
}
View Compiled


Resources1× 0.5× 0.25×Rerun

`

const svgNav = css`
  transition: 200ms;
  transition-timing-function: ease-in-out;
  fill: #96d7af !important;
  width: 26px;
  height: 26px;

  &:hover {
    fill: #667c7c !important;
  }
`

const header = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    }
    render={data => (

      <div css={siteWideCSS} className={[`wrapper`, `philosopher`]} css={[hamburger]}>
        <Helmet defaultTitle={`Holm School | University in a Raspberry Pi`} titleTemplate={`%s | Holm School`}>
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Holm School" />
          {/* <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@holmschool"/>
          <meta name="twitter:creator" content="@holmschool"/>
          <meta name="twitter:title" content="Holm School: University in a Raspberry Pi"/>
          <meta name="twitter:description" content="Free college curricula 'Z-Degrees' using open source educational resources. Fuel your debt-free self-education journey here!"/>
          <meta name="twitter:image" content="https://holmschool.github.io/square_logo_small.png"/> */}
          <html lang="en" />
          <link rel="icon"
            type="image/x-icon"
            href={favicon} />

        </Helmet>
        <div className={`sticky-header`}>
          <div css={css`
           display: flex;
           flex-direction: row;
           justify-content: center;
           margin: 5px 5px 0px 10px;
           background-color: white;
        `}>
            <Link to={`/`} css={css`
             text-decoration: none;            
           `}>
              <div css={css`
               flex-grow: 1;
               flex-shrink: 1;
            
              @media only screen and (min-width: 768px) {
                 margin-left: 0px;
              
               }
             `}>
                <img src={logo} css={css`
                 width: 42px;
                 height: 42px;
                 margin-top: 0px;
                 margin-left: 0px;
                 margin-bottom: 0px;
                 margin-right: 27px;
                @media only screen and (min-width: 768px) {
                   width: 36px;
                   height: 36px;
                
                 }
               `} alt="Green Key and Blue Key Logo" />
                <span css={css`
                 font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
                 font-size: 2em;
                 color: #96d7af;
                 transition: 150ms;
                 transition-timing-function: ease-in-out;
                 vertical-align: top;
                 
                 display: none;
                &:hover {
                   color: #667c7c;
                 }
              
                 @media only screen and (min-width: 1024px) {
                   font-size: 1.5em;
                   display: inline;
                
                 }
                 @supports (-webkit-text-stroke: 0.5px #5c8c72) {
                  -webkit-text-stroke: 0.5px #5c8c72;
                }
             
               `}>
                  Holm School
               </span>

              </div>
            </Link>
            <div css={css`
             flex-grow: 1;
           `}>&nbsp;
           </div>


            <div css={css`
           flex-shrink: 1;
           font-size: 1.25rem;
         `}>
              <div css={css`
             display: flex;
             flex-wrap: wrap;
             flex-direction: row;
             justify-content: flex-end;
           `}>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <section className="top-nav">
              {/* <div>
                Logo Here
              </div> */}
              <input id="menu-toggle" type="checkbox" />
              <label className='menu-button-container' htmlFor="menu-toggle">
              <div className='menu-button'></div>
            </label>
              <ul className="menu">
              <li><Link
                to={`/`}
                activeStyle={{ textDecoration: "underline" }}
                css={[css`
              `, navItem]}
              >
                Home
            </Link></li>
                  
                 <li><Link
                      to={`/learn/`}
                      activeStyle={{ textDecoration: "underline" }}
                      css={[css`
                    `, navItem]}
                    >
                      Curricula
                  </Link></li>
                 <li><Link
                      to={`/z-degrees/`}
                      activeStyle={{ textDecoration: "underline" }}
                      css={[css`
                    `, navItem]}
                    >
                      Z-Degrees
                  </Link></li>
                  <li><Link
                  to={`/about/`}
                  activeStyle={{ textDecoration: "underline" }}
                  css={[css`
                `, navItem]}
                >
                  About
              </Link></li>
                <li><Link
                  to={`/faq/`}
                  activeStyle={{ textDecoration: "underline" }}
                  css={[css`
                `, navItem]}
                >
                  FAQ
              </Link></li>
                <li><Link
                  to={`/guide/`}

                  css={[css`
              
                `, navItem]}
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Guide
              </Link></li>
                {/* <Link
                  to={`/the-open-source-fiduciary/`}
                  activeStyle={{ textDecoration: "underline" }}
                  css={[css`
                `, navItem]}
                >
                  Fiduciary
              </Link> */}
              {/* <Link
                  to={`/scholarship/`}
                  activeStyle={{ textDecoration: "underline" }}
                  css={[css`
                `, navItem]}
                >
                  Scholarship
              </Link> */}
              
                <li><Link
                  to={`/blog/`}
                  activeStyle={{ textDecoration: "underline" }}
                  css={[css`
              `, navItem]}
                >
                  Blog
             </Link></li>
             
                <li><a
                  href={`https://github.com/HolmSchool`}
                  css={[css`
              
               `, navItem]}
                >
                  <svg css={svgNav} id="github-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </a></li>
                {/* <a
                  href={`https://twitter.com/holmschool`}
                  css={[css`
              
               `, navItem]}
                >
                  <svg css={svgNav} id="twitter-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
                </a> */}
              </ul>
            </section>
                


            
              </div>
            </div>
          </div>
        </div>
        <div className={`main-text`} css={css`padding-top:28px;`}>
          {children}
        </div>
        <div css={css`
           margin-top: 10px;
           max-width: 800px;
           margin: auto;
           
         `} className={`main-text`}>
          <a href="https://scholarship.law.duke.edu/cgi/viewcontent.cgi?article=1280&context=lcp"><img src={public_domain_small} alt="Public Domain" css={css`;margin-left: 20px; width:120px;margin-right: 30px;float:left;margin-bottom: 0px;`} /></a>
          <span>Located in Topeka, KS.</span><br />

          <Link to={'/'} css={css`text-decoration: none;`}>
            <span css={css`
                 font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
                 font-size: 1.0em;
                 color: #667c7c;
                 
                 transition: 150ms;
                 transition-timing-function: ease-in-out;
                 vertical-align: top;
                 display: inline;
              

                 &:hover {
                  color: #96d7af;
                 }
               `}>
              Holm School::CC0 2023::Linux::Live Free or Die
              <br/>
             </span>
             
          </Link>
        </div>
      </div>
    )}
  />
)


export default header;