import Input from '../Input'
import Button from '../Button'
import useForm from '../../../hooks/useForm'
const Form = ({ inputs, action, errorMessage, buttonText, initialValues }) => {
  const sendData = (data) => {
    action(data)
  }
  const { input: values, handleInputChange, handleSubmit } = useForm(sendData, initialValues)
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 my-5'>
      {inputs.map((input, index) => (
        <div
          className='flex flex-col gap-1'
          key={index}
        >
          <label htmlFor={input.name} className='mb-3'>{input.label}</label>
          {
            input.type === 'select'
              ? (
                <select
                  className='block rounded bg-transparent dark:border-nord6 focus:ring-nord8 focus:outline-none border   focus:border-nord8 placeholder:text-nord2 dark:placeholder:text-nord4'
                  name={input.name}
                  id={input.name}
                  placeholder={input.placeholder}
                  value={values[input.name]}
                  onChange={handleInputChange}
                >
                  <option disabled value=''>Choose</option>
                  {
                    input.options.map((option, index) => (
                      <option key={index} value={option.value}>{option.label}</option>
                    ))
                  }
                </select>
                )
              : <Input
                  className='w-full'
                  type={input.type}
                  name={input.name}
                  id={input.name}
                  placeholder={input.placeholder}
                  value={values[input.name]}
                  onChange={handleInputChange}
                  required
                />
          }
        </div>
      )
      )}
      {
        errorMessage && <p className='text-nord11 text-center font-bold'>{errorMessage}</p>
      }
      <Button className='bg-nord7 text-nord0 font-bold mt-5'>{buttonText ?? 'Save'}</Button>
    </form>
  )
}

export default Form
