import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import { useFilterContext } from '../../../context/FilterContext'
import { useItemsContext } from '../../../context/ItemsContext'
import { searchByName } from '../../../helpers/items'
const SearchBar = () => {
  const [focus, setFocus] = useState(false)
  const { setItems, allItems } = useItemsContext()
  const { setQuestion } = useFilterContext()
  const input = useRef(null)
  const handleFocus = () => {
    input.current && input.current.focus()
    setFocus(true)
  }
  const handleBlur = (e) => {
    setFocus(false)
    setItems(allItems)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const items = searchByName(allItems, input.current.value)
    setQuestion(input.current.value)
    setItems(items)
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
          <div className='bg-nord4 absolute top-0 p-5 right-0 w-full h-[6.5rem] dark:bg-nord1 bg-nord-6 flex items-center justify-center ease-in-out duration-500 '>
            <form action='#' className='w-full flex gap-5 items-center'>
              <input autoFocus onFocus={handleFocus} type='text' ref={input} className=' rounded h-10 bg-transparent border  border-nord2 px-5 focus:outline-none w-full  hover:bg-slate-200 dark:bg-nord2 border-transparent dark:hover:placeholder:text-slate-50 dark:focus:placeholder:text-slate-100 focus:border-transparent focus:ring-nord3 focus:ring-offset-transparent' placeholder='Search' />
              <button onClick={(e) => handleSearch(e)} className='bg-nord3 text-nord6 dark:bg-nord8 dark:text-nord0 h-[40px] px-5 rounded '>Search</button>
              <button onClick={() => handleBlur()} type='button' className=' '>
                <FontAwesomeIcon icon={faClose} />
              </button>
            </form>

          </div>
    }
    </>
  )
}

export default SearchBar
