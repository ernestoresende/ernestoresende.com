import React from 'react'
import * as S from './styled'

const Hero = ({children}) => {
  return (
    <S.MainContainer>
      {/* Main Wrapper for the text */}
      <S.BlockModule>
        <S.BlockContainer>
          {children}
        </S.BlockContainer>
      </S.BlockModule>

    </S.MainContainer>
  )
}

export default Hero
