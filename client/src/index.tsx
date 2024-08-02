import React from 'react'

import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import '@mantine/core/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'
import UserProvider from './global/UserContext'

import { createRoot } from 'react-dom/client'

const theme = createTheme({
  /** Put your mantine theme override here */
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
})

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <Router>
    <MantineProvider theme={theme}>
      <UserProvider>
        <App />
      </UserProvider>
    </MantineProvider>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
