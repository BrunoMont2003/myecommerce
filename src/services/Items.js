import axios from 'axios'

const ENDPOINT =
  (import.meta.env.VITE_ECOMMERCE_API ??
  'https://ecomerce-master.herokuapp.com/api/v1') + '/item'
export const getAllItems = async () => {
  try {
    const { data: items, status } = await axios.get(ENDPOINT)
    return {
      status,
      items
    }
  } catch (error) {
    return {
      message: error.message
    }
  }
}

export const getCategories = async () => {
  const { items, status, message } = await getAllItems()
  if (status !== 200) return { message }
  const categories = []
  for (const item of items) {
    const category = item.category
    !categories.includes(category) && category && categories.push(category)
  }
  console.log(categories)
  return categories
}
