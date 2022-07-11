import { Route, Routes } from 'react-router-dom'

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path='/' element={<h1>hoola mundo</h1>}
      />
    </Routes>
  )
}

export default MyRoutes
