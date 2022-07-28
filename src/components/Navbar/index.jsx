import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from '../common/Logo'
import './style.css'
import { useState } from 'react'
import HiddenPanel from './HiddenPanel'
import DarkModeToggle from '../DarkModeToggle'
import NavItems from './NavItems'
import SearchBar from '../common/SearchBar'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
  const [panelVisibility, setPanelVisibility] = useState(false)
  const togglePanelVisibility = () => {
    setPanelVisibility(!panelVisibility)
  }
  return (
    <>
      <nav className='fixed z-10 w-full py-7 flex items-center px-5 bg-nord4 dark:bg-nord1 dark:text-white justify-between'>
        <Link to='/'>
          <Logo />
        </Link>
        <NavItems className='gap-5 hidden lg:flex' />
        <div className='flex lg:items-center gap-5 text-nord2 dark:text-nord5'>
          <SearchBar />
          <Link to='#'>
            <FontAwesomeIcon icon={faCartShopping} className='text-lg' />
          </Link>
          <Link to='#' className='hidden lg:block'>
            <FontAwesomeIcon icon={faUser} className='text-lg' />
          </Link>
          <DarkModeToggle className='hidden lg:block' />

          <FontAwesomeIcon icon={faBars} className='block lg:hidden text-lg cursor-pointer' onClick={togglePanelVisibility} />
        </div>
      </nav>
      <HiddenPanel open={panelVisibility} toggle={togglePanelVisibility} />
    </>
  )
}

export default Navbar
