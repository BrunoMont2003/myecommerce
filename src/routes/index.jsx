import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path='/' element={<Home />}
      />
      <Route
        path='/items/:id' element={<Product />}
      />
    </Routes>
  )
}

export default MyRoutes
