import React from 'react'
import Layout from '../components/common/Layout'
import Hero from '../components/common/Hero'
import { graphql } from 'gatsby'
import BlogItem from '../components/common/BlogItem'

const IndexPage = ({ data }) => {

  // @todo: create a wrapper for the blog item components and properly organize
  // them in sections.

  return (
    <Layout>
      <Hero />
      {data.allMdx.edges.map(edge => (
        <BlogItem 
          slug={edge.node.slug}
          title={edge.node.frontmatter.title}
          description={edge.node.frontmatter.description}
          timeToRead={edge.node.timeToRead}
          key={edge.node.id}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
      edges {
        node {
          timeToRead
          slug
          id
          frontmatter {
            title
            description
            date
            tags
          }
        }
      }
    }
  }
`

export default IndexPage
