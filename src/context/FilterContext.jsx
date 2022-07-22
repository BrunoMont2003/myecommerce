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
  const [applyFilter, setApplyFilter] = useState(null)
  const [changeFilter, setChangeFilter] = useState(null)

  const value = {
    filter,
    setFilter,
    sortBy,
    setSortBy,
    applyFilter,
    setApplyFilter,
    changeFilter,
    setChangeFilter
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