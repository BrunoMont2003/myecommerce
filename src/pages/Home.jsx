import { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import FilterModal from '../components/FilterModal'
import Layout from '../layouts'
import { getCategories } from '../services/Items'
const Home = () => {
  const [categories, setCategories] = useState(null)
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getCategories()
      setCategories(result)
    }
    fetchCategories()
  }, [])

  return (
    <Layout>
      <Carousel />
      <div className='px-5'>

        <h2 className='text-3xl mb-5'>
          Products
        </h2>
        <div className='flex justify-between'>
          <FilterModal categories={categories} />
          <div className='flex gap-2 justify-end items-center'>
            <span>Sort by</span>
            <select id='' className='bg-transparent border-0 focus:outline-none focus:ring-transparent font-bold'>
              <option value='newest'>newest</option>
              <option value='lowest price'>lowest price</option>
              <option value='highest price'>highest price</option>
            </select>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
