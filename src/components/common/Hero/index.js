import React from 'react'
import * as S from './styled'

import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { AiFillGitlab } from 'react-icons/ai'

const Hero = () => {
  return (
    <S.StyledHero>
      <S.HeadingSection>
        <S.BigHeading>
          Hey, I'm <span className='name-highlight'>Ernesto</span>{' '}
          <span role='img' className='hand-wave-emoji' aria-label='hand wave emoji'>
            👋
          </span>
        </S.BigHeading>
        <S.MediumHeading>
          <span className='heading-highlight'>Front-end & mobile developer</span>, fantasy storytelling connoisseur. I
          occasionally write on this very site.
        </S.MediumHeading>
        <S.MediumHeading>
          Currently working <span className='heading-highlight'>@EightSystems</span> I lead front-end engineering on
          severeal internal and third-party projects, primarily working within the JavaScript ecosystem.
        </S.MediumHeading>
        <S.Socials>
          <a target='_blank' rel='noopener noreferrer' href='/resume.pdf'>
            <FaFileAlt />
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/ernestoresende'>
            <FaGithub />
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://gitlab.com/thisisernesto'>
            <AiFillGitlab />
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/ernesto-resende'>
            <FaLinkedin />
          </a>
        </S.Socials>
      </S.HeadingSection>
    </S.StyledHero>
  )
}

export default Hero
