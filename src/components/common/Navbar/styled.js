import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import mixins from '@styles/mixins'
import media from '@styles/media'
import * as V from '@styles/variables'

export const Transition = styled.div`
  .hidden-mobile-menu {
    visibility: hidden;
    transition-timing-function: ease, linear, ease;
    transition-duration: 0.3s, 0.3s, 0.3s;
    opacity: 0;
  }
  .active-mobile-menu {
    opacity: 1;
    transition-timing-function: ease, linear, ease;
    transition-duration: 0.3s, 0.3s, 0.3s;
  }
`
export const MobileMenu = styled.nav`
  display: none;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  overflow: hidden;
  z-index: 15;
  background: var(--primaryBackground);
  color: var(--primaryText);

  padding: 36px;

  ${media.tablet`
    display: block;
  `};

  .close-menu {
    top: 15px;
    right: 15px;
    position: fixed;
  }
  .links-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 85%;
  }
`
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.tablet`height: 55px;`}
  height: 65px;
`
export const Header = styled.header`
  backdrop-filter: blur(8px);
  background-color: ${props => (props.isHome ? 'var(--secondaryBackground)' : 'var(--primaryBackgroundTransparent)')};
  border-bottom: solid 1px var(--secondaryBackground);

  top: 0;
  z-index: 5;
  width: 100%;

  height: 65px;
  position: ${props => (props.isSticky ? 'fixed' : 'relative')};
  ${media.tablet`height: 55px;`}
`
export const FlexContainer = styled.div`
  ${mixins.sidePadding}

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .hide-toggle-theme {
    ${media.tablet`display: none;`}
  }
  .hide-menu-icon {
    display: none;
    ${media.tablet`display: block;`}
  }
`
export const NameContainer = styled(props => <GatsbyLink {...props} />)`
  font-family: ${V.FontFaces.Milliard};
  color: var(--primaryText);
  text-decoration: none;
  padding-left: 50px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.015em;
  ${media.tablet`
    font-size: 18px;
    padding-left: 55px;
  `}
  ${media.phablet `
    padding-left: 15px;
  `}
`
export const NavList = styled.ul`
  display: flex;
  ${media.tablet`display:none;`}
`
export const StyledLink = styled(props => <GatsbyLink {...props} />)`
  ${mixins.styledLink}
`
export const StyledDropdown = styled.button`
  ${mixins.styledLink}
  cursor: pointer;
  svg {
    width: ${V.Space.sm};
    height: ${V.Space.sm};
    position: relative;
    top: 2px;
    left: 3px;
  }
`
export const DropdownMenuNav = styled.nav`
  background: var(--primaryBackground);
  padding: var(--space-xs);
  border-radius: 5px;
  position: absolute;
  top: 60px;
  width: 300px;
  box-shadow: var(--boxShadow-default);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;

  &[data-active='true'] {
    opacity: 1;
    visibility: initial;
    transform: translateY(0);
  }
`
export const StyledIcon = styled.div`
  svg {
    color: var(--primaryText);
    width: 3.2rem;
    height: 3.2rem;
  }
`
