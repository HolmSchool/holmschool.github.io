import React from 'react';
import Helmet from 'react-helmet';

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { css } from '@emotion/react'

import Video from "../components/Video/video"
import LaunchResource from "../components/LaunchResource/launchResource"
import Description from "../components/Description/description"
import Instruction from "../components/Instruction/instruction"

import birger_sandzen from "../img/IMG_1745_1.jpg"
import hammershoi from "../img/1_8Q2KA3EYTOCY2BxNgO2iNQ.jpg"


const lessonPage = ({ data, pageContext }) => {
  // const post = data.markdownRemark
  // const { next, prev, left, right } = pageContext
  const ghc = require('../js/github-comments')
  ghc.DoGithubComments(data.challengeNode.challenge.ghissue)
  let page = 1
  return (
  <Layout>
    {console.log(pageContext)}
    <Helmet>
      <title>Free College Curricula</title>
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
      {/* <h1>Free Z-Degrees Syllabi and Curricula</h1>
      <h2>Find syllabi of classes with no textbook cost!</h2>
      <p>Z-Degrees are entire college curriculums in a subject that use free textbooks (OER), so that there are no costs to you other than tuition! By compiling z-degrees curriculum in many subjects, Holm School can archive z-degree syllabi without any cost of tuition! You might not get a degree, but you can 'Holm School' your way to a free college education!</p> */}

      <h3><Link to={`/learn`}>Curriculum</Link> / <Link to={`/learn/${data.challengeNode.challenge.superBlock}`}>{data.challengeNode.challenge.department}</Link> / <Link to={`/learn/${data.challengeNode.challenge.superBlock}/${data.challengeNode.challenge.block}`}>{data.challengeNode.challenge.fields.blockName}</Link> /</h3>
      <h2>{data.challengeNode.challenge.title} ({data.challengeNode.challenge.challengeOrder + 1})</h2>
      
      <Description
        description={data.challengeNode.challenge.description}
        challengeType={data.challengeNode.challenge.challengeType}
        triggerWarning={data.challengeNode.challenge.triggerWarning}
      ></Description>

      <Video
        videoUrl={data.challengeNode.challenge.videoUrl}
        challengeType={data.challengeNode.challenge.challengeType}
      ></Video>

      <Instruction
        instructions={data.challengeNode.challenge.instructions}
        challengeType={data.challengeNode.challenge.challengeType}
      ></Instruction>

      <LaunchResource
          challengeType={data.challengeNode.challenge.challengeType}
          videoUrl={data.challengeNode.challenge.videoUrl}
          id={data.challengeNode.challenge.id}
          prevSlug={pageContext.prevSlug}
          prevName={pageContext.prevName}
          nextSlug={pageContext.nextSlug}
          nextName={pageContext.nextName}
          css={css`margin: auto;`}
      ></LaunchResource>
        
    
    {/* <h5>All these curricula are open source, so please visit our Github page at <a href={`https://holmschool.github.io`}>github.com/HolmSchool/holm-school</a> to contribute to the markdown for each subject! The location of the syllabi directory is <a href={`https://holmschool.github.io/tree/master/src/client/pages/syllabi`}>/src/pages/syllabi/</a>, where you can find the markdown files to edit in your fork. If you need a guide to using Github, I recommend shiffman's <a href={`https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV`}>Git and Github for Poets</a>.</h5> */}
      <hr/>
      <div id="gh-comments">
        <h6>COMMENTS</h6>
        <div id="gh-comments-list"></div>
        <div style={{textAlign: 'center'}}><button css={css`border-radius: 3px;border: 1px solid purple;color: purple;font-family:"Courier New", Courier;vertical-align: middle;`} onClick={() => ghc.DoGithubComments(data.challengeNode.challenge.ghissue, ++page)} id="gh-load-comments">Load more comments</button></div>
      </div>
    </div>
    
    <br></br>
    <div className="bigimages">
      <img src={hammershoi} alt="Painting 'Sunshine in the Drawingroom III' by Vilhelm Hammershøi, 1905" width="100%" className={css`margin-bottom: 0px;`} />
    </div>

  </Layout>
  )
}


export default lessonPage;

// TODO: ADD ORDERING
export const query = graphql`
query getLesson($slug: String) {
    challengeNode(challenge: {fields: {slug: {eq: $slug}}}) {
      challenge {
        block
        department
        superBlock
        title
        fields {
            slug
            blockName
        }
        id
        videoUrl
        challengeType
        challengeOrder
        description
        instructions
        ghissue
        triggerWarning
    }
  }
}
    
`;