import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import Logo from '../common/Logo'
import DarkModeToggle from '../DarkModeToggle'
import './style.css'
import Button from '../common/Button'
import NavItems from './NavItems'
const HiddenPanel = ({ open = true, toggle }) => {
  return (
    <div className={`min-h-screen w-full z-10  absolute top-0 transition-all duration-200 ease-in  ${open ? '-left-0' : '-left-full'} bg-nord4 dark:bg-nord1 px-5 py-7 lg:hidden`}>
      <div className='flex items-center justify-between pb-6 '>
        <Logo />
        <div className=''>
          <DarkModeToggle />
          <FontAwesomeIcon icon={faClose} className='text-xl ml-5 cursor-pointer text-nord2 dark:text-nord5' onClick={toggle} />
        </div>
      </div>
      <div className='px-5 py-6 flex flex-col gap-5 border-y border-slate-300 dark:border-slate-500'>

        <div className='flex items-center gap-5'>
          <div className='w-12 flex items-center justify-center h-12 rounded-full bg-slate-300 text-nord1 dark:bg-nord3 dark:text-nord5'>
            <FontAwesomeIcon icon={faUser} className='text-lg' />
          </div>
          <span className='font-bold text-nord1 dark:text-nord5'>My Profile</span>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <Button className='text-nord4 dark:text-nord1 bg-nord8 font-bold hover:bg-nord9'>Log in</Button>
          <Button className='border border-nord9 text-nord9 dark:border-nord8 dark:text-nord8 font-bold hover:bg-nord5 dark:hover:bg-nord2'>Register</Button>
        </div>
      </div>
      <NavItems className='p-5  grid place-content-stretch place-items-stretch' />
    </div>
  )
}
export default HiddenPanel
