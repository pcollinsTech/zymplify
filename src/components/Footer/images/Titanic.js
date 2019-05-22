import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Titanic = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "footer/titanic.png" }) {
          childImageSharp {
            fixed(width: 64) {
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

export default Titanic