import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from '../common/Logo'
import './style.css'
import { useState } from 'react'
import HiddenPanel from './HiddenPanel'
import DarkModeToggle from '../DarkModeToggle'
import NavItems from './NavItems'

const Navbar = () => {
  const [panelVisibility, setPanelVisibility] = useState(false)
  const togglePanelVisibility = () => {
    setPanelVisibility(!panelVisibility)
  }
  return (
    <>
      <nav className='w-full p-7 flex items-center px-5 bg-nord4 dark:bg-nord1 dark:text-white justify-between'>
        <Link to='/'>
          <Logo />
        </Link>
        <NavItems />
        <div className='flex items-center gap-5 text-nord2 dark:text-nord5'>
          <form action='#' className='relative'>
            <input type='text' className='rounded-lg h-10 bg-transparent border shadow border-gray-300 px-5 focus:outline-none w-32 sm:w-48' placeholder='Search' />
            <FontAwesomeIcon icon={faSearch} className='absolute right-5 top-3 text-nord9  dark:text-nord9' />
          </form>
          <Link to='#'>
            <FontAwesomeIcon icon={faCartShopping} className='text-lg' />
          </Link>
          <FontAwesomeIcon icon={faBars} className='block lg:hidden text-lg cursor-pointer' onClick={togglePanelVisibility} />
        </div>
      </nav>
      <HiddenPanel open={panelVisibility} toggle={togglePanelVisibility} />
      <DarkModeToggle />
    </>
  )
}

export default Navbar
