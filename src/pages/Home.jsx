import Carousel from '../components/Carousel'
import Layout from '../layouts'
import { getAllItems, getCategories } from '../services/Items'
const Home = () => {
  getCategories()

  return (
    <Layout>
      <Carousel />
    </Layout>
  )
}

export default Home
