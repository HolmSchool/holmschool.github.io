import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from '@emotion/react'
import Helmet from "react-helmet"

import birger from "../img/H21451-L226094595_small.jpg"
import birger_2 from "../img/PA15309_small.jpg"


const scholarshipPage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Scholarship for Black/Non-Binary Women Topekans</title>
      <meta name="description" content="An educational scholarship for high school graduates in Topeka, KS to receive two years of Perlego for holmschooling on your own."/>
    </Helmet>
    <div className={`bigimages`} css={css`margin-top: 70px;@media screen and (min-width: 800px) { margin-top: 48px;}`}>
      <img src={birger_2} alt="Linocut 'Blue Valley Farm' by Birger Sandzen" width="100%" className={css`margin-bottom: 0px;`} />
    </div>
    <div css={css`
      margin: 0 auto;
      max-width: 800px;
      padding: 0 10px;
    `}>
      {/* <h1>The (Annual) Holm School Scholarship for Two Years of Perlego for Black Women/Non-Binary Topekans</h1>

      <h2>About</h2>

      <p>Holm School is funding a two-year subscription to Perlego for a black woman/non-binary Topekan who wants to 'holmschool' computer science. Having a Perlego subscription for two years would allow them (hopefully) to self-study computer science to such a degree through their repository of programming books on Perlego that they could learn enough to become a junior developer position somewhere. This would enable them to qualify for tuition-reimbursement, wherein they could earn a undergraduate degree at UoPeople and master's at OMSCS at no cost to them! We hope this scholarship will be a springboard for someone's holmschooled career!</p>

      <p>For details, including the essay prompt and due date (November 11th), please visit the Github repository: <a href={`https://github.com/HolmSchool/holm-school-educational-scholarship/blob/main/README.md`}>HolmSchool/holm-school-educational-scholarship</a></p>

      <h2>Rules</h2>
      
      <p>This scholarship is only open to <b>Black Women/Non-Binary High School graduates in Topeka, KS!</b> Please read the <a href={`https://github.com/HolmSchool/holm-school-educational-scholarship`}>Github repo</a> for more details.</p> */}

    </div>
    <div className="bigimages">
      <img src={birger} alt="Lithograph 'Utah Poplars' by Birger Sandzen" width="100%" />
    </div>
    
  </Layout>
)

export default scholarshipPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `