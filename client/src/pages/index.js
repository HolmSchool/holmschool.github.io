import React from "react"
import { graphql, Link } from "gatsby"
import { css } from '@emotion/react'
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Helmet from "react-helmet"

import vilhelm_hammershoi_1 from "../img/2020903_KMS3696-smaller.jpeg"
import vilhelm_hammershoi_2 from "../img/2020903_KMS6657.jpeg"
// import sandzen_1 from "../img/sandzen_smokyvalley_crop_master.jpg"

import blocks_about from "../img/blocks_about.jpg"
import blocks_faq from "../img/blocks_faq.jpg"
import blocks_guide from "../img/blocks_guide.jpg"
import blocks_blog from "../img/blocks_blog.jpg"
import blocks_cs from "../img/blocks_cs.jpg"
import blocks_z_degrees from "../img/blocks_z_degrees.jpg"
import blocks_ztc from "../img/blocks_ztc.jpg"
import square_logo_small from "../img/square_logo_small.png"



const indexPage = ({ data }) => {
  // const confetti = require("../js/confetti.js")
  return (
    <Layout>
      <Helmet>
        <meta name="description" content="Empower your self-education through free open source textbooks available on the internet in all subjects." />
      </Helmet>
      <div>
        <div className="bigimages" css={css`margin-top: 70px;@media screen and (min-width: 800px) { margin-top: 48px;}`}>
        <img src={vilhelm_hammershoi_1} alt="Painting 'Interior in Strandgade, Sunlight on the Floor' by Vilhelm Hammershøi, 1901" width="100%" />
        </div>
        {/* <div className={`bigimages`} css={css`margin-top: 70px;@media screen and (min-width: 800px) { margin-top: 48px;}`}>
          <img src={sandzen_1} alt="Linocut 'Smoky Valley Homestead' by Birger Sandzen" width="100%" className={css`margin-bottom: 0px;`} />
        </div> */}
        <div css={css`
          max-width: 800px;
          margin: 0 auto;
          margin-top: 0px;
          padding: 10px;
        `}>
          <section css={css`
            text-align: center;
          `}>
            <div>
              <img css={css`width: 75px;height:75px;display:inline;`} src={square_logo_small} alt={`Green and Blue Antique Keys Logo`}></img>
            </div>
            

            <h1 css={css`
              font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
              font-size: 2em;
              color: #5c8c72;
              vertical-align: top;
              margin: 0 auto;
            `}>
              Holm School
            </h1>
            <br/>
            <h2 css={css`
              font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
              color: lightpink;
              font-weight: bold;
              vertical-align: top;
              text-align: center;
              display: inline;
              margin: 20px auto 40px auto;`}>"University in a Raspberry Pi"</h2><sup><a href={`https://kansaspublicradio.org/kpr-news/little-blue-books-kansas-creation-celebrates-100-years`}>[1]</a></sup>
            <br/>
            <br/>
            {/* <iframe width="60%" height="400" src="https://www.youtube-nocookie.com/embed/AUW4vUVc878" frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <br/>
            <p><a href={`https://www.mrmoneymustache.com/2011/11/08/get-rich-with-the-library/`}>"I know the home-based bookshelf is emotionally attractive to many who fancy themselves to be intellectuals. But if you are really that smart, why are you paying dearly for something that you can get for free?"</a></p>
            <p>"Knowledge is not the personal property of its discoverer, but the common property of all. As we enjoy great advantages from the inventions of others, we should be glad of an opportunity to serve others by any invention of ours, and this we should do freely and generously.”</p>
            <p><a href={`https://history-computer.com/ModernComputer/Personal/Dynabook.html`}>"Where some people measure progress in answers-right per test or tests-passed per year, we are more interested in Sistine-Chapel-Ceilings per Lifetime."</a></p>
            {/* <p><iframe width="60%" height="315" src="https://www.youtube.com/embed/XB4cjbYywqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p> */}
            {/* <p><iframe width="60%" height="315" src="https://www.youtube.com/embed/FmRZp2OLFAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p> */}
            </section>
          <hr/>
          <p><strong>Holm School</strong> is an <a href={`https://github.com/HolmSchool`}>open source repo</a> collating hundreds of free college textbooks and lectures for you to use in your self-educational odyssey. Whether that be <Link to={`/syllabi/computer-science`}>learning how to code</Link>, <Link to={`/syllabi/art-history`}>the basics of art history</Link>, <Link to={`/syllabi/hum110`}>years worth of "Great Books"/Humanities reading lists</Link>, <Link to={`/z-degrees`}>or many other academic subjects we group under the banner of "Z-Degrees"</Link>, you'll most likely find something of value -- and at not cost to you! We do this as a means of promoting "<Link to={`/syllabi/computer-science/#holmschooling`}>unschooling</Link>," or more specifically in our case: "holmschooling."</p>
          <hr/>
          <section className={`large-screen-grid`} css={css`margin-top:24px;`}>
          <p className={`large-screen-grid-item-left`} css={css`margin-bottom: 0px;grid-column: 0 1;grid-rows: 0 1;`}>
          <Link to={`/learn/`}><img className={`blocks-img`} src={blocks_ztc} alt={`Curricula`}></img></Link>
          </p>
          <p className={`large-screen-grid-item-right`} css={css`margin-bottom: 0px;grid-column: 1 2;grid-rows: 1 2;`}>
            <Link to={`/z-degrees/`}><img className={`blocks-img`} src={blocks_ztc} alt={`Z-Degrees`}></img></Link>
          </p>
          <p className={`large-screen-grid-item-left`} css={css`margin-bottom: 0px;grid-column: 0 1;grid-rows: 0 1;`}>
          <Link to={`/syllabi/computer-science/`}><img className={`blocks-img`} src={blocks_cs} alt={`Computer Science`}></img></Link>
          </p>
          <p className={`large-screen-grid-item-right`} css={css`margin-bottom: 0px;grid-column: 1 2;grid-rows: 1 2;`}>
            <Link to={`/z-degrees/`}><img className={`blocks-img`} src={blocks_z_degrees} alt={`Z-Degrees`}></img></Link>
          </p>
          <p className={`large-screen-grid-item-left`} css={css`margin-bottom: 0px;grid-column: 0 1;grid-rows: 0 1;`}>
          <Link to={`/about/`}><img className={`blocks-img`} src={blocks_about} alt={`About`}></img></Link>
          </p>
          <p className={`large-screen-grid-item-right`} css={css`margin-bottom: 0px;grid-column: 1 2;grid-rows: 1 2;`}>
            <Link to={`/faq/`}><img className={`blocks-img`} src={blocks_faq} alt={`Frequently Asked Questions`}></img></Link>
          </p>
          <p className={`large-screen-grid-item-left`} css={css`margin-bottom: 0px;grid-column: 0 1;grid-rows: 0 1;`}>
            <Link  to={`/guide/`}><img className={`blocks-img`} src={blocks_guide} alt={`Not Rich Guide`}></img></Link>
          </p>
          <p className={`large-screen-grid-item-right`} css={css`margin-bottom: 0px;grid-column: 1 2;grid-rows: 1 2`}>
            <Link  to={`/blog/`}><img className={`blocks-img`} src={blocks_blog} alt={`Blog`}></img></Link>
          </p>
          <br/>
          </section>
          
          <hr/>
          {/* <h3>Most Popular Blog Posts:</h3>
          <p><Link to={`/bootstrap-your-computer-science-career/`}>Bootstrap Your Computer Science Career</Link></p>
          <p><Link to={`/pay-in-cash/`}>What it Means to Pay for College in Cash</Link></p>
          <p><Link to={`/youth-importance-avoid-debt/`}>Why Youth is the Most Important Time to Avoid Debt, And That Includes Student Loans</Link></p> */}
          <h3>Latest Blog Posts:</h3>
          <section>
            {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }) => (
              <div key={node.id}>
                
                <Link
                  to={node.fields.slug}
                  css={css`
                        text-decoration: none;
                        color: inherit;
                    `
                  }
                >
                  {node.frontmatter.blip ? <img css={css`float: left; display: inline; max-height: 100px; max-width: 100px; margin: 0px 15px 0px 0px;`} src={`/blog_blips/${node.frontmatter.blip}.jpg`} alt={``} /> : ``}
                  <h3
                    className={css`
                        margin-bottom: ${rhythm(1 / 4)};
                        `}
                  >

                    {node.frontmatter.title}{" "}
                    <span
                      className={css`
                            color: #bbb;
                        `}
                    ><br/>
                     <span css={css`color: grey;`}>{node.frontmatter.date}</span>
                    </span>
                  </h3>
                  <p>{node.excerpt}</p>

                </Link>
              </div>
            ))}
          <p> <Link to={`/blog`}>All Blog Posts</Link></p>
          </section>
          <hr/>
          
          {/* <span className={`anchor`} id={`Course`}></span> */}
          {/* <h2>Holm School - A Free Computer Science Course using Open Educational Resources and OpenCourseWare</h2> */}
          {/* <span className={`anchor`} id={`Index`}></span>
          <h3>Course Index</h3>
          <section>{data.allContentfulSubject.subjects.map(({ subject }, index) => {
              return (
                <h4 css={css`margin: 0;`} key={`subject${index}`}><a href={`#${subject.name.split(" ").join("-")}`}>{subject.name}</a></h4>
              )}
          )}
          </section> */}
          {/* <section>
            {data.allContentfulSubject.subjects.map(({ subject }, index) => {
              return (
                <div key={`subject${index}`} css={css`margin-bottom:15px;`}>
                  <span className={`anchor`} id={`${subject.name.split(" ").join("-")}`}></span>
                  <h3>{subject.name}</h3>
                  <div>{subject.courses ? subject.courses.map((course, index) => {
                    return (
                      <div key={`${course.id}`}  css={css`display: grid;grid-template-columns: 10% 20% 70%;`}>
                        <input id={`${course.id}-checkbox`} className={`form-radio`} css={css`
                      grid-column-start: 1;
                      grid-column-end: 2;
                      width: 26px;
                      height: 26px;
                      border-radius: 3px;
                      margin: 3px 8px 0px 8px;
                      text-align: center;
                      :hover {

                      }
                    `} type="checkbox" onClick={() => {if (document.getElementById(`${course.id}-checkbox`).checked === true ){confetti.DoConfetti();}}}></input>
                        {course.topic ? <span css={css`margin: 2px;grid-column-start: 2; grid-column-end: 3`}>{course.topic}</span> : ``}
                        {course.topic ? <a css={css`margin: 2px;grid-column-start: 3; grid-column-end: 4`} href={course.url}>{course.name ? course.name : ``}</a> : <a css={css`margin: 2px;grid-column-start: 2; grid-column-end: 4`} href={course.url}>{course.name ? course.name : ``}</a>}

                      </div>
                    )
                  }) : ``}
                  </div>
                </div>

              )
            })}
          </section> */}
          {/* <div css={css`
            margin: 0px auto 0px auto;
            max-width: 800px;
            padding: 0 10px;
            @media screen and (min-width: 800px) {
              margin: 56px auto 0px auto;
            }
          `} id={`holm-school`}>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </div> */}
          {/* <br/>
          <hr />
          
          <p></p>
          <p><a href={`https://www.mrmoneymustache.com/2011/11/08/get-rich-with-the-library/`}>"I know [University] is emotionally attractive to many who fancy themselves to be intellectuals. But if you are really that smart, why are you paying dearly for something that you can get for free?"</a></p>
          <p></p>
          <p><a href={`https://history-computer.com/ModernComputer/Personal/Dynabook.html`}>"Where some people measure progress in answers-right per test or tests-passed per year, we are more interested in Sistine-Chapel-Ceilings per Lifetime."</a></p>
          <hr/> */}
        </div>
        <div className="bigimages">
          <img src={vilhelm_hammershoi_2} alt="Painting 'The Buildings of the Asiatic Company, seen from St. Annæ Street, Copenhagen' by Vilhelm Hammershøi, 1902" width="100%" className={css`margin-bottom: 0px;`} />
        </div>

      </div>
      <div className={css`
          max-width: 800px;
          margin: 0 auto;
          margin-top: -22px;
          padding: 10px;
        `}>

        <div className={css`
            text-align: center;
          `}>



        </div>
      </div>
    </Layout>
  )
}

export default indexPage;

export const query = graphql`
query IndexQuery {
  allMarkdownRemark(
    filter: {fields: {isSyllabus: {eq: false}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "D MMMM, YYYY")
          blip
        }
        fields {
          slug
        }
        excerpt
        wordCount {
          words
        }
      }
    }
  }
  markdownRemark(fields: {slug: {eq: "/computer-science/"}}) {
    html
    fields {
      slug
    }
    frontmatter {
      title
    }
  }
}

`
