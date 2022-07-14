import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'

const SearchBar = () => {
  const [focus, setFocus] = useState(false)
  const input = useRef(null)
  const handleFocus = () => {
    input.current && input.current.focus()
    setFocus(true)
  }
  const handleBlur = (e) => {
    setFocus(false)
  }
  return (
    <>
      {
    !focus &&
      <form action='#' className='relative w-32 sm:w-48'>
        <input type='text' className='hidden lg:flex rounded-lg h-10 bg-transparent border shadow border-gray-300 px-5 focus:outline-none w-full  hover:bg-slate-200 dark:hover:bg-slate-500 ease-in-out duration-500' placeholder='Search' onFocus={handleFocus} onBlur={handleBlur} />
        <FontAwesomeIcon onClick={handleFocus} icon={faSearch} className='absolute right-0 top-1  lg:right-5 lg:top-3 text-nord3  dark:text-nord5' />
      </form>
    }

      {
        focus &&
          <div className='absolute top-0 p-5 right-0 w-full h-[6.5rem] dark:bg-nord1 bg-nord-6 flex items-center justify-center ease-in-out duration-500 '>
            <form action='#' className='relative w-full'>
              <input autoFocus onFocus={handleFocus} onBlur={handleBlur} type='text' ref={input} className=' rounded-lg h-10 bg-transparent border shadow border-gray-300 px-5 focus:outline-none w-full  hover:bg-slate-200 dark:hover:bg-slate-500 ease-in-out duration-500' placeholder='Search' />
              <FontAwesomeIcon onClick={handleFocus} icon={faSearch} className='absolute right-5 top-3 text-nord3  dark:text-nord5' />
            </form>

          </div>
    }
    </>
  )
}

export default SearchBar
