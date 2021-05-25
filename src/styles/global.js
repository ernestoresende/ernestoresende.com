import React, { useContext } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import FontFaces from './typography'
import { GlobalContext } from './globalContext'
import * as V from './variables'

const StyledGlobalStyles = createGlobalStyle`
  ${FontFaces};

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  button {
    background: none;
    border: 0;
    padding: 0;
  }
  img {
    display: block;
  	height: auto;
  	max-width: 100%;
  }
  svg {
    fill: currentColor;
  }
  .small,
  small {
    font-size: .8em;
  }
  b, strong {
    font-weight: 600;
  }
  i, em {
    font-style: italic;
  }
  input[type="search"] {
    -webkit-appearance: textfield;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  html {
    --primaryBackground: ${props => props.theme.primaryBackground};
    --secondaryBackground: ${props => props.theme.secondaryBackground};
    --primaryBackgroundTransparent: ${props => props.theme.primaryBackgroundTransparent};
    --secondaryBackgroundTransparent: ${props => props.theme.secondaryBackgroundTransparent};
    --primaryText: ${props => props.theme.primaryText};
    --secondaryText: ${props => props.theme.secondaryText};

    --fontFace-Milliard: ${V.FontFaces.Milliard};
    --fontFace-Lora: ${V.FontFaces.Lora};

    --space-xxs: ${V.Space.xxs};
    --space-xs: ${V.Space.xs};
    --space-sm: ${V.Space.sm};
    --space-default: ${V.Space.default};
    --space-md: ${V.Space.md};
    --space-lg: ${V.Space.lg};
    --space-xlg: ${V.Space.xlg};
    --space-xxlg: ${V.Space.xxlg};

    --boxShadow-default: ${props => props.theme.boxShadow};

    background: var(--primaryBackground);
    font-size: 10px;
    -moz-osx-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none;
      transition: none;
    }
  }
`

const GlobalStyle = ({ children }) => {
  const lightTheme = V.colorScheme.lightTheme
  const darkTheme = V.colorScheme.darkTheme

  const currentTheme = useContext(GlobalContext)

  let theme

  switch (currentTheme.theme) {
    case 'dark':
      theme = darkTheme
      break
    case 'light':
      theme = lightTheme
      break
    default:
      theme = lightTheme
  }

  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <StyledGlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default GlobalStyle
