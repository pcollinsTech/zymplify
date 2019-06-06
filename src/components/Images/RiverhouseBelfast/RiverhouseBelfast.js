import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RiverhouseBelfast = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "riverhouse-belfast.jpeg" }) {
          childImageSharp {
            fixed(width: 500) {
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

export default RiverhouseBelfast