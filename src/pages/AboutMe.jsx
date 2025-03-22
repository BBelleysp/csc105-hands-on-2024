import React from 'react'
import profile2 from '../image/profile2.jpg';

const AboutMe = () => {
  return (
    <div className='container flex flex-col md:flex-row py-10 md:py-20 md:px-20 max-w-full h-full'>
      {/* picture part */}
      <div className='bg-amber-100 px-5 md:w-1/2 space-y-5  '>
        <img src={profile2} alt="picture of me" className='h-full'/>
      </div>
      {/* info part */}
      <div className=' w-full md:w-1/2 space-y-6 flex flex-col justify-center px-5'>
        <h1 className='font-bold text-4xl md:text-5xl '>About Me</h1>
        <p className='text-xl font-medium'>Artist & Designer</p>
        <p className='text-gray-600'>I love reading books and spending time in libraries. I find happiness in being with my family and cherishing the quality moments we share.</p>
        <button className=' rounded-full py-2 w-39 bg-green-400 hover:bg-green-500 focus:ring-1 focus:ring-amber-50 transition duration-300'>Read More</button>
      </div>
    </div>
  )
}

export default AboutMe
