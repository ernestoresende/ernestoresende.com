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

const HeroMask = () => (
  <Path
    preserveAspectRatio='none'
    width='1440'
    height='46'
    viewBox='0 0 1440 46'
    fill='none'
    xmlns='http://www.w3.org/2000/Path'
  >
    <path
      d='M348.592 0.054126C191.1 0.054126 -1 25.0247 -1 25.0247V46H1440V33.0153C1440 33.0153 1235.51 1.48082 1103.45 0.054126C955.009 -1.54955 900.816 33.0153 724.766 33.0153C548.717 33.0153 506.084 0.054126 348.592 0.054126Z'
      fill='var(--color-primaryBackground)'
    />
  </Path>
)

export default HeroMask
