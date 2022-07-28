import LogoIcon from '../../components/common/Logo/icon'
import Form from '../../components/common/Form'
import DarkModeToggle from '../../components/DarkModeToggle'
import Guest from '../../layouts/Guest'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { login } from '../../services/User'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useItemsContext } from '../../context/ItemsContext'

const inputs = [
  {
    type: 'email',
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email'
  },
  {
    type: 'password',
    label: 'Password',
    name: 'password',
    placeholder: 'Enter your password'
  }
]
const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const { loginUser, isAuth } = useContext(AuthContext)
  const { lastLocation } = useItemsContext()
  const handleLogin = async (data) => {
    const { data: result, message } = await login(data)
    if (message) {
      setError(message)
      return
    }
    loginUser(result.token)
    lastLocation ? navigate(lastLocation) : navigate('/')
    setError(null)
  }
  if (isAuth) {
    return <Navigate to='/' replace />
  }
  return (
    <Guest>
      <div className='flex flex-col justify-center items-center'>
        <LogoIcon className='text-5xl mb-8' />
        <h1 className='text-2xl font-light'>Log in to Digital Mountain</h1>
      </div>
      <div className='pt-10 min-w-full sm:min-w-[500px]'>
        <p className='text-center'>Enter your email address and password</p>
        <Form
          inputs={inputs} action={async (data) => { handleLogin(data) }} errorMessage={error} buttonText='Log in' initialValues={
          {
            email: '',
            password: ''
          }
        }
        />
        <p className='pt-10 text-center'>Don't have an account yet ?
          <Link to='/signup' className='text-nord0 dark:text-nord6 font-bold'> Sign up</Link>
        </p>
      </div>
      <DarkModeToggle />

    </Guest>
  )
}

export default Login
