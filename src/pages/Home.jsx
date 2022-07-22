import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import Catalogue from '../components/Catalogue'
import FilterModal from '../components/FilterModal'
import { useFilterContext } from '../context/FilterContext'
import Layout from '../layouts'
import { getCategories } from '../services/Items'
const Home = () => {
  const [categories, setCategories] = useState(null)
  const { sortBy, setSortBy, filter, applyFilter, changeFilter } = useFilterContext()
  useEffect(() => {
    fetchCategories()
  }, [changeFilter])

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
      <div className='px-5 xl:w-[95%] xl:mx-auto py-5'>
        <hr className='border my-3' />
        <h2 className='text-3xl my-5'>
          Products
        </h2>
        <hr className='border my-3' />
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
        {applyFilter && (filter.categories.length > 0 || filter.price.min !== 0 || filter.price.max !== 0) &&
          <div className='filter-items my-5 flex flex-wrap gap-5'>
            {
              filter.price.min !== 0 &&
                <span className='rounded cursor-pointer py-2 px-3 bg-nord8 text-slate-600 font-bold'>
                  min: $ {filter.price.min}
                  <FontAwesomeIcon icon={faClose} className='ml-3' />
                </span>
            }
            {
              filter.price.max !== 0 &&
                <span className='rounded cursor-pointer py-2 px-3 bg-nord8 text-slate-600 font-bold'>
                  max: $ {filter.price.max}
                  <FontAwesomeIcon icon={faClose} className='ml-3' />
                </span>
            }

            {
            filter.categories.map((category, index) => (
              <span className='rounded cursor-pointer py-2 px-3 bg-nord8 text-slate-600' key={index}>{category}
                <FontAwesomeIcon icon={faClose} className='ml-3' />
              </span>
            ))
            }

          </div>}
        <Catalogue />
      </div>
    </Layout>
  )
}

export default Home
