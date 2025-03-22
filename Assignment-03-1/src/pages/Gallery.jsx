import React from 'react'
import room from '../image/room.jpg';
import bed from '../image/bed.jpg';
import nail from '../image/nail.jpg';
import quote1 from '../image/quote1.jpg';
import quote2 from '../image/quote2.jpg';
import read from '../image/read.jpg';

const Gallery = () => {
  return (
    <>
    <div className='max-w-full max-h-full pb-12 container bg-pink-200'>
      <h1 className='font-bold text-4xl md:text-5xl pt-15 pb-5 px-5 flex justify-center items-center'>Gallery</h1>
      <div className='container flex justify-center items-center max-w-full'>
        <div className="grid grid-cols-3 gap-x-10 justify-center items-center max-w-full gap-y-5 mx-30 mt-10 mb-10">
            <img src={quote1} alt="Do the things that matter" className='h-36 w-96 object-cover md:h-98' />
            <img src={read} alt="I love reading" className='h-36 w-96 object-cover md:h-98 '/>
            <img src={nail} alt="Dream nails" className='h-36 w-96 object-cover md:h-98'/>
            <img src={bed} alt="Cozy bed" className='h-36 w-96 object-cover md:h-98' />
            <img src={room} alt="study" className='h-36 w-96 object-cover md:h-98' />
            <img src={quote2} alt="don't allow anyone to make you feel you're not good enough" className='h-36 w-96 object-cover md:h-98'/>
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Gallery
