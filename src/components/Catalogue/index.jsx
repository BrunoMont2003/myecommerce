import Spinner from '../common/Spinner'
import ECard from '../ECard'
const Catalogue = ({ items }) => {
  return (
    <>
      {
        items.length === 0 &&
          <div className='my-5 flex w-full items-center justify-center'>
            No items found
          </div>
      }
      <section className='my-5 gap-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 pt-5'>
        {
        items.length > 0 && items.map((item, index) => (
          <ECard key={index} item={item} />
        ))
        }
      </section>
    </>
  )
}

export default Catalogue
