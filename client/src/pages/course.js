import React from 'react';
import Helmet from 'react-helmet';

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import OpenSourceNotice from "../components/OpenSourceNotice/openSourceNotice"
import { css } from '@emotion/react'

import hester_bateman from "../img/mh_2005_17_1b_v1.jpg"
import judith_leyster from "../img/judith-leyster-flute.jpeg"


let extractCourse = (datum) => {
  if (datum.node.challenge.challengeType === 4) {
    return (
      <div>
        <h3 key={datum.node.challenge.fields.slug} id={datum.node.challenge.fields.slug}><Link to={datum.node.challenge.fields.slug}>{datum.node.challenge.title}</Link></h3>
      </div>
    )
  } else {
    console.log(datum.node.challenge);
    return (
      <p key={datum.node.challenge.fields.slug} id={datum.node.challenge.fields.slug}>{datum.node.challenge.challengeOrder + 1}) <Link to={datum.node.challenge.fields.slug}>{datum.node.challenge.title}</Link></p>
    )
  }
}


const coursePage = ({ data, pageContext }) => (
  <Layout>
    {console.log(pageContext)}
    <Helmet>
      <title>Free College Curricula</title>
      <meta name="description" content="Discover what 'Z-Degrees' are, and how they provide a university curriculum or class for zero cost of textbooks by using OER and OCW."/>
    </Helmet>
    <div className={`bigimages`} css={css`margin-top: 70px;@media screen and (min-width: 800px) { margin-top: 48px;}`}>
      <img src={hester_bateman} width="100%" alt="Teakettle 'George III Teapot Stand' by Hester Bateman, 1784" />
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

      <h3><Link to={`/learn`}>Curriculum</Link> / <Link to={`/learn/${pageContext.department}`}>{pageContext.departmentName}</Link> /</h3>
      <h1>{pageContext.name}&nbsp;&nbsp;(<b>{data.allChallengeNode.edges.length}</b>)</h1>
        <div>
        {data.allChallengeNode.edges.map(node => 
          extractCourse(node)
        )}
        </div>
    
        <OpenSourceNotice></OpenSourceNotice>
    </div>
    <br></br>
    <div className="bigimages">
      <img src={judith_leyster} alt="Painting 'Boy Playing the Flute' by Judith Leyster, 1630" width="100%" className={css`margin-bottom: 0px;`} />
    </div>

  </Layout>
)


export default coursePage;

// TODO: ADD ORDERING
export const query = graphql`
query getLesson($department: String, $course: String) {
  allChallengeNode(
    filter: {challenge: {superBlock: {eq: $department}, block: {eq: $course}}}
    sort: {challenge: {challengeOrder: ASC}}
  ) {
    edges {
      node {
        challenge {
          block
          department
          superBlock
          title
          fields {
            slug
            blockName
          }
          challengeOrder
          challengeType
        }
      }
    }
  }
}


    
`;

  
    // query($slug: String!) {
        
    //     allChallengeNode(
    //         edges: {
    //             node: {
    //                 challenge: {
    //                     department: { eq: "Nutrition" } 
    //                 }
                    
    //             }
    //         }
                
    //     ) {
    //         edges {
    //             node {
    //                 challenge {
    //                     block
    //                     department
    //                     superBlock
    //                     title
    //                     fields {
    //                         slug
    //                         blockName
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }