import React from 'react'
import { graphql } from 'gatsby'

import Seo from '@components/common/Seo'
import Layout from '@components/common/Layout'
import BlogItem from '@components/common/BlogItem'
import * as S from './styled'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMdx

  return (
    <React.Fragment>
      <Seo title={`${tag} Articles - Ernesto Resende`} />
      <Layout isNavHome={false} isNavSticky={false}>
        <S.Main>
          <h1 className='tag-title'>{tag}</h1>
          <S.GridContainer>
            {edges.map(post => (
              <BlogItem
                key={post.node.slug}
                slug={`/blog/${post.node.slug}`}
                timeToRead={post.node.timeToRead}
                title={post.node.frontmatter.title}
                description={post.node.frontmatter.description}
                fixedHoverStyle={false}
              />
            ))}
          </S.GridContainer>
        </S.Main>
      </Layout>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query ($tag: String) {
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
