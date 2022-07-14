import Layout from '../layouts'
import { getAllItems } from '../services/Items'
const Home = () => {
  getAllItems()
  return (
    <Layout>
      hola
    </Layout>
  )
}

export default Home
