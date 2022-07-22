import React from 'react'
import { FilterProvider } from './context/FilterContext'
import { ThemeProvider } from './context/ThemeContext'
import MyRoutes from './routes'

const App = () => {
  return (
    <ThemeProvider>
      <FilterProvider>
        <MyRoutes />
      </FilterProvider>
    </ThemeProvider>
  )
}

export default App
