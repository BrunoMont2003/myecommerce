import { createContext, useContext } from 'react'
import useDarkMode from '../hooks/useDarkMode'
const ThemeContext = createContext()
function ThemeProvider (props) {
  const [colorTheme, setTheme] = useDarkMode()

  const value = {
    colorTheme,
    setTheme
  }
  return (
    <ThemeContext.Provider value={value} {...props} />
  )
}

const useThemeContext = () => {
  const context = useContext(ThemeContext)
  return context
}

export {
  ThemeProvider,
  useThemeContext
}
