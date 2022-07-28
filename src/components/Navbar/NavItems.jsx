import React from 'react'
import NavItem from './NavItem'

const NavItems = ({ className }) => {
  const categories = [
    // { name: 'kids', path: '/' },
    // { name: 'shoes', path: '/' },
    // { name: 'computers', path: '/' },
    // { name: 'sports', path: '/' }
  ]
  return (
    <ul className={`${className}`}>
      {
        categories.map((category, index) => (
          <NavItem key={index} object={category} />
        ))
      }
    </ul>
  )
}

export default NavItems
