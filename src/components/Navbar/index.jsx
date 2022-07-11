import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from '../common/Logo'
import DarkModeToggle from '../DarkModeToggle'
import './style.css'

const Navbar = () => {
  return (
    <>
      <nav className='w-full p-7 flex items-center px-5 bg-nord4 dark:bg-nord1 dark:text-white justify-between'>
        <Link to='/'>
          <Logo />
        </Link>
        <div className='flex items-center gap-5 text-nord2 dark:text-nord5'>
          <form action='#' className='relative'>
            <input type='text' className='rounded-lg h-10 bg-transparent border shadow border-gray-300 px-5 focus:outline-none' placeholder='Search' />
            <FontAwesomeIcon icon={faSearch} className='absolute right-5 top-3 text-nord12' />
          </form>
          <Link to='#'>
            <FontAwesomeIcon icon={faCartShopping} className='text-lg' />
          </Link>
          <Link to='#'>
            <FontAwesomeIcon icon={faBars} className='text-lg' />
          </Link>
        </div>
      </nav>
      <DarkModeToggle />
    </>
  )
}

export default Navbar
