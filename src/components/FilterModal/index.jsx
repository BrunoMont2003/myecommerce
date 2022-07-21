import { faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'flowbite-react'
import React, { useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'

const FilterModal = ({ categories }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => { setShowModal(true) }} className='py-3 px-5 border rounded dark:border-nord7 dark:text-nord7 border-nord0 text-nord-0'>
        <FontAwesomeIcon icon={faFilterCircleXmark} />
        <span className='mr-5' />
        Filter
      </button>
      <Modal
        show={showModal}
        size='lg'
        popup
        position='center'
        onClose={() => { setShowModal(false) }}
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
              <Button className='border border-nord9 text-nord9 dark:border-nord8 dark:text-nord8 font-bold hover:bg-nord5 dark:hover:bg-nord2' onClick={() => setShowModal(false)}>Cancel</Button>
              <Button className='text-nord4 dark:text-nord1 bg-nord8 font-bold hover:bg-nord9'>Apply Filters</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default FilterModal
