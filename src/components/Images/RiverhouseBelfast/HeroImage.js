import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "50009502_2242236916019618_7563559900723281920_o.jpg" }) {
          childImageSharp {
            fixed(width: 1920) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    }}
  />
)

export default HeroImage
