import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/common/Button'
import Spinner from '../components/common/Spinner'
import Layout from '../layouts'
import { getOneItem } from '../services/Items'
import { nFormatter } from '../utils/Number'

const Product = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  useEffect(() => {
    console.log('fetch product')
    fetchItem()
  }, [])
  const fetchItem = async () => {
    const { item: result } = await getOneItem(id)
    setItem(result)
  }
  if (!item) {
    return (
      <Layout>
        <div className='flex py-5 justify-center'>
          <Spinner />
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <section>
        <figure>
          <img src={item.image} alt={item.product_name} className='w-full h-[530px] object-cover' />
          <hr className='border-[0.5] border-nord4 my-12 shadow dark:border-slate-500' />
        </figure>
        <article className='mx-10 mb-5 flex flex-col gap-3 items-start'>
          <h3 className='font-bold text-2xl text-nord1 dark:text-nord6'>{item.product_name}</h3>
          <p className='text-justify text-nord2 dark:text-slate-400'>{item.description}</p>
          <div>
            <span className='text-nord3 dark:text-gray-300'>
              Produced by
            </span>
            <span className='text-lg text-nord9 dark:text-nord8'> {item.brand}</span>
          </div>
          <span className='rounded py-2 px-3 bg-nord8 text-slate-900'>{item.category}</span>
        </article>
        <hr className='border-[0.5] border-nord4 my-7 shadow dark:border-slate-500' />
        <div className='grid grid-cols-2 gap-5 p-2'>
          <div className='flex gap-3 items-center mx-8'>
            <span className='text-slate-400 font-medium dark:text-gray-400'>Total Amount</span>
            <span className='font-black text-xl text-nord0 dark:text-nord6'>${nFormatter(item.price)}</span>
          </div>
          <Button className='bg-nord10 font-bold text-nord6'>Add to Cart</Button>
        </div>
      </section>
    </Layout>

  )
}

export default Product
