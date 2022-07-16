import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useThemeContext } from '../../context/ThemeContext'

const DarkModeToggle = ({ className }) => {
  const { colorTheme, setTheme } = useThemeContext()

  return (
    <button onClick={() => setTheme(colorTheme)} type='button' className={'text-nord3 dark:text-nord5 hover:text-nord9  focus:outline-none focus:ring-4   rounded-lg text-sm p-2.5 ' + className}>
      {
            colorTheme === 'light'
              ? <FontAwesomeIcon icon={faMoon} className='w-5 h-5' />
              : <FontAwesomeIcon icon={faSun} className='w-5 h-5' />
        }

    </button>

  )
}

export default DarkModeToggle
