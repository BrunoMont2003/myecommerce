import React from 'react'
import AuthContextProvider from './context/AuthContext'
import { FilterProvider } from './context/FilterContext'
import { ItemsProvider } from './context/ItemsContext'
import { ThemeProvider } from './context/ThemeContext'
import MyRoutes from './routes'

const App = () => {
  return (
    <AuthContextProvider>
      <ThemeProvider>
        <ItemsProvider>
          <FilterProvider>
            <MyRoutes />
          </FilterProvider>
        </ItemsProvider>
      </ThemeProvider>
    </AuthContextProvider>
  )
}

export default App
