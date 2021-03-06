const path = require('path')
const _ = require('lodash')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for posts and for tags within the post's frontmatter
  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            id
            slug
            frontmatter {
              title
              description
              date
              tags
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // Crash the build if the query resolves to error
  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges
  const tags = result.data.tagsGroup.group

  // Create a new page based on a template for each post file
  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`./src/templates/BlogPost/index.js`),
      context: {
        id: node.id,
        slug: node.slug,
        previous,
        next,
      },
    })
  })

  // Create a new post based on a template for each existing tag.
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve(`./src/templates/Tags/index.js`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src/'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@templates': path.resolve(__dirname, 'src/templates'),
        '@content': path.resolve(__dirname, 'src/content'),
      },
    },
  })
}
