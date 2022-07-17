import { faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'
import Carousel from '../components/Carousel'
import Layout from '../layouts'
import { getAllItems, getCategories } from '../services/Items'
const Home = () => {
  const [show, setShow] = useState(false)
  getCategories()

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
            size='md'
            popup
            position='center'
            onClose={() => { setShow(false) }}
          >
            <Modal.Header />
            <Modal.Body>
              <div className='text-center'>
                <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                  Are you sure you want to delete this product?
                </h3>
                <div className='flex justify-center gap-4'>
                  <Button
                    color='failure'
                    onClick={() => {}}
                  >
                    Yes, I'm sure
                  </Button>
                  <Button
                    color='gray'
                    onClick={() => {}}
                  >
                    No, cancel
                  </Button>
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
