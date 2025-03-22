import React from 'react'
import fb from '../icons/fb.png';
import ig from '../icons/ig.png';
import x from '../icons/x.png';
import profile1 from '../image/profile1.jpg';
const Home = () => {
  return (
    <>
        <div className='container flex md:flex-row py-10 md:py-20 md:px-20 max-w-full h-full bg-green-100'>
            {/* left */}
            <div className='w-1/2 pl-5 space-y-5 '>
                <div className='font-medium text-xl'>Hello, It's me</div>
                <div className='text-5xl font-bold'>Artist Belle</div>
                <div className='font-medium text-xl'>I'm a Artist</div>
                <p className='text-gray-600'>My name is Yossapan Rujipornprasert. I love reading books and spending time in libraries. I find happiness in being with my family and cherishing the quality moments we share.</p>
                {/* icons fb ig mail */}
                <div className='flex gap-3 relative'>
                    {/* facebook */}
                    <div className='w-10 md:w-15'>
                        <a href="https://www.facebook.com/ysp.belle">
                            <img src={fb} alt="facebook" target="_blank"/>
                        </a>
                    </div>
                    {/* ig */}
                    <div className='w-10 md:w-15'>
                        <a href="https://www.instagram.com/ysp.belle">
                            <img src={ig} alt="instagram" target="_blank"/>
                        </a>
                    </div>
                    {/* X */}
                    <div className='w-10 md:w-15'>
                        <a href="https://www.x.com/Yossapan">
                            <img src={x} alt="x" target="_blank"/>
                        </a>
                    </div>
                </div>
             <button className='rounded-full py-2 w-30 md:w-50 bg-green-400 hover:bg-green-500 focus:ring-1 focus:ring-amber-50 absolute'>My Portfolio</button>
            </div>
            <div className='w-1/2 md:w-1/2 space-y-8  items-center'>
                <img src={profile1} alt="picture of me" className='h-full'/>
            </div>
        </div>
    </>
  )
}

export default Home
