import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Home from '../pages/Home'
import Product from '../pages/Products'
import Login from '../pages/auth/Login'
import Logout from '../pages/auth/Logout'
import Signup from '../pages/auth/Signup'
import Protected from '../hoc/Protected'
import CreateProduct from '../pages/Products/create'

const MyRoutes = () => {
  const { isAuth, user } = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route
        path='/' element={<Home />}
      />
      <Route
        path='/items/:id' element={<Product />}
      />
      <Route
        path='/items/create'
        element={
          <Protected isAdmin={isAuth && user && (user.role === 'ADMIN')}>
            <CreateProduct />
          </Protected>
      }
      />

      <Route path='/logout' element={<Logout />} />
    </Routes>
  )
}

export default MyRoutes
