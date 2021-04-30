import React, { useContext } from 'react'
import styled from 'styled-components'

import { ThemeContext } from '../ThemeContext'
import media from '../../styles/media'

import Sun from '../../assets/icons/Sun'
import Moon from '../../assets/icons/Moon'

const ToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  ${media.tablet`
    display: block;
    justify-content: unset;
    width: fit-content;
  `};
`
const ToggleLabel = styled.div`
  display: block;

  .toggle-checkbox {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  .toggle-icon {
    color: var(--color-primaryText);
    cursor: pointer;
  }
`

const ToggleTheme = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext)

  return (
    <ToggleContainer>
      <ToggleLabel>
        <button
          tabIndex='0'
          title='Change between Light/Dark Mode'
          className='toggle-icon'
          onClick={() => {
            colorMode === undefined || colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
          }}
        >
          {colorMode === 'dark' ? <Sun /> : <Moon />}
        </button>
      </ToggleLabel>
    </ToggleContainer>
  )
}

export default ToggleTheme
