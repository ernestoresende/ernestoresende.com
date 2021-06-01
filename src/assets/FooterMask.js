import React from 'react'
import styled from 'styled-components'

const Path = styled.svg`
  position: relative;
  left: -3%;
  right: -3%;
  width: 106%;
  bottom: 0%;
  min-width: 600px;
`

const FooterMask = () => (
  <Path
    preserveAspectRatio='none'
    width='1440'
    height='46'
    viewBox='0 0 1440 46'
    fill='none'
    xmlns='http://www.w3.org/2000/Path'
  >
    <path
      d='M348.592 45.9459C191.1 45.9459 -1 20.9753 -1 20.9753V0H1440V12.9847C1440 12.9847 1235.51 44.5192 1103.45 45.9459C955.009 47.5496 900.816 12.9847 724.766 12.9847C548.717 12.9847 506.084 45.9459 348.592 45.9459Z'
      fill='var(--primaryBackground)'
    />
  </Path>
)

export default FooterMask
