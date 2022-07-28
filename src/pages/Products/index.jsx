import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Spinner from '../../components/common/Spinner'

import ItemDetails from '../../components/ItemDetails'
import Layout from '../../layouts/Authenticated'
import { getOneItem } from '../../services/Items'

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
      <ItemDetails item={item} />
    </Layout>

  )
}

export default Product
