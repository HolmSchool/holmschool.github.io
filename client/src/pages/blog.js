
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { css } from '@emotion/react'
import { rhythm } from "../utils/typography"
import Helmet from "react-helmet"

import birger_sandzen from "../img/smoky_river_smaller.jpg"
import hammershoi from "../img/2020903_KMS6750.jpg"


const blogPage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Blog</title>
      <meta name="description" content="Find out strategies and tips for studying computer science for free or super low cost! Find out why it might be better to study online than go to university to study programming."/>
    </Helmet>
    <div className={`bigimages`} css={css`margin-top: 70px;@media screen and (min-width: 800px) { margin-top: 48px;}`}>
      <img src={birger_sandzen} width="100%" alt="Painting 'Smoky River, Kansas' by Birger Sandzen, 1926" />
    </div>

    <div css={css`
      max-width: 800px;
      margin: 0 auto;
      margin-top: -22px;
      padding: 10px;
    `}>
      <h1>Holm School Blog</h1>
      {/* <h3><Link to={`/holm_school-you_might_learn_something.epub`}>Read the archive as an .epub (public domain)</Link></h3>
      <h2>Most Popular Posts:</h2>
      <p><Link to={`/bootstrap-your-computer-science-career/`}>Bootstrap Your Computer Science Career</Link></p>
      <p><Link to={`/pay-in-cash/`}>What it Means to Pay for College in Cash</Link></p>
      <p><Link to={`/youth-importance-avoid-debt/`}>Why Youth is the Most Important Time to Avoid Debt, And That Includes Student Loans</Link></p> */}
      <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={css`
            text-decoration: none;
            color: inherit;
        `
            }
          >
            
            <h4
              css={css`
            margin-bottom: ${rhythm(1 / 4)};
            margin-top: 1rem;
            `}
            >

              {node.frontmatter.title}{" "}
              <span
                css={css`
                color: #999;
              `}
              ><br/>{node.frontmatter.date}
              </span>
            </h4>
            {/* {node.frontmatter.blip ? <img css={css`float: left; display: inline; max-height: 80px; max-width: 100px; margin: 0px 15px 15px 0px;`} src={`/blog_blips/${node.frontmatter.blip}.jpg`} alt={``} /> : ``} */}
            {/* <p>{node.excerpt}</p> */}

          </Link>
        </div>
      ))}
      <br/>
      <hr/>
    </div>
    <div className="bigimages">
      <img src={hammershoi} alt="Painting 'View of Christiansborg Palace. Late Autumn' by Vilhelm Hammershøi, 1890" width="100%" className={css`margin-bottom: 0px;`} />
    </div>

  </Layout>
)

export default blogPage;

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fields: {isSyllabus: {eq: false}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            blip
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
