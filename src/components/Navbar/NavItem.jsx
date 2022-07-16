import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ object: { path, name } }) => {
  return (
    <li className='h-16 lg:h-auto'>
      <Link className='hover:bg-nord8 dark:hover:bg-nord0 text-center w-full h-full flex items-center justify-center capitalize text-nord0 lg:hover:text-slate-500 font-black dark:text-nord5 lg:dark:hover:text-gray-400 duration-300 ease-in-out lg:bg-transparent dark:lg:bg-transparent lg:hover:bg-transparent dark:lg:hover:bg-transparent' to={path}>
        {name}
      </Link>
    </li>
  )
}

export default NavItem
