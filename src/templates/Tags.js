import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Seo from '../components/common/Seo'
import Layout from '../components/common/Layout'
import BlogItem from '../components/common/BlogItem'

import mixins from '../styles/mixins'
import media from '../styles/media'
import * as V from '../styles/variables'

const Main = styled.div`
  padding-top: 60px;
  max-width: 1100px;
  margin: 0 auto;
  ${mixins.sidePadding}
  .tag-title {
    font-family: ${V.FontFaces.Lora};
    color: var(--color-primaryText);
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 24px;
  }
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 72px;
  margin-bottom: 48px;
  ${media.tablet`
    display: block;
  `}
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMdx

  return (
    <React.Fragment>
      <Seo title={`${tag} Articles - Ernesto Resende`} />
      <Layout isNavHome={false} isNavSticky={false}>
      <Main>
        <h1 className="tag-title">{tag}</h1>
        <GridContainer>
          {edges.map(post => (
            <BlogItem 
              key={post.node.slug}
              slug={`/blog/${post.node.slug}`}
              timeToRead={post.node.timeToRead}
              title={post.node.frontmatter.title}
              description={post.node.frontmatter.description}
              fixedHoverStyle={true}
            />
          ))}
        </GridContainer>
      </Main>

      </Layout>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
    	sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          timeToRead
          slug
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
` 

export default Tags

