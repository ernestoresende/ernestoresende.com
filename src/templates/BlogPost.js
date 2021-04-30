import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import Layout from '../components/common/Layout'

import mixins from '../styles/mixins'
import media from '../styles/media'
import * as V from '../styles/variables'

const HeaderWrapper = styled.div`
  text-align: center;
  padding: 132px 0 32px 0;
  margin: 0 auto;
  ${mixins.sidePadding}
  ${media.tablet`
    text-align: center;
    padding-top: 100px;
    padding-bottom: 32px;
    width: 100%;
  `}
`
const Title = styled.h1`
  font-family: ${V.FontFaces.Lora};
  font-size: 72px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-primaryText);
  padding-top: 30px;
  ${media.tablet`
    font-size: 30px;
    line-height: 1.1;
  `}
`
const Description = styled.h2`
  font-family: ${V.FontFaces.Milliard};
  font-size: 22px;
  line-height: 32px;
  font-weight: 600;
  color: var(--color-secondaryText);
  padding-top: 30px;
  ${media.tablet`
    font-size: 18px;
    line-height: 24px;
  `}
`
const Tag = styled.div`
  font-family: ${V.FontFaces.Milliard};
  font-size: 16px;
  font-weight: 600;
  color: var(--color-secondaryText);
  text-transform: uppercase;
`
const ArticleWrapper = styled.article`
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
  font-family: ${V.FontFaces.Milliard};
  color: var(--color-primaryText);
  padding-top: 64px;
  max-width: 800px;
  overflow-wrap: break-word;

  p {
    font-size: 18px;
    line-height: 1.7;
    padding-bottom: 30px;
    ${media.thone`
      font-size: 16px;
      line-height: 1.6;
    `}
  }
  em {
    font-size: 18px;
    font-style: italic;
    color: var(--color-highlights);
    ${media.thone`
      font-size: 16px;
    `}
  }
  ul {
    padding-left: 2.5rem;
    list-style-type: disc;
    margin-bottom: 30px;
  }
  ul li {
    font-size: 18px;
    margin-bottom: 1.6rem;
    line-height: 30px;
    ${media.thone`
      font-size: 16px;
      line-height: 1.6;
    `}
  }

  a {
    ${mixins.styledLink}
    ${media.thone`
      font-size: 16px;
    `}
  }
  h1 {
    font-size: 42px;
    color: var(--color-text);
    font-weight: 700;
    line-height: 1.2;
    padding: 20px 0 20px 0;
    ${media.tablet`
      font-size: 32px;
    `}
  }
  h2 {
    font-size: 26px;
    color: var(--color-text);
    font-weight: 700;
    padding: 20px 0 20px 0;
  }
  h3 {
    font-size: 20px;
    color: var(--color-text);
    font-weight: 700;
    padding: 20px 0 20px 0;
  }
  hr {
    display: block;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    overflow: hidden;
    border-style: solid;
    border-width: 1px;
    border-color: var(--color-cards);
  }
  strong {
    font-weight: 700;
  }
`

export default function PageTemplate({ data: { mdx } }) {
  return (
    <React.Fragment>
      <Layout isNavSticky={true} isNavHome={false}>
        <HeaderWrapper>
          <Tag>{mdx.frontmatter.tags}</Tag>
          <Title>{mdx.frontmatter.title}</Title>
          <Description>{mdx.frontmatter.description}</Description>
        </HeaderWrapper>

        <ArticleWrapper>
          <MDXProvider>
            <MDXRenderer headings={mdx.headings} url={mdx.slug}>
              {mdx.body}
            </MDXRenderer>
          </MDXProvider>
        </ArticleWrapper>
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
