// //const webpack = require("webpack");
// const _ = require("lodash");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// const path = require("path");
// const Promise = require("bluebird");

// // const { createFilePath } = require(`gatsby-source-filesystem`);

// // exports.onCreateNode = ({ node, getNode, actions }) => {
// //   const { createNodeField } = actions;
// //   if (node.internal.type === `MarkdownRemark`) {
// //     const slug = createFilePath({ node, getNode });
// //     const fileNode = getNode(node.parent);
// //     const source = fileNode.sourceInstanceName;
// //     const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
// //     const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

// //     if (source !== "parts") {
// //       createNodeField({
// //         node,
// //         name: `slug`,
// //         value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
// //       });
// //     }
// //     createNodeField({
// //       node,
// //       name: `prefix`,
// //       value: separtorIndex ? slug.substring(1, separtorIndex) : ""
// //     });
// //     createNodeField({
// //       node,
// //       name: `source`,
// //       value: source
// //     });
// //   }
// // };

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;

//   return new Promise((resolve, reject) => {
//     const postTemplate = path.resolve("./src/templates/PostTemplate.js");
//     resolve(
//       graphql(
//         `
//           {
//              allWordpressPost{
//               edges{
//                 node{
//                   link
//                   wordpress_id
//                   id
//                   title
//                   slug
//                   excerpt
//                   categories{
//                     id
//                     name
//                     description
//                   }
//                   date
//                   comment_status
//                   author'
//                 }
//               }
//               totalCount
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors);
//           reject(result.errors);
//         }


//         // Create posts
//         edges.forEach(({ node }, index) => {
//           const slug = node.slug;

//           createPage({
//             path: slug,
//             component: postTemplate,
//             context: {
//               slug,
//             }
//           });
//         });


//       })
//     );
//   });
// };

// exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
//   switch (stage) {
//     case `build-javascript`:
//       actions.setWebpackConfig({
//         plugins: [
//           new BundleAnalyzerPlugin({
//             analyzerMode: "static",
//             reportFilename: "./report/treemap.html",
//             openAnalyzer: true,
//             logLevel: "error",
//             defaultSizes: "gzip"
//           })
//         ]
//       });
//   }
// };
