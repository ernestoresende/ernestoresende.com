import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Seo from '@components/common/Seo'
import Layout from '@components/common/Layout'
import Hero from '@components/common/Hero'
import BlogItem from '@components/common/BlogItem'
import ProjectItem from '@components/common/ProjectItem'
import Spacer from '@components/common/Spacer'

import mixins from '@styles/mixins'

const Section = styled.section`
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
  font-family: var(--fontFace-Milliard);
`
const ContactSection = styled(Section)`
  height: 50vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .email-paragraph {
    font-size: 16px;
    color: var(--primaryText);
    line-height: 1.6;
  }
  .email {
    font-size: 22px;
    color: var(--secondaryText);
    font-weight: 600;
  }
`
const SectionHeading = styled.h2`
  padding-top: 80px;
  margin-top: -80px;

  font-size: 24px;
  font-weight: 700;
  color: var(--primaryText);
  letter-spacing: -0.05rem;
`
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-default);
`

const IndexPage = ({ data }) => {
  return (
    <React.Fragment>
      <Seo title='Ernesto Resende' />
      <Layout isNavHome={false} isNavSticky={true}>
        <Hero />
        <Spacer size={64} />
        <Section>
          <SectionHeading>Some things I've written</SectionHeading>
          <Spacer size={32} />
          {data.allMdx.edges.map(edge => (
            <React.Fragment key={`fragment-${edge.node.id}`}>
              <BlogItem
                slug={`/blog/${edge.node.slug}`}
                title={edge.node.frontmatter.title}
                description={edge.node.frontmatter.description}
                timeToRead={edge.node.timeToRead}
                key={edge.node.id}
              />
              <Spacer size={32} key={`spacer-${edge.node.id}`} />
            </React.Fragment>
          ))}
        </Section>
        <Spacer size={128} />
        <Section>
          <a id='work'>
            <SectionHeading>Some things I've built</SectionHeading>
          </a>
          <Spacer size={32} />
          <ProjectItem
            projectTitle='EightSystems Design System'
            projectDescription={
              "A React component library to create a cohesive, unified product experience at EightSystem's internal projects."
            }
            projectLink='/projects/eightsystems-design-system'
            projectImage={data.edsCover}
            projectImageAlt="EightSystem's Design-System cover"
          />
        </Section>
        <ContactSection id='contact'>
          <SectionHeading>Get in touch</SectionHeading>
          <Spacer size={32} />
          <p className='email-paragraph'>
            Feel free to reach out if you're looking for a UI Designer and/or Developer for your next project, have a
            question, or just want to say hi.
          </p>
          <Spacer size={16} />
          <a href='mailto:dev@ernestoresende.com' className='email'>
            dev@ernestoresende.com
          </a>
        </ContactSection>
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
    edsCover: file(relativePath: { eq: "images/eightsystems-designsystem-cover.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
      }
    }
  }
`

export default IndexPage
