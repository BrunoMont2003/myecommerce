import React from 'react'

const Button = ({ className, ...props }) => {
  return (
    <button {...props} className={' min-w-fit px-5  py-3 rounded duration-200 ease-in-out ' + className} />
  )
}

export default Button
