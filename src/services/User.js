import axios from 'axios'

const ENDPOINT =
  import.meta.env.VITE_ECOMMERCE_API ??
  'https://ecomerce-master.herokuapp.com/api/v1'

export const login = async (data) => {
  const url = `${ENDPOINT}/login`
  try {
    const response = await axios.post(url, data)
    if (response.status === 200) {
      return {
        data: response.data
      }
    }
  } catch (error) {
    return {
      message: error.response.data.message
    }
  }
}
