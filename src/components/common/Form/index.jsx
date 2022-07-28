import Input from '../Input'
import Button from '../Button'
import useForm from '../../../hooks/useForm'
const Form = ({ inputs, action, errorMessage }) => {
  const sendData = (data) => {
    action(data)
  }
  const { input: values, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 my-5'>
      {inputs.map((input, index) => (
        <Input
          key={index}
          className='w-full'
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          value={values[input.name]}
          onChange={handleInputChange}
        />
      )
      )}
      {
        errorMessage && <p className='text-nord11 text-center font-bold'>{errorMessage}</p>
      }
      <Button className='bg-nord7 text-nord0 font-bold'>Log in</Button>
    </form>
  )
}

export default Form
