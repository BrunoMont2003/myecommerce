export const getItems = (
  items,
  categories = [],
  sortBy = 'newest',
  size = 50,
  offset = 0
) => {
  items = items.filter(({ isActive }) => isActive)
  items = sortItemsBy(items, sortBy)

  if (categories.length === 0) {
    return items
  }
  if (categories.length > 0) {
    return filterByCategories(items, categories)
  }
}

const filterByCategories = (items, categories = []) => {
  console.log(categories)
  const filteredItems = items.filter(({ category }) =>
    categories.includes(category)
  )
  return filteredItems
}
const sortItemsBy = (items, sortBy = 'oldest') => {
  if (sortBy === 'newest') {
    return items.sort((a, b) => b.createdAt - a.createdAt)
  }
  if (sortBy === 'oldest') {
    return items.sort((a, b) => a.createdAt - b.createdAt)
  }
  if (sortBy === 'lowest price') {
    return items.sort((a, b) => a.price - b.price)
  }
  if (sortBy === 'highest price') {
    return items.sort((a, b) => b.price - a.price)
  }
}

export const searchByName = (items, name) => {
  name = name.toLowerCase()
  return items.filter(
    ({ product_name: productName, isActive }) =>
      productName.toLowerCase().includes(name) && isActive
  )
}
