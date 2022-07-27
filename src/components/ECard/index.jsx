import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line import/no-absolute-path
import defaultImage from '/public/images/product.png'
import Button from '../common/Button'

const ECard = ({ item: { product_name: name, price, brand, image } }) => {
  return (
    <div className=' bg-white shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <div className='flex items-center justify-center h-[250px]'>
          <img className={image ? 'mb-5 h-full w-full object-cover' : ''} src={image ?? defaultImage} alt='product image' />
        </div>
      </a>
      <div className='px-5 pb-5'>
        <a href='#'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{name}</h5>
        </a>

        <div className='flex mt-5 justify-between items-center'>
          <span className='text-3xl font-bold text-gray-900 dark:text-white'>${price}</span>
          <Button className='bg-nord8 text-slate-900' to={`${name}`}>
            <span className='hidden xl:inline-block mr-5'>
              Add to Cart
            </span>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
        </div>
      </div>
    </div>

  )
}

export default ECard
