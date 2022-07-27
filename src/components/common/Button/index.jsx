import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ className, to, ...props }) => {
  return (
    <>
      {
        to == null
          ? <button {...props} className={' min-w-fit px-5  py-3 rounded duration-200 ease-in-out ' + className} />
          : <Link {...props} className={' min-w-fit px-5  py-3 rounded duration-200 ease-in-out ' + className} to={to} />
      }
    </>
  )
}

export default Button
