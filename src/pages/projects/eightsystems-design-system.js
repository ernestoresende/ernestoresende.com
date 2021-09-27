import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import Seo from '@components/common/Seo'
import Layout from '@components/common/Layout'
import Spacer from '@components/common/Spacer'

import media from '@styles/media'
import mixins from '@styles/mixins'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

/* eslint-disable react/jsx-no-target-blank */

const Main = styled.div`
  ${mixins.sidePadding}
  ${mixins.desktopAlignCenter}
`
const ProjectHeader = styled.div`
  font-family: var(--fontFace-Milliard);
  color: var(--primaryText);
`
const ProjectTitle = styled.h1`
  font-family: var(--fontFace-Milliard);
  font-size: 48px;
  font-weight: 700;
  ${media.bigDesktop`font-size: 26px;`};
`
const ProjectDescription = styled.p`
  font-family: var(--fontFace-Milliard);
  font-size: 18px;
  color: var(--secondaryText);
`
const ProjectInformation = styled.div`
  display: flex;
  font-size: 16px;

  div {
    margin-right: var(--space-lg);
  }
  li {
    font-family: var(--fontFace-iAWriterMono);
  }

  .align-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-weight: 700;
    margin-bottom: var(--space-xs);
  }
  svg {
    margin-top: var(--space-xs);
    width: 24px;
    height: 24px;
    color: var(--primaryText);
  }
`
const ProjectContent = styled.div`
  .wrapper-grid {
    display: grid;
    grid-template-columns:
      1fr
      min(110ch, 100%)
      1fr;
    overflow-wrap: break-word;
  }

  .wrapper-grid > * {
    grid-column: 2;
  }
  .image-wrapper {
    width: 60%;
    margin: 0 auto;
    grid-column: 1 / 4;
    ${media.bigDesktop`width: 90%;`};
  }
  .base-image {
    border-radius: 10px;
  }
`
const ProjectBody = styled.div`
  ${mixins.sidePadding};
  ${mixins.desktopAlignCenter};
  padding-top: 64px;
  font-family: var(--fontFace-Milliard);
  color: var(--primaryText);
  p {
    font-size: 16px;
    line-height: 1.8;
    padding-bottom: 30px;
    ${media.thone`
      font-size: 16px;
      line-height: 1.6;
    `}
  }
  em {
    font-size: 18px;
    font-style: italic;
    color: var(--highlights);
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
    font-size: 16px;
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
    padding-bottom: var(--space-default);
    padding-top: var(--space-default);
    font-family: var(--fontFace-Milliard);
    font-size: 42px;
    font-weight: 700;
    color: var(--primaryText);
    line-height: 1.2;
    ${media.tablet`
      font-size: 32px;
    `}
  }
  h2 {
    padding-bottom: var(--space-default);
    padding-top: var(--space-default);
    font-size: 26px;
    color: var(--text);
  }
  h3 {
    padding-bottom: var(--space-default);
    padding-top: var(--space-default);
    font-family: var(--fontFace-Milliard);
    font-size: 20px;
    color: var(--primaryText);
    font-weight: 700;
  }
  hr {
    display: block;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    overflow: hidden;
    border-style: solid;
    border-width: 1px;
  }
  strong {
    font-weight: 700;
  }
`

const EightSystemsDesignSystem = () => {
  return (
    <React.Fragment>
      <Seo title={"EightSystem's Design System - Ernesto Resende"} />
      <Layout isNavHome={false} isNavSticky={true}>
        <Main>
          <Spacer size={128} />
          <ProjectHeader>
            <ProjectTitle>EightSystem's Design System</ProjectTitle>
            <Spacer size={24} />
            <ProjectDescription>
              The official design-system used by internal projects at EightSystems.
            </ProjectDescription>
            <Spacer size={48} />
            <ProjectInformation>
              <div>
                <h1>Tech Stack</h1>
                <ul>
                  <li>React</li>
                  <li>Styled Components</li>
                </ul>
              </div>
              <div className='align-center'>
                <h1>Code</h1>
                <a rel='noopener noreferrer' target='_blank' href='https://github.com/EightSystems/design-system'>
                  <FaGithub />
                </a>
              </div>
              <div className='align-center'>
                <h1>Demo</h1>
                <a rel='noopener noreferrer' target='_blank' href='https://eightsystems.github.io/design-system/'>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </ProjectInformation>
          </ProjectHeader>
        </Main>
        <Spacer size={64} />
        <ProjectContent>
          <div className='wrapper-grid'>
            <StaticImage
              className='image-wrapper'
              imgClassName='base-image'
              alt='test'
              src='https://res.cloudinary.com/ernestoresende/image/upload/v1623516748/eightsystems-design-system/eightsystems-design-system_sqn0mb.png'
              loading='eager'
            />
          </div>
        </ProjectContent>
        <ProjectBody>
          <p>
            The EightSystem's Design System is my favorite project so far while working at EightSystems. Not only I got to bootstratp this project from the ground, but it also gave me the opportunity to grasp some insight into the inner workings of modules, bundlers and compilers that the usual project-contained component development for React projects didn't give me before.
          </p>
          <p>
            The internal lineup of EightSystems internal products is in constant evolution, and new projects tackling
            areas like online payment, delivery, and logistics are always in our roadmap, either in active development
            or recurrent support.
          </p>
          <p>
            This called for the need to have a design-system and component guidelines we could reference from and
            consume in our future projects, allowing us to maintain a consistent design language in all of our products.
          </p>
          <h1>The Design System</h1>
          <p>Some key points were defined before starting the project:</p>
          <ul>
            <li>
              Start fresh and slow, iterating on key components that would be required by current projects and slowly
              add more components as we move on.
            </li>
            <li>Have a strong and detailed documentation that is kept synced with the current state of the API's.</li>
            <li>
              Weave a upgradability path for future wanted additions (transition to TypeScript, enhancements to the
              theme providers).
            </li>
          </ul>
          <h1>Takeaways</h1>
          <p>
            My biggest takeaway from this project was that developing components for a library can be drastically
            different from developing them for a single project. Having to worry about compiling and bundling assets
            efficiently, managing project dependencies and having a strong, well documented component API are concerns
            that are strongly amplified by this kind of project.
          </p>
        </ProjectBody>
      </Layout>
    </React.Fragment>
  )
}

export default EightSystemsDesignSystem
