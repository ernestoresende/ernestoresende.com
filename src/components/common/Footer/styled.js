import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import mixins from '@styles/mixins'
import media from '@styles/media'

export const MainContainer = styled.div`
  font-family: var(--fontFace-Milliard);
  color: var(--primaryText);
  margin-top: 36px;
  height: 300px;
  background: var(--secondaryBackground);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const FooterWrapper = styled.div`
  ${mixins.sidePadding}
  ${mixins.desktopAlignCenter}
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 36px;
  ${media.phablet`padding: 0 25px 36px 25px;`};
`
export const HeroMaskWrapper = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  z-index: 3;
`
export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 36px;
`
export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
`
export const NameContainer = styled(props => <GatsbyLink {...props} />)`
  color: var(--color-highlights);
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  padding-bottom: 20px;
  letter-spacing: -0.1rem;
`
export const Bold = styled.span`
  font-weight: 700;
`
export const Copyright = styled.p`
  font-size: 15px;
  color: var(--color-secondaryText);
`
export const StyledLink = styled(props => <GatsbyLink {...props} />)`
  font-size: 16px;
  font-weight: 400;
  color: var(--color-text);
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: all ease-in-out 0.1s;
  text-decoration: none;
  padding-bottom: 10px;
  :hover {
    color: var(--color-highlights);
  }
  ${media.desktop`margin: 0 25px 0 0;`};
  ${media.tablet`
    font-size: 16px;
    margin: 0 25px 0 0;
  `};
`
