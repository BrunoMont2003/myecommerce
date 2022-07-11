import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path='/' element={<Home />}
      />
    </Routes>
  )
}

export default MyRoutes
