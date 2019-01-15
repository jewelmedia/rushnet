module.exports = {
  siteMetadata: {
    title: 'RushNet, Inc',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'RushNet, Inc',
        short_name: 'RushNet',
        start_url: '/',
        background_color: '#20201F',
        theme_color: '#FFB800',
        display: 'minimal-ui',
        icon: 'src/images/fav-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
  ],
}
