import React from 'react'
import styled from 'styled-components'
import mixins from '@styles/mixins'
import Hero from '@components/common/Hero'
import media from '@styles/media'

import Seo from '@components/common/Seo'
import Layout from '@components/common/Layout'
import Spacer from '@components/common/Spacer'
import ProjectItem from '@components/common/ProjectItem'

const AboutSection = styled.section`
  font-family: var(--fontFace-Milliard);
  color: var(--primaryText);

  .section-container {
    ${mixins.sidePadding}
    ${mixins.desktopAlignCenter}

    p {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: var(--space-sm);
      line-height: 1.6;
    }

    h2 {
      font-size: 24px;
      font-family: var(--fontFace-Lora);
      font-weight: 600;
    }
  }

  
`

const StyledHighlight = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 6px);
  grid-template-rows: repeat(2, 6px);
  margin-bottom: var(--space-default);
  .round-model {
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background-color: var(--primaryText);
  }
`
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
`
const SkillsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  .skill-item {
    margin-left: var(--space-default);
    margin-bottom: var(--space-xs);
    font-size: 16px;
    list-style: disc;
    list-style-type: disc;
  }
`
const Email = styled.p`
  font-size: 18px !important;
  color: var(--secondaryText);
  font-weight: 600;
`

const Highlight = () => {
  return (
    <StyledHighlight>
      <div className='round-model' />
      <div className='round-model' />
      <div className='round-model' />
      <div className='round-model' />
    </StyledHighlight>
  )
}

const Work = () => {
  return (
    <React.Fragment>
      <Seo title='Work - Ernesto Resende' />
      <Layout isNavHome={false} isNavSticky={true}>
        <AboutSection>
          
          <section className='section-container'>
            <Highlight />
            <p>I'm a self-taught front-end developer and UI designer since 2019.</p>
            <p>
              Currently <span className='heading-highlight'>@EightSystems</span>, I lead the front-end engineering on
              several internal and contractor projects, primarily working within the JavaScript ecosystem.
            </p>
            <Spacer size={64} />
            <Highlight />
            <h2>Projects</h2>
            <Spacer size={16} />
            <p>Over the last year I've been lucky to work with some incredible people in exciting projects:</p>
            <Spacer size={24} />
            <ProjectsGrid>
              <ProjectItem
                projectTitle='EightSystems Design-System'
                projectDescription='The design system used by internal projects at EightSystems'
                projectLink='/projects/eightsystems-design-system'
              />
              <ProjectItem
                projectTitle='Forgotten Tales'
                projectDescription='Home to a literary challenge, with biweekly random prompts and short
                stories'
                projectLink='/'
              />
            </ProjectsGrid>
          </section>
          <Spacer size={64} />
          <section className='section-container'>
            <Highlight />
            <h2>Skills</h2>
            <Spacer size={16} />
            <p>
              I'm mainly interested on front-end technologies, but spend quite a bit of my free time tinkering with new
              stuff. Here are some I'm fairly comfortable with:
            </p>
            <SkillsGrid>
              <li className='skill-item'>JavaScript</li>
              <li className='skill-item'>Git</li>
              <li className='skill-item'>Angular</li>
              <li className='skill-item'>Cloud Services</li>
              <li className='skill-item'>React</li>
              <li className='skill-item'>Node</li>
              <li className='skill-item'>Docker</li>
            </SkillsGrid>
          </section>
          <Spacer size={128} />
          <section id='contact' className='section-container'>
            <Highlight />
            <h2>Get in touch</h2>
            <Spacer size={16} />
            <p>
              Feel free to reach out if you're looking for a UI Designer and/or Developer for your next project, have a
              question, or just want to say hi.
            </p>
            <Email>ernestoresende@hotmail.com</Email>
          </section>
        </AboutSection>
      </Layout>
    </React.Fragment>
  )
}

export default Work
