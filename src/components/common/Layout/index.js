import React from 'react'
import './Layout.scss'

import '../../../styles/global.scss'

const Layout = ({ children }) => {
  return (
    <div className='main'>
      <div className='header__wrapper'>
        <p>This will be the header</p>
      </div>
      <div className='content__wrapper'>{children}</div>
      <div className='footer__wrapper'>
        <p>This will be the footer</p>
      </div>
    </div>
  )
}

export default Layout
