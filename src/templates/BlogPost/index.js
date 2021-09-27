import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import Seo from '@components/common/Seo'
import Layout from '@components/common/Layout'
import * as S from './styled'

import CodeBlock from '@components/mdx/CodeBlock'
import Sidenote from '@components/mdx/Sidenote'

export default function PageTemplate({ data: { mdx } }) {
  const shortcodes = {
    code: CodeBlock,
    Sidenote,
  }

  return (
    <React.Fragment>
      <Seo title={`${mdx.frontmatter.title} - Ernesto Resende`} description={mdx.frontmatter.description} />
      <Layout isNavSticky={true} isNavHome={false}>
        <S.HeaderWrapper>
          <S.Tag>{mdx.frontmatter.tags}</S.Tag>
          <S.Title>{mdx.frontmatter.title}</S.Title>
          <S.Description>{mdx.frontmatter.description}</S.Description>
        </S.HeaderWrapper>

        <S.ArticleWrapper>
          <div className='wrapper-grid'>
            <MDXProvider components={shortcodes}>
              <MDXRenderer headings={mdx.headings} url={mdx.slug}>
                {mdx.body}
              </MDXRenderer>
            </MDXProvider>
          </div>
        </S.ArticleWrapper>
      </Layout>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      slug
      timeToRead
      frontmatter {
        title
        description
        date
        tags
      }
      headings {
        depth
        value
      }
    }
  }
`
