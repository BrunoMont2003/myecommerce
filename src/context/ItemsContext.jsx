import { createContext, useContext, useState } from 'react'
const ItemsContext = createContext()
function ItemsProvider (props) {
  const [items, setItems] = useState([])
  const [allItems, setAllItems] = useState([])
  const [categories, setCategories] = useState([])
  const [lastLocation, setLastLocation] = useState(null)
  const value = {
    items,
    setItems,
    allItems,
    setAllItems,
    categories,
    setCategories,
    lastLocation,
    setLastLocation
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
