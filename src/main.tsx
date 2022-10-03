import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from './App'

import { BaseTheme, FontStyles, theme } from 'core/theme'
import { setupStore } from './core/store/store'
const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BaseTheme />
      <FontStyles />
      <App />
    </ThemeProvider>
  </Provider>
)
