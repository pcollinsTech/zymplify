import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Promenade = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "footer/promenade.png" }) {
          childImageSharp {
            fixed(width: 64) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      console.log("data", data)
      return (

        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      )
    }}
  />
)

export default Promenade