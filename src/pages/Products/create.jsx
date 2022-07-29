import Layout from '../../layouts/Authenticated'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Form from '../../components/common/Form'
import { useItemsContext } from '../../context/ItemsContext'
import { createItem } from '../../services/Items'

const CreateProduct = () => {
  const { categories } = useItemsContext()
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const inputs = [
    {
      type: 'text',
      label: 'Product Name',
      name: 'product_name',
      placeholder: 'Enter the product name'
    },
    {
      type: 'textarea',
      label: 'Description',
      name: 'description',
      placeholder: 'Enter the product description'
    },
    {
      type: 'number',
      label: 'Price',
      name: 'price',
      placeholder: 'Enter the product price'
    },
    {
      type: 'select',
      label: 'Category',
      name: 'category',
      options: [...categories]
    },
    {
      type: 'text',
      label: 'Product Brand',
      name: 'brand',
      placeholder: 'Enter the product brand'
    },
    {
      type: 'text',
      label: 'Product SKU',
      name: 'sku',
      placeholder: 'Enter the product sku'
    },
    {
      type: 'url',
      label: 'Image URL',
      name: 'image',
      placeholder: 'Enter the product image URL'
    }
  ]
  const initialValues = {
    product_name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    sku: '',
    image: ''
  }
  const handleCreateProduct = async (data) => {
    console.log(data)
    const { data: result, message } = await createItem(data)
    if (message) {
      return setError(message)
    }
    setError(null)
    console.log(result)
    navigate('/items/' + result._id)
  }
  return (
    <Layout>
      <section className='px-5  md:w-[800px] md:mx-auto'>
        <div className='pt-10 min-w-full sm:min-w-[500px]'>
          <h2 className='text-center text-3xl'>Create Product</h2>
          <Form
            inputs={inputs} action={async (data) => { handleCreateProduct(data) }} errorMessage={error} buttonText='Create' initialValues={initialValues}
          />

        </div>
      </section>
    </Layout>
  )
}

export default CreateProduct
