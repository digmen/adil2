import React from 'react'

import serviceHero from './images/serviceimg.png'

export default function Service() {
  return (
    <div>

      <div className='h-[479px] relative' style={{ backgroundImage: `url(${serviceHero})`, backgroundSize: 'cover' }}>
        <div className='absolute bg-[#00000070] h-[479px] w-full z-10'>
        </div>
        <div className='h-[479px] flex items-center justify-center z-20'>
          <span className='text-white text-[65px] font-semibold text-center w-[614px] z-20'>OUR SERVICE</span>
        </div>
      </div>


      <div className='flex justify-center mt-[83px]'>
        <div className='w-[1000px] flex justify-center items-center'>
          <span className='font-medium text-white text-[30px] text-center  max-sm:text-[20px] max-sm:mx-5'>Jeff Bezos: "We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better."</span>
        </div>
      </div>


      <div className='flex justify-center flex-wrap gap-[20px] mt-[32px] mb-[62px]'>
        <div className='flex'>
          <div className='max-sm:w-[330px] w-[516px] h-[335px] rounded-[20px] bg-[#828282] flex items-center justify-center flex-col gap-[60px]'>
            <h1 className='font-medium text-[30px] text-white text-center max-sm:text-[20px]'>Logistics</h1>
            <span className='font-semibold text-[20px] text-white w-[480px] text-center max-sm:w-[300px]'>If necessary, parts are unavailable or discontinued, we offer technical support to find suitable replacements from alternative brands that match your requirements precisely.</span>
          </div>
        </div>
        <div>
          <div className='max-sm:w-[330px] w-[516px] h-[335px] rounded-[20px] bg-[#828282] flex items-center justify-center flex-col gap-[60px]'>
            <h1 className='font-medium text-[30px] text-white text-center max-sm:text-[20px]'>Exploring alternative options for current products</h1>
            <span className='font-semibold text-[20px] text-white w-[480px] text-center max-sm:w-[300px]'>Global product sourcing can be stressful, but you can trust us! Our extensive experience in the market has enabled us to develop efficient and expedient delivery processes.</span>
          </div>
        </div>
        <div>
          <div className='max-sm:w-[330px] w-[516px] h-[335px] rounded-[20px] bg-[#828282] flex items-center justify-center flex-col gap-[60px]'>
            <h1 className='font-medium text-[30px] text-white text-center max-sm:w-[300px] max-sm:text-[20px]'>Transport information transfer infrastructure</h1>
            <ul>
              <li className='text-white text-[20px] font-semibold'>1.Local Network</li>
              <li className='text-white text-[20px] font-semibold'>2.Corporate network</li>
              <li className='text-white text-[20px] font-semibold'>3.Network data center</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
