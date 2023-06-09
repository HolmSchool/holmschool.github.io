import React from 'react';
import Helmet from 'react-helmet';

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import OpenSourceNotice from "../components/OpenSourceNotice/openSourceNotice"
import { css } from '@emotion/react'

import anne_vallayer_coster_1 from "../img/554cd43cd0dca256eb9447308cabc1cc26326ecc3cf79bcd81a7f68d2a50.jpg"
import anne_vallayer_coster_2 from "../img/0c2c297d3545478da6ab5e1313886e96b893f0fd99975faac30381fa460b.jpg"


let groupBy = (data, key) => {
  console.log(data);
  var unique = data.filter((o, i) =>
    i === data.findIndex(oo => o.slug === oo.slug && o.title === oo.title)
  );
  return unique.reduce(function(acc, item) {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

let mapGroupByDictionary = (node) =>
{
    console.log(node);
  let keySlug = node.challenge.fields.slug.split("/");
  keySlug.splice(4, 1, "");
  keySlug = keySlug.join("/");
  return {"id": node.challenge.fields.slug, "keySlug": keySlug, "slug": node.challenge.fields.slug, "subject": node.challenge.fields.blockName, "title": node.challenge.title, "order": node.challenge.challengeOrder}
}

let data2 = (data) => data3(groupBy(data.allChallengeNode.edges.map(({ node }) => (mapGroupByDictionary(node))
  ), 'subject'))
  
let data3 = (data3) => Object.keys(data3).map(objKey =>

<div key={objKey}>
    {console.log(data3)}
  <h2 key={objKey.replaceAll(" ", "-")} id={objKey.replaceAll(" ", "-")}><strong><Link css={css``} to={data3[objKey][0].keySlug} >{objKey}</Link></strong></h2>
  {/* {data3[objKey].map(order => 
  <h3
      css={css`
    margin-bottom: ${rhythm(1 / 4)};
    `}
    key={order.slug}
    >
      
  <Link
    to={order.slug}
    css={css`
      color: #667c7c;
    `}
  >
    {order.title}
  </Link> 
  
  </h3>)} */}
</div>
)


const departmentPage = ({ data, pageContext }) => (
  <Layout>
    {/* {console.log(data)} */}
    <Helmet>
      <title>Free College Curricula</title>
      <meta name="description" content="Discover what 'Z-Degrees' are, and how they provide a university curriculum or class for zero cost of textbooks by using OER and OCW."/>
    </Helmet>
    <div className={`bigimages`} css={css`margin-top: 70px;@media screen and (min-width: 800px) { margin-top: 48px;}`}>
      <img src={anne_vallayer_coster_2} width="100%" alt="Painting 'Still Life with Brioche, Fruit and Vegetables' by Anne Vallayer-Coster, 1775" />
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

      <h3><Link to={`/learn`}>Curricula</Link> /</h3>
      <h1>{pageContext.name} Courses</h1>
      
      {data2(data)}
        
    
    <OpenSourceNotice></OpenSourceNotice>
    </div>
    <br></br>
    <div className="bigimages">
      <img src={anne_vallayer_coster_1} alt="Painting 'Portrait of a violinist' by Anne Vallayer-Coster, 1773" width="100%" className={css`margin-bottom: 0px;`} />
    </div>

  </Layout>
)


export default departmentPage;

export const query = graphql`
query departmentPage($department: String) {
  allChallengeNode(
    filter: {challenge: {superBlock: {eq: $department}}}
    sort: [{challenge: {superBlock: ASC}}, {challenge: {department: ASC}},
{challenge: {order: ASC}}, {challenge: {block: ASC}}, {challenge:
{challengeOrder: ASC}}]
  ) {
    edges {
      node {
        challenge {
          block
          department
          superBlock
          name
          title
          order
          challengeOrder
          fields {
            slug
            blockName
          }
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