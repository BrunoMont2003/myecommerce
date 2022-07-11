import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useDarkMode from '../../hooks/useDarkMode'

const DarkModeToggle = () => {
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <button onClick={() => setTheme(colorTheme)} type='button' className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'>
      {
            colorTheme === 'light'
              ? <FontAwesomeIcon icon={faMoon} className='w-5 h-5' />
              : <FontAwesomeIcon icon={faSun} className='w-5 h-5' />
        }

    </button>

  )
}

export default DarkModeToggle
