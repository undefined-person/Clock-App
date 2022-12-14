import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { theme } from './theme.styles'

export const BaseTheme = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  body, html {
    height: 100%;
  }
  
  body {
    position: fixed;
    width: 100%;
    font-family: 'Inter', sans-serif;
    color: ${theme.colors.white};
    background-color: ${theme.colors.white};
    overflow: hidden;
  }
`
