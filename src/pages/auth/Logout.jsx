import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const { logoutUser } = useContext(AuthContext)
  const navigate = useNavigate(AuthContext)

  useEffect(() => {
    logoutUser()
    navigate('/')
  }, [])
  return <></>
}

export default Logout
