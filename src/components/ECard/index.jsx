import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line import/no-absolute-path
import defaultImage from '/public/images/product.png'
// eslint-disable-next-line import/no-absolute-path
import errorImage from '/public/images/error.jpg'
import Button from '../common/Button'
import { nFormatter } from '../../utils/Number'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ECard = ({ item: { _id: id, product_name: name, price, brand, image } }) => {
  const [imgSrc, setImgSrc] = useState(image)
  return (
    <div className=' bg-white shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <Link to={`/items/${id}`}>
        <div className='flex items-center justify-center h-[250px]'>
          <img src={imgSrc ?? defaultImage} onError={() => { setImgSrc(errorImage) }} className={image ? 'mb-5 h-full w-full object-cover' : ''} alt='product image' />
        </div>
      </Link>
      <div className='px-5 pb-5'>
        <Link to={`/items/${id}`}>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{name}</h5>
        </Link>

        <div className='flex mt-5 justify-between items-center'>
          <span className='overflow-hidden text-3xl font-bold text-gray-900 dark:text-white'>${nFormatter(price)}</span>
          <Button className='bg-nord8 text-slate-900 flex ' to={`${name}`}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
        </div>
      </div>
    </div>

  )
}

export default ECard
