
const Input = (props) => {
  return (
    <input {...props} className={props.className + ' block rounded bg-transparent dark:border-nord6 focus:ring-nord8 focus:outline-none focus:border-2 focus:border-nord8 placeholder:text-nord2 dark:placeholder:text-nord4'} />
  )
}

export default Input
