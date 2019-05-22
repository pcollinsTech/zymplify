import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const WhiteLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo-white.png" }) {
          childImageSharp {
            fixed(width: 132) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {

      return (

        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      )
    }}
  />
)

export default WhiteLogo