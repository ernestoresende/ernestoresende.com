import styled from 'styled-components'
import media from '@styles/media'
import mixins from '@styles/mixins'

export const MainContainer = styled.header`
  display: flex;
  flex-direction: column;
  z-index: 5;
`
export const BlockModule = styled.div`
  position: relative;
`

export const BlockContainer = styled.div`
  ${mixins.sidePadding};
  text-align: center;
  padding-top: var(--space-xlg);
  padding-bottom: var(--space-xxlg);
  background: var(--secondaryBackground);
  ${media.tablet`
      padding-top: var(--space-md);
      padding-bottom: var(--space-xxlg);
    `};

  h1 {
    font-family: var(--fontFace-Lora);
    font-weight: 600;
    font-size: 96px;
    line-height: 115%;
    letter-spacing: -0.015em;
    padding-bottom: var(--space-default);
    color: var(--primaryText);
    ${media.desktop`
      font-size: 10vw;
    `};
  }
  h2 {
    font-family: var(--fontFace-Milliard);
    font-size: 22px;
    line-height: 130%;
    max-width: 450px;
    margin: 0 auto;
    color: var(--primaryText);
    ${media.phablet`
      font-size: 4.8vw;
    `};
  }
`

export const HeroMaskWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  bottom: 43px;
`
