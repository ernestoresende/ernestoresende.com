import React from 'react'
import HeroMask from '@assets/HeroMask'
import * as S from './styled'

const Hero = () => {
  return (
    <S.MainContainer>
      {/* Main Wrapper for the text */}
      <S.BlockModule>
        <S.BlockContainer>
          <h1>Ernesto Resende</h1>
          <h2>
            <b>UI Designer</b> and <b>Front-end Web Developer</b> building stuff for the web.
          </h2>
        </S.BlockContainer>
      </S.BlockModule>

      {/* Wave mask from the hero component */}
      <S.HeroMaskWrapper>
        <HeroMask />
      </S.HeroMaskWrapper>
    </S.MainContainer>
  )
}

export default Hero
