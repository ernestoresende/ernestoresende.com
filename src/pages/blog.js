import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

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
    font-family: var(--fontFace-Milliard);
    color: var(--primaryText);
    font-size: 32px;
    font-weight: 700;
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

const BlogIndex = ({
  data: {
    allMdx: { group },
  },
}) => (
  <React.Fragment>
    <Layout isNavHome={false} isNavSticky={false}>
      <Main>
        {group.map(tag => (
          <React.Fragment>
            <h1 className='tag-title'>{tag.fieldValue}</h1>
            <GridContainer>
              {tag.nodes.map(post => (
                <BlogItem
                  key={post.id}
                  timeToRead={post.timeToRead}
                  slug={post.slug}
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                  fixedHoverStyle={true}
                />
              ))}
            </GridContainer>
          </React.Fragment>
        ))}
      </Main>
    </Layout>
  </React.Fragment>
)

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        nodes {
          id
          slug
          frontmatter {
            title
            description
          }
          timeToRead
        }
      }
    }
  }
`
