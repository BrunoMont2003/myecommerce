/*
High Order Component (HOC)
Es un patrón de diseño pensado en la reutilización de componentes.
Consiste en crear una función que recibe como parametro un componente
y retorna un nuevo componente modificado.
Permite inyectar lógica, al componente original.
*/

import { Navigate } from 'react-router-dom'

const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to='/login' replace />
  }
  return children
}

export default Protected
