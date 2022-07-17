import { faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'flowbite-react'
import Button from '../components/common/Button'
import { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import Layout from '../layouts'
import { getAllItems, getCategories } from '../services/Items'
import Input from '../components/common/Input'
import DarkModeToggle from '../components/DarkModeToggle'
const Home = () => {
  const [show, setShow] = useState(false)
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
          <button onClick={() => { setShow(true) }} className='py-3 px-5 border rounded dark:border-nord7 dark:text-nord7 border-nord0 text-nord-0'>
            <FontAwesomeIcon icon={faFilterCircleXmark} />
            <span className='mr-5' />
            Filter
          </button>
          <Modal
            show={show}
            size='lg'
            popup
            position='center'
            onClose={() => { setShow(false) }}

          >
            <Modal.Header />
            <Modal.Body>
              <div className='flex flex-col gap-5'>
                <h3 className='text-2xl font-black text-gray-800 dark:text-gray-200'>
                  Filter
                </h3>
                <div>
                  <h4 className='text-xl font-medium'>Categories</h4>
                  <div className='flex flex-wrap gap-3 my-5'>
                    {
                     categories && categories.map((category, index) => (
                       <Button className='text-nord3 border-nord1 dark:text-nord6 dark:border-nord6 shadow border hover:border-nord10 dark:hover:border-nord8 dark:hover:text-nord8 hover:text-nord10' key={index}>{category}</Button>
                     ))
                    }
                  </div>
                </div>
                <div>
                  <h4 className='text-xl font-medium mb-4'>Price</h4>
                  <div className='grid grid-cols-2 gap-5'>
                    <Input type='number' min={0} placeholder='Minimum' />
                    <Input type='number' min={0} placeholder='Maximum' />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                  <Button className='border border-nord9 text-nord9 dark:border-nord8 dark:text-nord8 font-bold hover:bg-nord5 dark:hover:bg-nord2' onClick={() => setShow(false)}>Cancel</Button>
                  <Button className='text-nord4 dark:text-nord1 bg-nord8 font-bold hover:bg-nord9'>Apply Filters</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
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
