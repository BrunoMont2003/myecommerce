export const getItems = (
  items,
  categories = [],
  sortBy = 'newest',
  question,
  page = 1,
  size = 25
) => {
  const offset = size * (page - 1)
  items = items.filter(({ isActive }) => isActive)
  items = sortItemsBy(items, sortBy)

  if (question) {
    items = searchByName(items, question).slice(offset, offset + size)
  }

  if (categories.length === 0) {
    return items.slice(offset, offset + size)
  }
  if (categories.length > 0) {
    return filterByCategories(items, categories).slice(offset, offset + size)
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
  return items.filter(({ product_name: productName }) =>
    productName.toLowerCase().includes(name)
  )
}
