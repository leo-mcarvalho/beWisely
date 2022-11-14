import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home'
import { Router } from './router'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter basename='/'>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
