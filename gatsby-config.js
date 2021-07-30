module.exports = {
  siteMetadata: {
    title: `Blond`,
    description: `Blond ist eine deutsche Indie-Pop-Band aus Chemnitz, die 2011 gegründet wurde. Am 31. Januar 2020 veröffentlichte die Band ihr Debütalbum Martini Sprite.`,
    author: `@andrezimpel`,
    siteUrl: `https://www.blond-band.de`,
  },
  plugins: [
    `gatsby-plugin-unknown-studios`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Blond`,
        short_name: `Blond`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FF3E75`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
