
import React, { Component } from "react"
import { graphql } from 'gatsby'

import Seo from "../components/Seo";
import Article from "../components/Article";
import Post from "../components/Post";
import Layout from '../components/Layout'

class PostTemplate extends Component {
  render() {
    
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <Article>
          <Post
            post={post}
          />
        </Article>
        <Seo data={post} />
      </Layout>
    )
  }
}


export default PostTemplate

export const query = graphql`
  query($slug: String!) {
     wordpressPost(slug: { eq: $slug }) {
      date
      title
      slug
      content
      categories {
        name
      }
    }    
  }
`;
