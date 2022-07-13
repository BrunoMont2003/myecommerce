import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import MyRoutes from './routes'

const App = () => {
  return (
    <ThemeProvider>
      <MyRoutes />
    </ThemeProvider>
  )
}

export default App
