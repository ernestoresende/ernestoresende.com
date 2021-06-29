import React, { useState, useRef } from 'react'

import { HiMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import { BiChevronDown } from 'react-icons/bi'

import { useDetectOutsideClick } from '@hooks/useDetectOutsideClick'
import ToggleTheme from '@components/common/ToggleTheme'

import * as S from './styled'

const Navbar = ({ isSticky, isHome }) => {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const onDropdownMenuClick = () => setIsActive(!isActive)

  return (
    <S.Transition>
      <S.Header isSticky={isSticky} isHome={isHome}>
        <S.MobileMenu className={showMobileMenu ? 'active-mobile-menu' : 'hidden-mobile-menu'}>
          <button className='close-menu' onClick={() => setShowMobileMenu(false)}>
            <S.StyledIcon>
              <IoMdClose />
            </S.StyledIcon>
          </button>
          <nav className='links-container'>
            <S.StyledLink to='/blog'>Blog</S.StyledLink>
            <S.StyledLink to='/work'>Work</S.StyledLink>
            <S.StyledLink to='/work#contact'>Contact</S.StyledLink>
          </nav>
          <ToggleTheme />
        </S.MobileMenu>

        <S.Main>
          <S.NameContainer to='/'>ErRe</S.NameContainer>
          <S.NavList>
            <li>
              <S.StyledDropdown onClick={onDropdownMenuClick}>
                Blog
                <BiChevronDown />
              </S.StyledDropdown>
              <S.DropdownMenuNav ref={dropdownRef} data-active={isActive}>
                <ul>
                  <li>
                    <S.StyledLink to='#'>All posts</S.StyledLink>
                  </li>
                  <li>
                    <S.StyledLink to='#'>Web Fundamentals</S.StyledLink>
                  </li>
                  <li>
                    <S.StyledLink to='#'>Maybe</S.StyledLink>
                  </li>
                </ul>
              </S.DropdownMenuNav>
            </li>
            <li>
              <S.StyledLink to='/work'>Work</S.StyledLink>
            </li>
            <li>
              <S.StyledLink to='/work#contact'>Contact</S.StyledLink>
            </li>
          </S.NavList>
          <S.FlexContainer>
            <div className='hide-toggle-theme'>
              <ToggleTheme />
            </div>
            <button className='hide-menu-icon' onClick={() => setShowMobileMenu(true)}>
              <S.StyledIcon>
                <HiMenuAlt3 />
              </S.StyledIcon>
            </button>
          </S.FlexContainer>
        </S.Main>
      </S.Header>
    </S.Transition>
  )
}

export default Navbar
