import React from 'react'
import styled from 'styled-components'

const Path = styled.svg`
  position: relative;
`

const Moon = () => (
  <Path
    preserveAspectRatio='none'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
  >
    <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
  </Path>
)

export default Moon
