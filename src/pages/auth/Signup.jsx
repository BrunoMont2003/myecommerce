import { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Form from '../../components/common/Form'
import LogoIcon from '../../components/common/Logo/icon'
import { AuthContext } from '../../context/AuthContext'
import Guest from '../../layouts/Guest'
import { signup } from '../../services/User'

const inputs = [
  {
    type: 'text',
    label: 'First Name',
    name: 'first_name',
    placeholder: 'Enter your first name'
  },
  {
    type: 'text',
    label: 'Last Name',
    name: 'last_name',
    placeholder: 'Enter your last name'
  },
  {
    type: 'date',
    label: 'Birthdate',
    name: 'birth_date',
    placeholder: 'Enter your birthdate'
  },
  {
    type: 'select',
    label: 'Gender',
    name: 'gender',
    options: [
      {
        value: 'M',
        label: 'Male'
      },
      {
        value: 'F',
        label: 'Female'
      }
    ]
  },
  {
    type: 'select',
    label: 'Role',
    name: 'role',
    options: [
      {
        value: 'ADMIN',
        label: 'Admin'
      },
      {
        value: 'CUSTOMER',
        label: 'Customer'
      }
    ]
  },
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
  },
  {
    type: 'password',
    label: 'Confirm your password',
    name: 'password_confirmation',
    placeholder: 'Repeat your password'
  }
]
const initialValues = {
  first_name: '',
  last_name: '',
  birth_date: '',
  gender: '',
  role: 'CUSTOMER',
  email: '',
  password: '',
  password_confirmation: ''
}
const Signup = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const { isAuth } = useContext(AuthContext)
  const handleSignUp = async (data) => {
    if (data.password !== data.password_confirmation) return setError('Passwords do not match')
    delete data.password_confirmation
    const { message } = await signup(data)
    if (message) {
      setError(message)
      data.password_confirmation = data.password
      return
    }
    navigate('/login')
    setError(null)
  }

  if (isAuth) {
    return <Navigate to='/' replace />
  }

  return (
    <Guest>
      <div className='flex flex-col justify-center items-center'>
        <LogoIcon className='text-5xl mb-8' />
        <h1 className='text-2xl font-light'>Welcome to Digital Mountain</h1>
      </div>
      <div className='pt-10 min-w-full sm:min-w-[500px]'>
        <p className='text-center'>Enter your personal information</p>
        <Form inputs={inputs} action={async (data) => { handleSignUp(data) }} errorMessage={error} buttonText='Sign up' initialValues={initialValues} />
        <p className='pt-10 text-center'>Do you already have an account?
          <Link to='/login' className='text-nord0 dark:text-nord6 font-bold'> Log in</Link>
        </p>
      </div>
    </Guest>
  )
}

export default Signup
