import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='pt-[104px]'>
        {
        children
        }
      </main>
      <Footer />
    </>
  )
}

export default Layout
