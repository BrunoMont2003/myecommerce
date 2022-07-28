import { useEffect, useState } from 'react'
import Button from '../common/Button'
import Counter from '../Counter'
import { nFormatter } from '../../utils/Number'
// eslint-disable-next-line import/no-absolute-path
import errorImage from '/public/images/error.jpg'
const ItemDetails = ({ item }) => {
  const [imgSrc, setImgSrc] = useState(null)
  useEffect(() => {
    setImgSrc(item.image)
  }, [])
  return (
    <section className='flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:gap-10 lg:py-20 md:w-full lg:container lg:mx-auto md:min-h-[calc(100vh-104px)] '>
      <div className='md:flex md:items-center md:justify-center md:pl-5 '>
        <figure className='md:overflow-hidden h-[530px]'>
          <img src={imgSrc ?? errorImage} onError={() => { setImgSrc(errorImage) }} alt={item.product_name} className='w-full h-full object-cover md:rounded md:hover:scale-150 ease-in-out' />
        </figure>
        <hr className='md:hidden border-[0.5] border-nord4 my-12 shadow dark:border-slate-500' />
      </div>
      <div className='md:flex md:flex-col justify-center relative pb-16'>
        <article className='mx-5 sm:mx-10 mb-5 flex flex-col gap-3 items-start'>
          <div className='flex justify-between w-full items-center gap-5'>
            <span className='text-lg text-nord9 dark:text-nord8'> {item.brand}</span>
            <span className='rounded py-2 px-3 bg-nord8 text-slate-900'>{item.category}</span>
          </div>

          <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl text-nord1 dark:text-nord6'>{item.product_name}</h3>
          <p className='text-justify text-nord2 dark:text-slate-400'>{item.description}</p>

        </article>
        <hr className='border-[0.5] border-nord4 my-7 shadow dark:border-slate-500 md:ml-10 md:mr-2' />
        <div className='flex gap-3 items-center mx-5 sm:mx-10 justify-between'>
          <span className='text-slate-400 font-medium dark:text-gray-400'>Unit Price</span>
          <span className='font-black text-xl text-nord0 dark:text-nord6'>${nFormatter(item.price)}</span>
        </div>
        <div className='grid grid-cols-3 gap-5 py-2 fixed md:relative bottom-0 bg-nord6 dark:bg-nord0 w-full px-5 md:px-10'>
          <Counter onChange={(e) => { }} className='' />
          <Button className='bg-nord10 font-bold text-nord6 col-span-2'>Add to Cart</Button>
        </div>
      </div>
    </section>
  )
}

export default ItemDetails
