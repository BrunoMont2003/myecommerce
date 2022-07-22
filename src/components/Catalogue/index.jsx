import Spinner from '../common/Spinner'
import ECard from '../ECard'
const Catalogue = ({ items }) => {
  return (
    <>
      {
        items.length === 0 &&
          <div className='my-5 flex w-full items-center justify-center'>
            <Spinner />
          </div>
      }
      <section className='my-5 gap-5 flex flex-wrap'>
        {
        items.length > 0 && items.map((item, index) => (
          <ECard key={index} />
        ))
        }
      </section>
    </>
  )
}

export default Catalogue
