const metadata = require('./config/metadata')
require('dotenv').config()

module.exports = {
  siteMetadata: {...metadata },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`]
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#73363d`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Montserrat:wght@300;400;600;900`,
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `v9a698scat4b`,
        accessToken: process.env.API_TOKEN
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gabriel Mazurco's Portfolio`,
        short_name: `GM's Portfolio`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#7cc576`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`
      },
    },
    `gatsby-plugin-offline`
  ],
}
