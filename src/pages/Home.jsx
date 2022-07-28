import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import Catalogue from '../components/Catalogue'
import Spinner from '../components/common/Spinner'
import FilterModal from '../components/FilterModal'
import { useFilterContext } from '../context/FilterContext'
import { useItemsContext } from '../context/ItemsContext'
import { getItems } from '../helpers/items'
import Layout from '../layouts'
import { getCategories, getAllItems } from '../services/Items'
import { removeItem } from '../utils/Array'
const Home = () => {
  const { categories, setCategories } = useItemsContext()
  const { items, setItems, allItems, setAllItems } = useItemsContext()
  const { sortBy, setSortBy, filter, setFilter, setChangeFilter, changeFilter, applyFilter, setRemovePrice, question, setQuestion } = useFilterContext()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    allItems.length === 0 && fetchAllItems()
    categories.length === 0 && fetchCategories()
    allItems.length !== 0 && fetchItems(filter.categories, sortBy)
  }, [applyFilter, sortBy, changeFilter])

  const fetchCategories = async () => {
    const result = await getCategories()
    setCategories(result)
  }
  const fetchItems = (categories, sortBy) => {
    setLoading(true)
    const result = getItems(allItems, categories, sortBy, question)
    console.log(result)
    setItems(result)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }
  const fetchAllItems = async () => {
    setLoading(true)
    const { items: result } = await getAllItems()
    setAllItems(result)
    setItems(result)
    setLoading(false)
  }
  const handleChangeSort = ({ target: { value } }) => {
    setSortBy(value)
  }
  const handleDeleteCategory = ({ target: { textContent: category } }) => {
    removeItem(filter.categories, category)
    setFilter({ ...filter })
    setChangeFilter(!changeFilter)
  }
  const handleDeletePrice = ({ target: { textContent: name } }) => {
    name = name.split(':')[0].trim()
    setFilter({
      ...filter,
      price: {
        ...filter.price, [name]: 0
      }
    })
    setRemovePrice(name)
  }
  const handleDeleteQuestion = () => {
    setQuestion('')
    setChangeFilter(!changeFilter)
  }

  return (
    <Layout>
      <Carousel />
      <div className='px-5 xl:w-[95%] xl:mx-auto py-5'>
        <hr className='border my-3 dark:border-nord1' />
        <h2 className='text-3xl my-5'>
          Products
        </h2>
        <hr className='border my-3 dark:border-nord1' />
        <div className='flex justify-between'>
          <FilterModal categories={categories} />
          <div className='flex gap-2 justify-end items-center'>
            <span>Sort by</span>
            <select value={sortBy} onChange={(e) => handleChangeSort(e)} className='bg-transparent border-0 focus:outline-none focus:ring-transparent font-bold'>
              <option value='oldest'>oldest</option>
              <option value='newest'>newest</option>
              <option value='lowest price'>lowest price</option>
              <option value='highest price'>highest price</option>
            </select>
          </div>
        </div>
        {applyFilter &&
          <div className='filter-items my-5 flex flex-wrap gap-5'>
            {
              filter.price.min !== 0 &&
                <span onClick={(e) => handleDeletePrice(e)} className='rounded cursor-pointer py-2 px-3 bg-nord8 text-slate-600 font-bold'>
                  min
                  : $ {filter.price.min}
                  <FontAwesomeIcon icon={faClose} className='ml-3' />
                </span>
            }
            {
              filter.price.max !== 0 &&
                <span onClick={(e) => handleDeletePrice(e)} className='rounded cursor-pointer py-2 px-3 bg-nord8 text-slate-600 font-bold'>
                  max
                  : $ {filter.price.max}
                  <FontAwesomeIcon icon={faClose} className='ml-3' />
                </span>
            }

            {
            filter.categories.length > 0 && filter.categories.map((category, index) => (
              <span onClick={(e) => handleDeleteCategory(e)} className='rounded cursor-pointer py-2 px-3 bg-nord8 text-slate-600' key={index}>{category}
                <FontAwesomeIcon icon={faClose} className='ml-3' />
              </span>
            ))
            }

          </div>}
        {question
          ? (
            <div className='py-5 flex'>
              <span className='font-bold'>Results for {question}</span>
              <button onClick={() => handleDeleteQuestion()} className='rounded-full bg-nord11 mx-2 w-6 h-6 flex items-center justify-center'>
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            )
          : ''}
        {loading
          ? (
            <div className='my-5 flex w-full items-center justify-center'>
              <Spinner />
            </div>
            )
          : <Catalogue items={items} />}
      </div>
    </Layout>
  )
}

export default Home
