import React, { useState } from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

// import ToggleTheme from '../common/ToggleTheme'

import mixins from '../../styles/mixins'
import media from '../../styles/media'
import * as V from '../../styles/variables'

const Transition = styled.div`
  background: var(--color-gradients);

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
const MobileMenu = styled.nav`
  display: none;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  overflow: hidden;
  z-index: 15;
  background: var(--color-background);
  color: var(--color-text);

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
const Main = styled.div`
  top: 0;
  z-index: 3;
  width: 100%;
  background: ${props => (props.isHome ? 'var(--color-secondaryBackground)' : 'var(--color-primaryBackground)')};

  height: 65px;
  position: ${props => (props.isSticky ? 'fixed' : 'relative')};
  ${media.tablet`height: 55px;`}
`
const FlexContainer = styled.div`
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
const NameContainer = styled(props => <GatsbyLink {...props} />)`
  color: var(--color-primaryText);
  text-decoration: none;
  padding-right: 64px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.015em;
  ${media.tablet`font-size: 18px;`}
`
const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
`
const NavList = styled.ul`
  display: flex;
  list-style: none;
  ${media.tablet`display:none;`}
`
const StyledLink = styled(props => <GatsbyLink {...props} />)`
  font-family: ${V.FontFaces.Milliard};
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 0 25px;
  color: var(--color-primaryText);
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: all ease-in-out 200ms;
  text-decoration: none;

  :hover {
    color: var(--color-secondaryText);
  }
  ${media.desktop`margin: 0 25px 0 0;`};
  ${media.tablet`
    font-size: 26px;
    margin: 8px 0 8px 0;
  `};
`
const StyledIcon = styled.div``

const Navbar = ({ isSticky, isHome }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <Transition>
      <MobileMenu className={showMobileMenu ? 'active-mobile-menu' : 'hidden-mobile-menu'}>
        <button className='close-menu' onClick={() => setShowMobileMenu(false)}>
          <StyledIcon>
            <p>At some time there will be a icon here</p>
          </StyledIcon>
        </button>
        <nav className='links-container'>
          <StyledLink to='/blog'>Blog</StyledLink>
          <StyledLink to='/about'>About</StyledLink>
          <StyledLink to='/#connect'>Connect</StyledLink>
        </nav>
        {/* <ToggleTheme /> */}
      </MobileMenu>

      <Main isSticky={isSticky} isHome={isHome}>
        <FlexContainer>
          <NavContainer>
            <NameContainer to='/'>ErRe</NameContainer>
            <NavList>
              <StyledLink to='/blog'>Blog</StyledLink>
              <StyledLink to='/#projects'>Projects</StyledLink>
              <StyledLink to='/about'>About</StyledLink>
              <StyledLink to='/#contact'>Contact</StyledLink>
            </NavList>
          </NavContainer>

          <div className='hide-toggle-theme'>
            <p>Toggle Theme will be here sometime</p>
          </div>
          <button className='hide-menu-icon' onClick={() => setShowMobileMenu(true)}>
            <StyledIcon>
              <span className='iconify' data-icon='eva:menu-2-outline' data-inline='false' />
            </StyledIcon>
          </button>
        </FlexContainer>
      </Main>
    </Transition>
  )
}

export default Navbar
