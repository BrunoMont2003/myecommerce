import axios from 'axios'

const ENDPOINT =
  (import.meta.env.VITE_ECOMMERCE_API ??
    'https://ecomerce-master.herokuapp.com/api/v1') + '/item'

export const getAllItems = async () => {
  try {
    const { data: items, status } = await axios.get(ENDPOINT)
    return { items, status }
  } catch (error) {
    return {
      message: error.message
    }
  }
}
export const getOneItem = async (id) => {
  try {
    const { data: item, status } = await axios.get(`${ENDPOINT}/${id}`)
    return { item, status }
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
  return categories
}
export const createItem = async (item) => {
  try {
    const { data } = await axios.post(ENDPOINT, item, {
      headers: {
        Authorization: `JWT ${window.localStorage.getItem('token')}`
      }
    })
    return { data }
  } catch (error) {
    return {
      message: error.message
    }
  }
}
