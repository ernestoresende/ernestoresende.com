import React from 'react'
import styled from 'styled-components'
import * as V from '../../styles/variables'
import HeroMask from '../../assets/HeroMask'
import media from '../../styles/media'
import mixins from '../../styles/mixins'

const MainContainer = styled.header`
  display: flex;
  flex-direction: column;
  z-index: 9;
`
const BlockModule = styled.div`
  position: relative;
`

const BlockContainer = styled.div`
  ${mixins.sidePadding};
  text-align: center;
  padding-top: ${V.Space.xlg};
  padding-bottom: ${V.Space.xxlg};
  background: var(--color-secondaryBackground);
  ${media.tablet`
      padding-top: ${V.Space.md};
      padding-bottom: ${V.Space.xxlg};
    `};

  h1 {
    font-family: ${V.FontFaces.Lora};
    font-weight: 600;
    font-size: 96px;
    line-height: 115%;
    letter-spacing: -0.015em;
    padding-bottom: ${V.Space.default};
    color: var(--color-primaryText);
    ${media.desktop`
      font-size: 10vw;
    `};
  }
  h2 {
    font-family: ${V.FontFaces.Milliard};
    font-size: 22px;
    line-height: 130%;
    max-width: 450px;
    margin: 0 auto;
    color: var(--color-primaryText);
    ${media.phablet`
      font-size: 4.8vw;
    `};
  }
`

const HeroMaskWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  bottom: 43px;
`

const Hero = () => {
  return (
    <MainContainer>
      {/* Main Wrapper for the text */}
      <BlockModule>
        <BlockContainer>
          <h1>Ernesto Resende</h1>
          <h2>
            <b>UI Designer</b> and <b>Front-end Web Developer</b> building stuff for the web.
          </h2>
        </BlockContainer>
      </BlockModule>

      {/* Wave mask from the hero component */}
      <HeroMaskWrapper>
        <HeroMask />
      </HeroMaskWrapper>
    </MainContainer>
  )
}

export default Hero
