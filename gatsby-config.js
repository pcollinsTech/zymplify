const config = require("./content/meta/config");


module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    socialLinks: config.socialLinks
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, 
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "zymplify.com",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/media",
        ],
        excludedRoutes: [
          "**/acf",
          "**/options",
          "**/yoast",

        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
