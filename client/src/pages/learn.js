import React from 'react';
import Helmet from 'react-helmet';

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import OpenSourceNotice from "../components/OpenSourceNotice/openSourceNotice"
import { css } from '@emotion/react'
import { rhythm } from "../utils/typography"

import marie_victoire_lemoine from "../img/DP320098.jpg"
import joy_laborer from "../img/HSW_WCM_1968_787-001.jpg"


let groupBy = (data, key) => {
  // console.log(data);
  var unique = data.filter((o, i) =>
    i === data.findIndex(oo => o.slug === oo.slug && o.title === oo.title)
  );
  let reduced = unique.reduce(function(acc, item) {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
  for (let key in reduced) {
    reduced[key].sort((x, y) => {return x.order - y.order})
  }
  return reduced
}

let mapGroupByDictionary = (node) =>
{
  let slug = node.challenge.fields.slug.split("/");
  slug.splice(4, 1, "");
  slug = slug.join("/");
  let _deptSlug = node.challenge.fields.slug.split("/")
  _deptSlug.splice(3, 3, "");
  let departmentSlug = _deptSlug.join("/")
  // console.log(node.challenge)
  return {"id": slug, "departmentSlug": departmentSlug, "slug": slug, "subject": node.challenge.department, "title": node.challenge.fields.blockName, "order": node.challenge.order}
}

let data2 = (data) => data3(groupBy(data.allChallengeNode.edges.map(({ node }) => (mapGroupByDictionary(node))
  ), 'subject'))

let index = (data) => makeIndex(groupBy(data.allChallengeNode.edges.map(({ node }) => (mapGroupByDictionary(node))), 'subject'))

let makeIndex = (data3) => Object.keys(data3).map(objKey => 
  
  <p key={objKey}><Link css={css`color: #000;`} to={data3[objKey][0].departmentSlug}>{objKey}</Link></p>
)

let cleanIds = string => string.replaceAll(" ", "-")


  
let data3 = (data3) => Object.keys(data3).map(objKey =>
<div key={objKey}>
  {/* {console.log(data3[objKey])} */}
  <h2 key={objKey.replaceAll(" ", "-")} id={cleanIds(objKey)}><strong><Link css={css`color: #000;`} to={data3[objKey][0].departmentSlug}>{objKey}</Link></strong></h2>
  {data3[objKey].map(order => 
  <h3
      css={css`
    margin-bottom: ${rhythm(1 / 4)};
    `}
    id={order.slug}
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
  </h3>)}
</div>
)


const zDegreesPage = ({ data, department }) => (
  <Layout>
    <Helmet>
      <title>Free College Z-Degrees</title>
      <meta name="description" content="Discover what 'Z-Degrees' are, and how they provide a university curriculum or class for zero cost of textbooks by using OER and OCW."/>
    </Helmet>
    <div className={`bigimages`} css={css`margin-top: 70px;@media screen and (min-width: 800px) { margin-top: 48px;}`}>
      <img src={marie_victoire_lemoine} width="100%" alt="The Interior of an Atelier of a Woman Painter by Marie Victoire Lemoine (1789)" />
    </div>

    <div css={css`
      max-width: 800px;
      margin: 0 auto;
      margin-top: -22px;
      padding: 10px;
    `}>
      <h1>Free "Zero-Textbook-Cost" Learning Curricula by Department</h1>
      <h2>Find syllabi of classes with no textbook cost!</h2>

      <hr></hr>
      <div>
        <h1>Departments:</h1>
        {index(data)}
      </div>
      <hr></hr>
      <h1>Classes by Departments:</h1>
      {data2(data)
        }
        <hr></hr>
    
        <OpenSourceNotice></OpenSourceNotice>
    </div>
    <br></br>
    <div className="bigimages">
      <img src={joy_laborer} alt="Joy and the Labourer by Mary Young Hunter (1905)
" width="100%" className={css`margin-bottom: 0px;`} />
    </div>

  </Layout>
)


export default zDegreesPage;

export const query = graphql`
query FirstChallenge {
  allChallengeNode(sort: {challenge: {superBlock: ASC}}) {
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
          order
        }
      }
    }
  }
}

`;