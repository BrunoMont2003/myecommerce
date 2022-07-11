import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faClose, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from '../common/Logo'
import DarkModeToggle from '../DarkModeToggle'
import './style.css'
import { useState } from 'react'
const HiddenPanel = ({ open = true, toggle }) => {
  return (
    <div className={`min-h-screen w-full z-10  absolute top-0 transition-all duration-200 ease-in  ${open ? '-left-0' : '-left-full'} bg-nord4 dark:bg-nord1 px-5 py-7`}>
      <div className='flex items-center justify-between'>
        <Logo />
        <FontAwesomeIcon icon={faClose} className='text-xl cursor-pointer text-nord2 dark:text-nord5' onClick={toggle} />
      </div>
    </div>
  )
}

const Navbar = () => {
  const [panelVisibility, setPanelVisibility] = useState(true)
  const togglePanelVisibility = () => {
    setPanelVisibility(!panelVisibility)
  }
  return (
    <>
      <nav className='w-full p-7 flex items-center px-5 bg-nord4 dark:bg-nord1 dark:text-white justify-between'>
        <Link to='/'>
          <Logo />
        </Link>
        <div className='flex items-center gap-5 text-nord2 dark:text-nord5'>
          <form action='#' className='relative'>
            <input type='text' className='rounded-lg h-10 bg-transparent border shadow border-gray-300 px-5 focus:outline-none' placeholder='Search' />
            <FontAwesomeIcon icon={faSearch} className='absolute right-5 top-3 text-nord9  dark:text-nord9' />
          </form>
          <Link to='#'>
            <FontAwesomeIcon icon={faCartShopping} className='text-lg' />
          </Link>
          <FontAwesomeIcon icon={faBars} className='text-lg cursor-pointer' onClick={togglePanelVisibility} />
        </div>
      </nav>
      <DarkModeToggle />
      <HiddenPanel open={panelVisibility} toggle={togglePanelVisibility} />
    </>
  )
}

export default Navbar
