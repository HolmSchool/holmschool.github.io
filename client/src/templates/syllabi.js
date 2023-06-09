import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { css } from '@emotion/react'
import Helmet from "react-helmet"




const syllabiPage = ({ data, pageContext }) => {
  const syllabus = data.markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{syllabus.frontmatter.title}</title>
        <meta name="description" content={syllabus.excerpt} />
      </Helmet>
      <div css={css`
        margin: 70px auto 0px auto;
        max-width: 800px;
        padding: 0 10px;
        @media screen and (min-width: 800px) {
          margin: 56px auto 0px auto;
        }
      `}>
        <h4><Link to={`/z-degrees/`}>&lt;Back to Z-Degrees</Link></h4>
        <h1>{syllabus.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: syllabus.html }} />
        <hr/>
        <h4>This Z-Degree is an open source educational resources and public domain. You can use it and remix is however you wish! You can also contribute your own discoveries to it by <a href={`https://github.com/holmschool/holmschool.github.io/tree/main/client/src/pages/syllabi/${syllabus.fields.slug.replace(/\//g, "")}.md`}>making a Pull Request on Github</a>. Contributions are appreciated, including just making an Issue on Github with the book you want added. If you need a guide to Github, <a href={`https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV`}>check this out</a>.</h4>
      </div>
      
    </Layout>
  )
}
export default syllabiPage;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        subject
      }
      fields {
        slug
      }
    }
  }
`
