import React from 'react';
import Helmet from 'react-helmet';

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
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
  
let data3 = (data3) => Object.keys(data3).map(objKey =>
<div key={objKey}>
  {console.log(data3[objKey])}
  <h2 key={objKey.replaceAll(" ", "-")} id={objKey.replaceAll(" ", "-")}><strong><Link css={css`color: #000;`} to={data3[objKey][0].departmentSlug}>{objKey}</Link></strong></h2>
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
      {/* <h2>Find syllabi of classes with no textbook cost!</h2>
      <p>Z-Degrees are entire college curriculums in a subject that use free textbooks (OER), so that there are no costs to you other than tuition! By compiling z-degrees curriculum in many subjects, Holm School can archive z-degree syllabi without any cost of tuition! You might not get a degree, but you can 'Holm School' your way to a free college education!</p> */}


      {/* <h1>Z-Degree Subjects</h1> */}
      {data2(data)
        }
    
    <h5>All these curricula are open source, so please visit our Github page at <a href={`https://github.com/holmschool`}>github.com/holmschool</a> to contribute to the markdown for each subject! The location of the syllabi directory is <a href={`https://github.com/holmschool/holmschool.github.io/tree/main/client/src/pages/syllabi`}>/src/pages/syllabi/</a>, where you can find the markdown files to edit in your fork. If you need a guide to using Github, I recommend shiffman's <a href={`https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV`}>Git and Github for Poets</a>.</h5>
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