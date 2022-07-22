import { createContext, useContext, useState } from 'react'
const ItemsContext = createContext()
function ItemsProvider (props) {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const value = {
    items,
    setItems,
    categories,
    setCategories
  }
  return (
    <ItemsContext.Provider value={value} {...props} />
  )
}

const useItemsContext = () => {
  const context = useContext(ItemsContext)
  return context
}

export {
  ItemsProvider,
  useItemsContext
}
