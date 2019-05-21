import React, {Component} from "react"
import { graphql } from "gatsby";

import Layout from "../components/Layout"
// import Seo from "../components/Seo"
import Hero from "../components/Hero"
// import Blog from "../components/Blog"
// import Instagram from "../components/Instagram"





class IndexPage extends Component {

  
  render() {
    console.log("INDEX RENDER", this.props.data)
    // const {
      
    // } = this.props
    return (
      <Layout>
        {/* <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
        <Hero />
        {/* <Blog post={posts} /> */}

      </Layout>
    )
  }
}

export default IndexPage

export const indexPostQuery = graphql`
  {
    posts: allWordpressPost{
      edges{
        node{
          link
          wordpress_id
          id
          title
          slug
          excerpt
          categories{
            id
            name
            description
          }
          date
          comment_status
         
        }
      }
      totalCount
    }
  }
`;