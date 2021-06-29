import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as S from './styled'

import Seo from '@components/common/Seo'
import Layout from '@components/common/Layout'
import Spacer from '@components/common/Spacer'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const EightSystemsDesignSystem = () => {
  return (
    <React.Fragment>
      <Seo title='EightSystems/design-system - Ernesto Resende' />
      <Layout isNavHome={false} isNavSticky={true}>
        <S.Main>
          <Spacer size={128} />
          <S.ProjectHeader>
            <S.ProjectTitle>EightSystems/design-system</S.ProjectTitle>
            <Spacer size={24} />
            <S.ProjectDescription>
              The official design-system used by internal projects at EightSystems.
            </S.ProjectDescription>
            <Spacer size={48} />
            <S.ProjectInformation>
              <div>
                <h1>Tech Stack</h1>
                <ul>
                  <li>React</li>
                  <li>Styled Components</li>
                </ul>
              </div>
              <div className='align-center'>
                <h1>Code</h1>
                <a href='#'>
                  <FaGithub />
                </a>
              </div>
              <div className='align-center'>
                <h1>Demo</h1>
                <a href='#'>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </S.ProjectInformation>
          </S.ProjectHeader>
        </S.Main>
        <Spacer size={64} />
        <S.ProjectContent>
          <div className='wrapper-grid'>
            <StaticImage
              className='image-wrapper'
              imgClassName='base-image'
              alt='test'
              src='https://res.cloudinary.com/ernestoresende/image/upload/v1623516748/eightsystems-design-system/eightsystems-design-system_sqn0mb.png'
              loading='eager'
            />
          </div>
        </S.ProjectContent>
        <S.ProjectBody>
          <p>
            The internal lineup of EightSystems internal products is in constant evolution, and new projects tackling
            areas like online payment, delivery, and logistics are always in our roadmap, either in active development
            or recurrent support.
          </p>
          <p>
            This called for the need to have a design-system and component guidelines we could reference from and
            consume in our future projects, allowing us to maintain a consistent design language in all of our products.
          </p>
          <h1>Rationale</h1>
          <p>
            When the first products at EightSystems were released, they lacked a consistent design language, and styling
            was all over the place. This was fine given the fairly limited user base and the slow-growing nature of the
            products at the time, but was we began planning for expansions, this could no longer be the case.
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
        </S.ProjectBody>
      </Layout>
    </React.Fragment>
  )
}

export default EightSystemsDesignSystem
