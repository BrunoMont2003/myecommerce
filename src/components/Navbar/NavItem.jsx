import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ object: { path, name } }) => {
  return (
    <li>
      <Link className='capitalize text-nord0 hover:text-slate-500 font-black dark:text-nord5 dark:hover:text-gray-400 duration-300 ease-in-out' to={path}>
        {name}
      </Link>
    </li>
  )
}

export default NavItem
