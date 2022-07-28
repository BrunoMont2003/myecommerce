import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useItemsContext } from '../../context/ItemsContext'

const Logout = () => {
  const { logoutUser } = useContext(AuthContext)
  const navigate = useNavigate(AuthContext)
  const { lastLocation } = useItemsContext()

  useEffect(() => {
    logoutUser()
    lastLocation ? navigate(lastLocation) : navigate('/')
  }, [])
  return <></>
}

export default Logout
