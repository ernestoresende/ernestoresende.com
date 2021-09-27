module.exports = {
  siteMetadata: {
    title: 'Ernesto Resende',
    author: '@ernestoresende',
    image: 'https://res.cloudinary.com/ernestoresende/image/upload/v1632601893/og%20cards/Main_Card_mcyo12.jpg',
    siteUrl: 'https://ernestoresende.com',
    description: 'Front-end & mobile developer. Typing weird symbols that make the computer go beep boop.',
    keywords: ['blog', 'frontend', 'development', 'design'],
  },

  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
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
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
}
