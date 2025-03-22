import React from 'react'

function Navbar() {
  return (
    <>
      <div className="bg-pink-200  flex  md:flex-row  md:justify-between justify-evenly items-center h-20 w-full">
      <h1 className="text-2xl font-medium md:pl-20">Artist Belle</h1>
      <div className=" pt-0 pr-5 pb-0 pl-5 md:px-10">
          <button className='px-3'>Home</button>
          <button className='px-3'>About me</button>
          <button className='px-3'>Gallery</button>
    </div>
    <button className='md:mr-10 rounded-full flex justify-center items-center py-2 w-30  bg-amber-100 hover:bg-amber-200 focus:ring-1 focus:ring-amber-50 transition duration-300 font-medium'>Contact</button>
    </div>
    </>
  );
}

export default Navbar