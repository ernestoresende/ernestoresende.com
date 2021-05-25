import React, { useContext } from 'react'
import { GlobalContext } from '@styles/globalContext'

import Sun from '@assets/icons/Sun'
import Moon from '@assets/icons/Moon'

import * as S from './styled'

const ToggleTheme = () => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext)

  return (
    <S.ToggleContainer>
      <S.ToggleLabel>
        <button
          tabIndex='0'
          title='Change between Light/Dark Mode'
          className='toggle-icon'
          onClick={() => {
            themeSwitchHandler(theme === 'light' ? 'dark' : 'light')
          }}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </S.ToggleLabel>
    </S.ToggleContainer>
  )
}

export default ToggleTheme
