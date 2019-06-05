const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
// const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  
  return graphql(`
    query {
        allWordpressPost {
            edges {
                node {
                    id
                    slug
                    status
                }
            }
        }
    }
  ` )
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const postTemplate = path.resolve(`./src/templates/PostTemplate.js`)
      // const blogTemplate = path.resolve(`./src/templates/blog.js`)

      // In production builds, filter for only published posts.
      const allPosts = result.data.allWordpressPost.edges
      // const posts =
      //   process.env.NODE_ENV === 'production'
      //     ? getOnlyPublished(allPosts)
      //     : allPosts

      // Iterate over the array of posts
      _.each(allPosts, ({ node: post }) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `/${post.slug}/`,
          component: postTemplate,
          context: {
            id: post.id,
            slug: post.slug
          },
        })
      })

      // // Create a paginated blog, e.g., /, /page/2, /page/3
      // paginate({
      //   createPage,
      //   items: posts,
      //   itemsPerPage: 10,
      //   pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/` : `/page`),
      //   component: blogTemplate,
      // })
    })
    // .then(() => {
    //   return graphql(`
    //     {
    //       allWordpressCategory(filter: { count: { gt: 0 } }) {
    //         edges {
    //           node {
    //             id
    //             name
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   `)
    // })
    // .then(result => {
    //   if (result.errors) {
    //     result.errors.forEach(e => console.error(e.toString()))
    //     return Promise.reject(result.errors)
    //   }

    //   const categoriesTemplate = path.resolve(`./src/templates/category.js`)

    //   // Create a Gatsby page for each WordPress Category
    //   _.each(result.data.allWordpressCategory.edges, ({ node: cat }) => {
    //     createPage({
    //       path: `/categories/${cat.slug}/`,
    //       component: categoriesTemplate,
    //       context: {
    //         name: cat.name,
    //         slug: cat.slug,
    //       },
    //     })
    //   })
    // })
    // .then(() => {
    //   return graphql(`
    //     {
    //       allWordpressTag(filter: { count: { gt: 0 } }) {
    //         edges {
    //           node {
    //             id
    //             name
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   `)
    // })

    // .then(result => {
    //   if (result.errors) {
    //     result.errors.forEach(e => console.error(e.toString()))
    //     return Promise.reject(result.errors)
    //   }

    //   const tagsTemplate = path.resolve(`./src/templates/tag.js`)

    //   // Create a Gatsby page for each WordPress tag
    //   _.each(result.data.allWordpressTag.edges, ({ node: tag }) => {
    //     createPage({
    //       path: `/tags/${tag.slug}/`,
    //       component: tagsTemplate,
    //       context: {
    //         name: tag.name,
    //         slug: tag.slug,
    //       },
    //     })
    //   })
    // })
   
}
