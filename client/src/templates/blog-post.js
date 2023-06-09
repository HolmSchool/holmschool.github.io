import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { css } from '@emotion/react'
import Helmet from "react-helmet"




const blogPosts = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { next, prev, left, right } = pageContext
  const ghc = require('../js/github-comments')
  ghc.DoGithubComments(post.frontmatter.ghissue)
  let page = 1
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <div css={css`
        margin: 70px auto 0px auto;
        max-width: 800px;
        padding: 0 10px;
        @media screen and (min-width: 800px) {
          margin: 56px auto 0px auto;
        }
      `}>
        <h4><Link to={`/blog/`}>&lt;&nbsp;Back to blog</Link></h4>
        {prev ? <span css={css`float: left;padding: 5px;border-left:none;`}><Link to={prev.fields.slug}>&lt;&lt; Previous Post</Link></span>: null }
          
        {next ? <span css={css`float: right;padding: 5px;`}><Link to={next.fields.slug}>Next Post &gt;&gt;</Link></span> : null }
        <br/>
        <h1>{post.frontmatter.title}</h1>
        <h2 css={css`
              color: #bbb;
        `}>{post.frontmatter.date}</h2>
        {post.frontmatter.blip ? <img css={css`float: left; display: inline; max-height: 200px; max-width: 300px; margin: 0px 15px 5px 0px;`} src={`/blog_blips/${post.frontmatter.blip}.jpg`} alt={``} /> : ``}<div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
        <div css={css`display: inline-block;width:100%;`}>
          
            {prev ? <span css={css`float: left;padding: 5px;border-left:none;`}><Link to={prev.fields.slug}>&lt;&lt; Previous: {prev.fields.title}</Link></span>: null }
          
            <br/>
            {next ? <span css={css`float: right;padding: 5px;`}><Link to={next.fields.slug}>Next: {next.fields.title} &gt;&gt;</Link></span> : null }
            <br/>
            <br/>
            {left ? <span css={css`float: left;padding: 5px;border: 1px solid white;border-left: none;`}><Link to={left.fields.slug}>&lt; Random</Link></span>: null }
            <br/>
          
            {right ? <span css={css`float: right;padding: 5px;`}><Link to={right.fields.slug}>Random &gt;</Link></span> : null }
            <br/>
            <br/>
          
        </div>
        <hr/>
        <div id="gh-comments">
          <h6>COMMENTS</h6>
          <div id="gh-comments-list"></div>
          <div style={{textAlign: 'center'}}><button css={css`border-radius: 3px;border: 1px solid purple;color: purple;font-family:"Courier New", Courier;vertical-align: middle;`} onClick={() => ghc.DoGithubComments(post.frontmatter.ghissue, ++page)} id="gh-load-comments">Load more comments</button></div>
        </div>
        <br/>
      </div>
    </Layout>
  )
}
export default blogPosts;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        ghissue
        date
        blip
      }
    }
  }
`
