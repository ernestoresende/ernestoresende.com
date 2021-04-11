import React from 'react'
import { minify } from 'terser'

import { COLOR_MODE_KEY, COLORS, INITIAL_COLOR_MODE_CSS_PROP } from './src/styles/variables'

import App from './src/components/App'

function setColorsByTheme() {
  const colors = 'setColor'
  const colorModeKey = 'setColorModeKey'
  const colorModeCssProp = 'setColorMode'

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const prefersDarkFromMQ = mql.matches
  const persistedPreference = localStorage.getItem(colorModeKey)

  let colorMode = 'light'

  const hasUsedToggle = typeof persistedPreference === 'string'

  if (hasUsedToggle) {
    colorMode = persistedPreference
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light'
  }

  let root = document.documentElement

  root.style.setProperty(colorModeCssProp, colorMode)

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`

    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP)

  let calledFunction = `(${boundFn})()`

  calledFunction = minify(calledFunction).code

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

const FallbackStyles = () => {
  const cssVariableString = Object.entries(COLORS).reduce((acc, [name, colorByTheme]) => {
    return `${acc}\n--color-${name}: ${colorByTheme.light};`
  }, '')

  const wrappedInSelector = `html { ${cssVariableString} }`

  return <style>{wrappedInSelector}</style>
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles />)
  setPreBodyComponents(<MagicScriptTag />)
}

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>
}
