import React from 'react';
import Helmet from 'react-helmet';

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { css } from '@emotion/react'

import birger_sandzen from "../img/IMG_1745_1.jpg"
import hammershoi from "../img/1_8Q2KA3EYTOCY2BxNgO2iNQ.jpg"


let extractCourse = (datum) => {
  return (
    <p key={datum.node.challenge.fields.slug} id={datum.node.challenge.fields.slug}>{datum.node.challenge.challengeOrder + 1}) <Link to={datum.node.challenge.fields.slug}>{datum.node.challenge.title}</Link></p>
  )
}


const coursePage = ({ data, pageContext }) => (
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

      <h3><Link to={`/learn`}>Curriculum</Link> / <Link to={`/learn/${pageContext.department}`}>{pageContext.departmentName}</Link> /</h3>
      <h1>{pageContext.name}&nbsp;&nbsp;(<b>{data.allChallengeNode.edges.length}</b>)</h1>
        <div>
        {data.allChallengeNode.edges.map(node => 
          extractCourse(node)
        )}
        </div>
    
    <h5>All these curricula are open source, so please visit our Github page at <a href={`https://github.com/HolmSchool/holm-school`}>github.com/HolmSchool/holm-school</a> to contribute to the markdown for each subject! The location of the syllabi directory is <a href={`https://github.com/HolmSchool/holm-school/tree/master/src/client/pages/syllabi`}>/src/pages/syllabi/</a>, where you can find the markdown files to edit in your fork. If you need a guide to using Github, I recommend shiffman's <a href={`https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV`}>Git and Github for Poets</a>.</h5>
    </div>
    <br></br>
    <div className="bigimages">
      <img src={hammershoi} alt="Painting 'Sunshine in the Drawingroom III' by Vilhelm Hammershøi, 1905" width="100%" className={css`margin-bottom: 0px;`} />
    </div>

  </Layout>
)


export default coursePage;

// TODO: ADD ORDERING
export const query = graphql`
query getLesson($department: String, $course: String) {
    allChallengeNode(
      filter: {challenge: {superBlock: {eq: $department}, block: {eq: $course}}},
      sort: {fields: [challenge___challengeOrder], order: ASC }
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