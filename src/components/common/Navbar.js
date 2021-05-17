import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { HiMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import { BiChevronDown } from 'react-icons/bi'

import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick'

import ToggleTheme from '../common/ToggleTheme'
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
  background: var(--color-primaryBackground);
  color: var(--color-primaryText);

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.tablet`height: 55px;`}
  height: 65px;
`
const Header = styled.header`
  backdrop-filter: blur(8px);
  background-color: ${props => (props.isHome ? 'var(--color-secondaryBackground)' : 'var(--color-primaryBackgroundTransparent)')};
  border-bottom: solid 1px var(--color-secondaryBackground);

  top: 0;
  z-index: 5;
  width: 100%;

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
  font-family: ${V.FontFaces.Milliard};
  color: var(--color-primaryText);
  text-decoration: none;
  padding-left: 50px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.015em;
  ${media.tablet`
    font-size: 18px;
    padding-left: 15px;
  `}
`
const NavList = styled.ul`
  display: flex;
  ${media.tablet`display:none;`}
`
const StyledLink = styled(props => <GatsbyLink {...props} />)`
  ${mixins.styledLink}
`
const StyledDropdown = styled.button`
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
const DropdownMenuNav = styled.nav`
  background: var(--color-primaryBackground);
  padding: ${V.Space.xs};
  border-radius: 5px;
  position: absolute;
  top: 60px;
  width: 300px;
  box-shadow: ${V.BoxShadow.default};
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
const StyledIcon = styled.div`
  svg {
    color: var(--color-primaryText);
    width: 3.2rem;
    height: 3.2rem;
  }
`

const Navbar = ({ isSticky, isHome }) => {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const onDropdownMenuClick = () => setIsActive(!isActive)

  return (
    <Transition>
      <Header isSticky={isSticky} isHome={isHome}>
        <MobileMenu className={showMobileMenu ? 'active-mobile-menu' : 'hidden-mobile-menu'}>
          <button className='close-menu' onClick={() => setShowMobileMenu(false)}>
            <StyledIcon>
              <IoMdClose />
            </StyledIcon>
          </button>
          <nav className='links-container'>
            <StyledLink to='/blog'>Blog</StyledLink>
            <StyledLink to='/#projects'>Projects</StyledLink>
            <StyledLink to='/about'>About</StyledLink>
            <StyledLink to='/#contact'>Contact</StyledLink>
          </nav>
          <ToggleTheme />
        </MobileMenu>

        <Main>
          <NameContainer to='/'>ErRe</NameContainer>
          <NavList>
            <li>
              <StyledDropdown onClick={onDropdownMenuClick}>
                Blog
                <BiChevronDown />
              </StyledDropdown>
              <DropdownMenuNav ref={dropdownRef} data-active={isActive}>
                <ul>
                  <li>
                    <StyledLink to='#'>All posts</StyledLink>
                  </li>
                  <li>
                    <StyledLink to='#'>Web Fundamentals</StyledLink>
                  </li>
                  <li>
                    <StyledLink to='#'>Maybe</StyledLink>
                  </li>
                </ul>
              </DropdownMenuNav>
            </li>
            <li>
              <StyledLink to='/projects'>Projects</StyledLink>
            </li>
            <li>
              <StyledLink to='/about'>About</StyledLink>
            </li>
            <li>
              <StyledLink to='/#contact'>Contact</StyledLink>
            </li>
          </NavList>
          <FlexContainer>
            <div className='hide-toggle-theme'>
              <ToggleTheme />
            </div>
            <button className='hide-menu-icon' onClick={() => setShowMobileMenu(true)}>
              <StyledIcon>
                <HiMenuAlt3 />
              </StyledIcon>
            </button>
          </FlexContainer>
        </Main>
      </Header>
    </Transition>
  )
}

export default Navbar
