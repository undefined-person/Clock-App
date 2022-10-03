import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './App'

import { BaseTheme, FontStyles, theme } from 'core/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <BaseTheme />
    <FontStyles />
    <App />
  </ThemeProvider>
)
