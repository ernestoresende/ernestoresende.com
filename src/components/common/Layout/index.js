import React from 'react'

import Navbar from '@components/common/Navbar'
import GlobalStyles from '@styles/global'
import * as S from './styled'

const Layout = ({ children, isNavSticky, isNavHome }) => {
  return (
    <S.Main>
      <GlobalStyles />
      <S.HeaderWrapper>
        <Navbar isSticky={isNavSticky} isHome={isNavHome} />
      </S.HeaderWrapper>
      <S.ContentWrapper>{children}</S.ContentWrapper>
      <S.FooterWrapper>
        <p>Footer will be here</p>
      </S.FooterWrapper>
    </S.Main>
  )
}

export default Layout
