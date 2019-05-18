// import PropTypes from "prop-types";
// import React from "react";
// import { graphql } from "gatsby";

// import Seo from "../components/Seo";
// import Article from "../components/Article";
// import Post from "../components/Post";

// const PostTemplate = props => {
//   const {
//     data: {
//       post,
//       authornote: { html: authorNote },
//       site: {
//         siteMetadata: { facebook }
//       }
//     },
//     pageContext: { next, prev }
//   } = props;

//   return (
//     <React.Fragment>
      
//         {theme => (
//           <Article theme={theme}>
//             <Post
//               post={post}
//               next={next}
//               prev={prev}
//               authornote={authorNote}
//               // facebook={facebook}
//               theme={theme}
//             />
//           </Article>
//         )}

//       <Seo data={post} />
//     </React.Fragment>
//   );
// };

// PostTemplate.propTypes = {
//   data: PropTypes.object.isRequired,
//   pageContext: PropTypes.object.isRequired
// };

// export default PostTemplate;

// //eslint-disable-next-line no-undef
// export const instagramQuery = graphql`
//   query InstagramById($slug: String!) {
//     post: allInstaNode(fields: { slug: { eq: $slug } }) {
//       id
//       html
//       excerpt(pruneLength: 250)
//       fields {
//         slug
//         prefix
//       }
//       frontmatter {
//         title
//         category
//         cover {
//           childImageSharp {
//             resize(width: 300) {
//               src
//             }
//           }
//         }
//       }
//     }
//     authornote: markdownRemark(fileAbsolutePath: { regex: "/author/" }) {
//       id
//       html
//     }
//     site {
//       siteMetadata {
//         facebook {
//           appId
//         }
//       }
//     }
//   }
// `;
