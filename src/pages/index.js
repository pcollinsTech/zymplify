import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
// import Instagram from "../components/Instagram"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />

 
  </Layout>
)

export default IndexPage
