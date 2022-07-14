import axios from 'axios'

const ENDPOINT = import.meta.env.VITE_ENDPOINT + '/item'
export const getAllItems = async () => {
  try {
    const { data: items, status } = await axios.get(ENDPOINT)
    return {
      status,
      items
    }
  } catch (error) {
    return {
      status: error.response.status,
      message: error.message
    }
  }
}
