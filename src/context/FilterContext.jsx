import { createContext, useContext, useState } from 'react'
const FilterContext = createContext()
function FilterProvider (props) {
  const [filter, setFilter] = useState({
    categories: [],
    price: {
      min: 0,
      max: 0
    }
  })
  const [sortBy, setSortBy] = useState('oldest')
  const [applyFilter, setApplyFilter] = useState(null)
  const [changeFilter, setChangeFilter] = useState(null)
  const [removePrice, setRemovePrice] = useState(null)
  const [question, setQuestion] = useState('')
  const value = {
    filter,
    setFilter,
    sortBy,
    setSortBy,
    applyFilter,
    setApplyFilter,
    changeFilter,
    setChangeFilter,
    removePrice,
    setRemovePrice,
    question,
    setQuestion
  }
  return (
    <FilterContext.Provider value={value} {...props} />
  )
}

const useFilterContext = () => {
  const context = useContext(FilterContext)
  return context
}

export {
  FilterProvider,
  useFilterContext
}
