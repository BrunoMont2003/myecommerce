import { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import Catalogue from '../components/Catalogue'
import Spinner from '../components/common/Spinner'
import FilterModal from '../components/FilterModal'
import { useFilterContext } from '../context/FilterContext'
import Layout from '../layouts'
import { getCategories } from '../services/Items'
const Home = () => {
  const [categories, setCategories] = useState(null)
  const { sortBy, setSortBy } = useFilterContext()
  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const result = await getCategories()
    setCategories(result)
  }
  const handleChangeSort = ({ target: { value } }) => {
    console.log(value)
    setSortBy(value)
  }

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
            <select value={sortBy} onChange={(e) => handleChangeSort(e)} className='bg-transparent border-0 focus:outline-none focus:ring-transparent font-bold'>
              <option value='newest'>newest</option>
              <option value='lowest price'>lowest price</option>
              <option value='highest price'>highest price</option>
            </select>
          </div>
        </div>
        <Catalogue />
      </div>
    </Layout>
  )
}

export default Home
