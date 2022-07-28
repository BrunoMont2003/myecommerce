/* eslint-disable import/no-absolute-path */
import { Carousel } from 'flowbite-react'
import toys from '/images/toys.jpg'
import sports from '/images/sports.jpg'
import music from '/images/music.jpg'
import './style.css'
const MyCarousel = () => {
  const items = [
    {
      img: toys,
      caption: 'Big brand toys for less!!'
    },
    {
      img: music,
      caption: 'The best music accesories with the lowest price!!'
    },
    {
      img: sports,
      caption: 'High Quality Sport Wear with Competitive Price!!'
    }
  ]
  return (

    <div className='mb-5 h-96 lg:h-[80vh] xl:h-[calc(100vh-104px)]'>
      <Carousel slideInterval={5000} indicators={false}>
        {
            items.map(({ img, caption }, index) => (
              <div key={index} className='h-full flex items-center justify-center flex-col bg-gray-400 dark:bg-gray-700 dark:text-white'>
                <div style={{ backgroundImage: 'url(' + img + ')' }} className='slide-image opacity-70' alt={caption} />
                <span className='absolute bottom-0 bg-opacity-80 text-white  bg-nord2 py-2 lg:py-4 w-full uppercase font-black text-xl text-center'>{caption}</span>
              </div>
            ))
        }
      </Carousel>
    </div>
  )
}

export default MyCarousel
