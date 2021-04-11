import React from 'react'
import styled from 'styled-components'
import GlobalStyles from '../../styles/global'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column;
  min-height: 100vh;
`

const HeaderWrapper = styled.div`
  flex: 0 1 auto;
`
const ContentWrapper = styled.div`
  flex: 1 1 auto;
`
const FooterWrapper = styled.footer`
  flex: 0 1 40px;
`

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyles />
      <HeaderWrapper>
        <p>Navigation will be here</p>
      </HeaderWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      <FooterWrapper>
        <p>Footer will be here</p>
      </FooterWrapper>
    </Main>
  )
}

export default Layout
