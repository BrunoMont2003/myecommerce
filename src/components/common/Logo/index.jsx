import { faMountainSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

const Logo = () => {
  return (
    <div className='logo flex items-center text-2xl mb-4 mr-3 scale-75'>
      <h3 className='font-medium logo-name relative mx-3'>
        <span className='text-nord1 dark:text-nord4'>
          digital
        </span>
        <span className='absolute left-0 top-7 dark:text-nord6'>
          mountain
        </span>
      </h3>
      <FontAwesomeIcon icon={faMountainSun} className='text-nord10' />
    </div>
  )
}

export default Logo
