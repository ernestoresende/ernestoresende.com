import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/common/Layout'
import Hero from '../components/common/Hero'
import BlogItem from '../components/common/BlogItem'
import mixins from '../styles/mixins'

const IndexPage = ({ data }) => {
  const BlogSection = styled.section`
    ${mixins.desktopAlignCenter}
    ${mixins.sidePadding}
  `

  return (
    <Layout>
      <Hero />
      <BlogSection>
        {data.allMdx.edges.map(edge => (
          <BlogItem
            slug={edge.node.slug}
            title={edge.node.frontmatter.title}
            description={edge.node.frontmatter.description}
            timeToRead={edge.node.timeToRead}
            key={edge.node.id}
          />
        ))}
      </BlogSection>
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
