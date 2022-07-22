import { faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useFilterContext } from '../../context/FilterContext'
import { removeItem } from '../../Utils/Array'
import Button from '../common/Button'
import Input from '../common/Input'
import Spinner from '../common/Spinner'

const FilterModal = ({ categories }) => {
  const [showModal, setShowModal] = useState(false)
  const [clickCategory, setClickCategory] = useState(false)
  const { filter, setFilter, setApplyFilter, changeFilter, setChangeFilter, removePrice, setRemovePrice } = useFilterContext()
  const [minInputValue, setMinInputValue] = useState({ value: undefined })
  const [maxInputValue, setMaxInputValue] = useState({ value: undefined })
  useEffect(() => {
    removePrice && console.log('remove price', removePrice)
    if (removePrice === 'max') {
      setMaxInputValue({ value: '' })
      setRemovePrice(false)
    }
    if (removePrice === 'min') {
      setMinInputValue({ value: '' })
      setRemovePrice(false)
    }
    if (!removePrice) {
      setMaxInputValue({ value: undefined })
      setMinInputValue({ value: undefined })
    }
  }, [changeFilter, removePrice])
  const handleClickCategory = ({ target: { textContent } }) => {
    const previousFilter = filter
    filter.categories.includes(textContent) ? removeItem(previousFilter.categories, textContent) : previousFilter.categories.push(textContent)
    setFilter(previousFilter)
    setClickCategory(!clickCategory)
  }
  const handleChangePrice = ({ target: { name, value } }) => {
    if (!removePrice) setMaxInputValue({ })
    setFilter(
      {
        ...filter, price: { ...filter.price, [name]: parseFloat(value) }
      }
    )
  }
  const handleApplyFilters = () => {
    const { min, max } = filter.price
    if (max <= min) {
      filter.price.max = 0
      setFilter(filter)
    }
    setChangeFilter(!changeFilter)
    setApplyFilter(true)
    setShowModal(false)
    console.log('hello, all good')
    setRemovePrice(false)
  }
  const handleCancel = () => {
    const { min, max } = filter.price
    if (max <= min) {
      filter.price.max = 0
      setFilter(filter)
    }
    setShowModal(false)
    setRemovePrice(false)
  }

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
        onClose={() => { handleCancel() }}
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
                {!categories &&
                  <div className='w-full flex items-center justify-center'>
                    <Spinner />
                  </div>}
                {
                     categories && categories.length > 0 && categories.map((category, index) => (
                       <Button onClick={(e) => { handleClickCategory(e) }} className={`text-nord3 border-nord1 dark:text-nord6 dark:border-nord6 shadow border hover:border-nord10 dark:hover:border-nord8 dark:hover:text-nord8 hover:text-nord10 ${filter.categories.includes(category) && 'border-nord10 dark:border-nord8 dark:text-nord8 text-nord10 font-bold'}`} key={index}>{category}</Button>
                     ))
                    }
              </div>
            </div>
            <div>
              <h4 className='text-xl font-medium mb-4'>Price</h4>
              <div className='grid grid-cols-2 gap-5'>
                <Input type='number' onChange={(e) => { handleChangePrice(e) }} name='min' {...minInputValue} min={0} placeholder='Minimum' />
                <Input type='number' onChange={(e) => { handleChangePrice(e) }} name='max' {...maxInputValue} min={0} placeholder='Maximum' />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <Button className='border border-nord9 text-nord9 dark:border-nord8 dark:text-nord8 font-bold hover:bg-nord5 dark:hover:bg-nord2' onClick={() => handleCancel()}>Cancel</Button>
              <Button className='text-nord4 dark:text-nord1 bg-nord8 font-bold hover:bg-nord9' onClick={() => handleApplyFilters()}>Apply Filters</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default FilterModal
