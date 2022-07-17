import { Carousel } from 'flowbite-react'
import React from 'react'
import toys from '/images/toys.jpg'
import sports from '/images/sports.jpg'
import music from '/images/music.jpg'
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

    <div className='px-5 lg:w-3/4 mx-auto my-5 h-56 sm:h-64 xl:h-80 2xl:h-96'>
      <Carousel slideInterval={5000} indicators={false}>
        {
            items.map(({ img, caption }, index) => (
              <div key={index} className='h-full flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
                <img src={img} className='slide-image opacity-70' alt={caption} />
                <span className='absolute bg-opacity-80 bottom-0 text-white  bg-nord2 py-2 w-full uppercase font-black text-xl text-center'>{caption}</span>
              </div>
            ))
        }
      </Carousel>
    </div>
  )
}

export default MyCarousel
