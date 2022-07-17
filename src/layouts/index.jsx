import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='py-5'>
        {
        children
        }
      </main>
      <Footer />
    </>
  )
}

export default Layout
