module.exports = {
  flags: {
    DEV_SSR: false,
  },

  siteMetadata: {
    title: 'Ernesto Resende',
    author: '@ernestoresende',
    image: '',
    siteUrl: 'https://ernestoresende.com',
    description: 'UI Designer and Front-End Developer. Blogs about design, development and tech stuff.',
    keywords: ['blog', 'frontend', 'development', 'design'],
  },

  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/content/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx'],
        remarkPlugins: [require('remark-slug')],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
              showCaptions: true,
              withWebp: true,
            },
          },
          'gatsby-remark-lazy-load',
          'gatsby-remark-external-links',
        ],
      },
    },
    'gatsby-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
}
