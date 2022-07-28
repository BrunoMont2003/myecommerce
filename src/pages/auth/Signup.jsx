import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Guest from '../../layouts/Guest'

const Signup = () => {
  const { isAuth } = useContext(AuthContext)
  if (isAuth) {
    return <Navigate to='/' replace />
  }

  return (
    <Guest>Signup</Guest>
  )
}

export default Signup
