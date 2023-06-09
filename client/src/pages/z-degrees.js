
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { css } from '@emotion/react'
import { rhythm } from "../utils/typography"
import Helmet from "react-helmet"

import birger_sandzen from "../img/IMG_1745_1.jpg"
import hammershoi from "../img/1_8Q2KA3EYTOCY2BxNgO2iNQ.jpg"

let groupBy = (data, key) => {
  return data.reduce(function(acc, item) {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

let data2 = (data) => data3(groupBy(data.allMarkdownRemark.edges.map(({ node }) => (
  {"id": node.id, "slug": node.fields.slug, "subject": node.frontmatter.subject, "title": node.frontmatter.title})), 'subject'))
let data3 = (data3) => Object.keys(data3).map(objKey =>
<div key={objKey}>
  <h2 id={objKey.replaceAll(" ", "-")}><strong>{objKey}</strong></h2>
  {data3[objKey].map(order => 
  <h3
      css={css`
    margin-bottom: ${rhythm(1 / 4)};
    `}
    >
      
  <Link
    to={order.slug}
    css={css`
      color: #667c7c;
    `}
  >
    {order.title}
  </Link>
  </h3>)}
</div>
)

const zDegreesPage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Free College Z-Degrees</title>
      <meta name="description" content="Discover what 'Z-Degrees' are, and how they provide a university curriculum or class for zero cost of textbooks by using OER and OCW."/>
    </Helmet>
    <div className={`bigimages`} css={css`margin-top: 70px;@media screen and (min-width: 800px) { margin-top: 48px;}`}>
      <img src={birger_sandzen} width="100%" alt="Painting 'The Old Mill' by Birger Sandzen, 1929" />
    </div>

    <div css={css`
      max-width: 800px;
      margin: 0 auto;
      margin-top: -22px;
      padding: 10px;
    `}>
      <h1>Free Z-Degrees Syllabi and Curricula</h1>
      <h2>Find syllabi of classes with no textbook cost!</h2>
      <p>Z-Degrees are entire college curriculums in a subject that use free textbooks (OER), so that there are no costs to you other than tuition! By compiling z-degrees curriculum in many subjects, Holm School can archive z-degree syllabi without any cost of tuition! You might not get a degree, but you can 'Holm School' your way to a free college education!</p>


      <h1>Z-Degree Subjects</h1>
      {data2(data)
        }
    
    <h5>All these curricula are open source, so please visit our Github page at <a href={`https://github.com/holmschool`}>github.com/holmschool</a> to contribute to the markdown for each subject! The location of the syllabi directory is <a href={`https://github.com/holmschool/holmschool.github.io/tree/main/client/src/pages/syllabi`}>/src/pages/syllabi/</a>, where you can find the markdown files to edit in your fork. If you need a guide to using Github, I recommend shiffman's <a href={`https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV`}>Git and Github for Poets</a>.</h5>
    </div>
    <br></br>
    <div className="bigimages">
      <img src={hammershoi} alt="Painting 'Sunshine in the Drawingroom III' by Vilhelm Hammershøi, 1905" width="100%" className={css`margin-bottom: 0px;`} />
    </div>

  </Layout>
)

export default zDegreesPage;

export const query = graphql`
query ZDegrees {
  allMarkdownRemark(
    filter: {fields: {isSyllabus: {eq: true}}}
    sort: [{frontmatter: {subject: ASC}}, {frontmatter: {title: ASC}}]
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          subject
        }
        fields {
          slug
        }
      }
    }
  }
}

`
