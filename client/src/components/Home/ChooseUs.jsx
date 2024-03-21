import React from 'react'
import { Fade } from 'react-awesome-reveal'

function ChooseUs() {
  
  return (
    <div className="mx-auto py-5 bg-gray-50" style={{ fontFamily: 'Poppins' }}>
  <h1 className="text-black text-center text-2xl sm:text-3xl font-bold">Why Choose Our Tiffin Service?</h1>
  <div className="grid grid-cols-1 my-5 mx-4 sm:grid-cols-1 sm:grid lg:grid-cols-2 gap-6 md:px-8 px-2">
    <Fade direction='left'>
      <div className=' shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-none  rounded-lg grid sm:grid-cols-2 hover:shadow-[0_3px_10px_rgb(255,0,0,0.2)] '>
        <img src="https://eathomie-com.s3.amazonaws.com/images/home-made-food-1224.jpg" alt="image1" className='w-auto order-1 h-full' />
        <h1 className="text-center text-2xl py-5 order-2 sm:flex sm:justify-center sm:items-center">Crafted with Love and Home🏠 <br /> Chef's Expertise🧑‍🍳</h1>
      </div>
      
    </Fade>
    <Fade direction='right'>
      <div className=' shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-none  rounded-lg grid sm:grid-cols-2 hover:shadow-[0_3px_10px_rgb(255,0,0,0.2)]'>
        <img src="https://eathomie-com.s3.amazonaws.com/images/small-batch-1224.jpg" alt="image1" className='w-auto sm:order-2 lg:order-1 h-full' />
        <h1 className="text-center text-2xl py-5 px-1 sm:order-1 lg:order-2 sm:flex sm:justify-center sm:items-center">Freshness Guaranteed - No Frozen Foods, Only Preservative-Free Ingredients!</h1>
      </div>
    </Fade>
    <Fade direction='left'>
      <div className=' shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-none  rounded-lg grid sm:grid-cols-2 hover:shadow-[0_3px_10px_rgb(255,0,0,0.2)]'>
        <img src="https://eathomie-com.s3.amazonaws.com/images/fresh-food-1224.jpg" alt="image1" className='w-auto md:order-1 lg:order-2 h-full' />
        <h1 className="text-center text-2xl py-5 sm:order-2 lg:order-1 px-1 sm:flex sm:justify-center sm:items-center">Savor the Authentic Flavors - Sindhi, Maharashtrian, Gujarati, Bengali, Punjabi & Much More!</h1>
      </div>
    </Fade>
    <Fade direction='right'>
      <div className=' shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-none  rounded-lg grid sm:grid-cols-2 hover:shadow-[0_3px_10px_rgb(255,0,0,0.2)]'>
        <img src="https://eathomie-com.s3.amazonaws.com/images/disposable-packaging.jpg" alt="image1" className='w-full sm:order-2 lg:order-2 ' style={{ height: "230px" }} />
        <h1 className="text-center text-2xl py-5 sm:order-1 lg:order-1 px-1 sm:flex sm:justify-center sm:items-center">Experience the Ultimate Convenience - Order from Our Home Chefs with Ease!</h1>
      </div>
    </Fade>
  </div>
</div>

  )
}

export default ChooseUs
