
// import React, { Component } from "react"
// import { graphql } from 'graphql'

// import Seo from "../components/Seo";
// import Article from "../components/Article";
// import Post from "../components/Post";

// class PostTemplate extends Component {
//   render() {

//     const post = this.props.data.wordpressPost
//     console.log("Post", post)

//     return (
//       <React.Fragment>
//         <Article>
//           <Post
//             post={post}
//           />
//         </Article>
//         <Seo data={post} />
//       </React.Fragment>
//     )
//   }
// }


// export default PostTemplate

// export const pageQuery = graphql`
//     query currentPostQuery($id: String!) {
//         wordpressPost(id: { eq: $id }) {
//             title
//             content
//         }
       
//     }`;
