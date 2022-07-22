import React from 'react'
import { FilterProvider } from './context/FilterContext'
import { ItemsProvider } from './context/ItemsContext'
import { ThemeProvider } from './context/ThemeContext'
import MyRoutes from './routes'

const App = () => {
  return (
    <ThemeProvider>
      <ItemsProvider>
        <FilterProvider>
          <MyRoutes />
        </FilterProvider>
      </ItemsProvider>
    </ThemeProvider>
  )
}

export default App
