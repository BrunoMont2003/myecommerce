import { createContext, useState, useEffect } from 'react'
import { getUserByToken } from '../services/User'
import getPayload from '../utils/getPayload'

// #1 Crear el contexto
export const AuthContext = createContext()

// #2 Crear el Proveedor del Contexto
const AuthContextProvider = (props) => {
// Definir los estados globales
// #1 ¿El usuario inicio sesión correctamente?
  const [isAuth, setIsAuth] = useState(false)
  // #2 Información del Payload del JWT descifrado
  const [user, setUser] = useState(null)
  const [userSession, setUserSession] = useState(null)

  // Lógica que se ejecuta cuando se inicia una sesión
  const loginUser = (token) => {
    window.localStorage.setItem('token', token)
    fetchUser(token)
    const decoded = getPayload(token)
    setUserSession(decoded)
    setIsAuth(true)
  }

  // Lógica que se ejecuta cuando cierro la sesión
  const logoutUser = () => {
    window.localStorage.removeItem('token')
    setUser({})
    setIsAuth(false)
  }

  // Verificar en la carga de mi app si ya existe un token, y si es así lo cargo.
  useEffect(() => {
    const item = window.localStorage.getItem('token')
    if (item) {
      const decoded = getPayload(item)
      console.log(decoded)
      setUserSession(decoded)
      fetchUser(item)
      setIsAuth(true)
    }
  }, [])

  const fetchUser = async (token) => {
    const me = await getUserByToken(token)
    setUser(me)
  }

  return (
    <AuthContext.Provider value={{
      isAuth, user, loginUser, logoutUser, userSession
    }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
