import React from 'react'
import NavItem from './NavItem'

const NavItems = () => {
  const categories = [
    { name: 'kids', path: '/' },
    { name: 'shoes', path: '/' },
    { name: 'computers', path: '/' },
    { name: 'sports', path: '/' }
  ]
  return (
    <ul className='gap-5 hidden lg:flex'>
      {
        categories.map((category, index) => (
          <NavItem key={index} object={category} />
        ))
      }
    </ul>
  )
}

export default NavItems
