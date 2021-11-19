/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [

    `gatsby-plugin-react-helmet`,
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "O Carioca Web",
        short_name: "O Carioca Web",
        background_color: "#fff",
        theme_color: `#440055`,
        // Setting a color is optional.
        display: "standalone",
        icon: "src/img/monster.png",
        // Disable the loading spinner.
        showSpinner: false,
      },
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },


    




  ],
}
