import React from 'react'

import GlobalContextProvider from '../styles/globalContext'

function App({ children }) {
  return <GlobalContextProvider>{children}</GlobalContextProvider>
}

export default App
