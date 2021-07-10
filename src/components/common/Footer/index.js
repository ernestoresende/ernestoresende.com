import React from 'react'

import FooterMask from '@assets/FooterMask'
import * as S from './styled'

const Footer = () => {
  return (
    <S.MainContainer>
      <S.HeroMaskWrapper>
        <FooterMask />
      </S.HeroMaskWrapper>
      <S.FooterWrapper>
        <S.FooterLeft>
          <S.NameContainer to='/'>ErNe</S.NameContainer>
          <S.Copyright>© 2021 - Built by Ernesto Resende. All rights reserved.</S.Copyright>
        </S.FooterLeft>
        <S.FooterRight>
          <S.StyledLink to='/blog'>Blog</S.StyledLink>
          <S.StyledLink to='/about'>About</S.StyledLink>
          <S.StyledLink to='/connect'>Connect</S.StyledLink>
        </S.FooterRight>
      </S.FooterWrapper>
    </S.MainContainer>
  )
}

export default Footer
