import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='py-5 px-5 lg:w-3/4 mx-auto '>
        {
        children
        }
      </main>
      <Footer />
    </>
  )
}

export default Layout
