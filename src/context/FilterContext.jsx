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
  const [sortBy, setSortBy] = useState('newest')

  const value = {
    filter,
    setFilter,
    sortBy,
    setSortBy
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
