import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Seo from '@components/common/Seo'
import Layout from '@components/common/Layout'
import Hero from '@components/common/Hero'
import BlogItem from '@components/common/BlogItem'

import mixins from '@styles/mixins'
import media from '@styles/media'

const BlogSection = styled.section`
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
`
const Title = styled.h1`
  font-family: var(--fontFace-Lora);
  font-weight: 400;
  font-size: 96px;
  line-height: 115%;
  letter-spacing: -0.015em;
  padding-bottom: var(--space-default);
  color: var(--primaryText);
  ${media.desktop`
    font-size: 66px;
    line-break: normal;
    word-break: break-word;
    line-height: 72px;
  `};
`
const Subtitle = styled.h2`
  font-family: var(--fontFace-Lora);
  font-size: 20px;
  line-height: 140%;
  max-width: 580px;
  margin: 0 auto;
  color: var(--primaryText);
  ${media.phablet`
      font-size: 4.8vw;
    `};
`
const Divider = styled.div`
  background: var(--primaryHighlight);
  width: 100px;
  height: 1px;
  margin: 0 auto;
  margin-bottom: var(--space-lg);
`

const IndexPage = ({ data }) => {
  return (
    <React.Fragment>
      <Seo title='Ernesto Resende' />
      <Layout isNavHome={false} isNavSticky={true}>
        <Hero>
          <Title>Ernesto Resende</Title>
          <Subtitle>
            I write some squiggly lines that make the computer go beep boop. Currently a Front-End/Mobile Enginner
            working on some neat projects @EightSystems.
          </Subtitle>
        </Hero>
        <Divider />
        <BlogSection>
          {data.allMdx.edges.map(edge => (
            <BlogItem
              slug={`/blog/${edge.node.slug}`}
              title={edge.node.frontmatter.title}
              description={edge.node.frontmatter.description}
              timeToRead={edge.node.timeToRead}
              key={edge.node.id}
            />
          ))}
        </BlogSection>
      </Layout>
    </React.Fragment>
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
