import { css } from 'styled-components'

import MilliardRegularWOFF from '../fonts/Milliard/woff/MilliardRegular.woff'
import MilliardMediumWOFF from '../fonts/Milliard/woff/MilliardMedium.woff'
import MilliardBoldWOFF from '../fonts/Milliard/woff/MilliardBold.woff'
import MilliardRegularWOFF2 from '../fonts/Milliard/woff2/MilliardRegular.woff2'
import MilliardMediumWOFF2 from '../fonts/Milliard/woff2/MilliardMedium.woff2'
import MilliardBoldWOFF2 from '../fonts/Milliard/woff2/MilliardBold.woff2'

import LoraRegularWOFF from '../fonts/Lora/woff/LoraRegular.woff'
import LoraSemiBoldWOFF from '../fonts/Lora/woff/LoraSemiBold.woff'
import LoraBoldWOFF from '../fonts/Lora/woff/LoraBold.woff'
import LoraRegularWOFF2 from '../fonts/Lora/woff2/LoraRegular.woff2'
import LoraSemiBoldWOFF2 from '../fonts/Lora/woff2/LoraSemiBold.woff2'
import LoraBoldWOFF2 from '../fonts/Lora/woff2/LoraBold.woff2'

const FontFaces = css`
  @font-face {
    font-family: 'Milliard';
    src: url(${MilliardRegularWOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Milliard';
    src: url(${MilliardMediumWOFF}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Milliard';
    src: url(${MilliardBoldWOFF}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Milliard';
    src: url(${MilliardRegularWOFF2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Milliard';
    src: url(${MilliardMediumWOFF2}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Milliard';
    src: url(${MilliardBoldWOFF2}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Lora';
    src: url(${LoraRegularWOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Lora';
    src: url(${LoraSemiBoldWOFF}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Lora';
    src: url(${LoraBoldWOFF}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Lora';
    src: url(${LoraRegularWOFF2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Lora';
    src: url(${LoraSemiBoldWOFF2}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Lora';
    src: url(${LoraBoldWOFF2}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }
`

export default FontFaces
