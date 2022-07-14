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
        <div className='flex lg:items-center gap-5 text-nord2 dark:text-nord5'>
          <SearchBar />
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
