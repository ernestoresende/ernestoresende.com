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
  padding-top: var(--space-xxlg);
  padding-bottom: var(--space-xxlg);
  background: var(--primaryBackground);
  ${media.tablet`
      padding-top: var(--space-xxlg);
      padding-bottom: var(--space-xxlg);
    `};
`

export const HeroMaskWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  bottom: 43px;
`
