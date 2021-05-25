import React, { useState } from 'react'

export const GlobalContext = React.createContext({
  currentTheme: '',
  themeSwitchHandler: () => {},
})

const GlobalContextProvider = props => {
  const [currentTheme, setCurrentTheme] = useState('dark')

  const themeSwitchHandler = themeType => {
    setCurrentTheme(themeType)
  }

  return (
    <GlobalContext.Provider
      value={{
        theme: currentTheme,
        themeSwitchHandler: themeSwitchHandler,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
