import React from 'react'

import { ThemeContext } from '../../ThemeContext'
import './ToggleTheme.scss'

const ToggleTheme = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  return (
    <input
      type='checkbox'
      checked={colorMode === 'dark'}
      onChange={ev => {
        setColorMode(ev.target.checked ? 'dark' : 'light')
      }}
    />
  )
}

export default ToggleTheme
