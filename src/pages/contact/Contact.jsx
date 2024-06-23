import React from 'react'

import contactUsImg from './images/contuctusimg.png'

export default function Contact() {
  return (
    <div>
      <div className='h-[479px] relative' style={{ backgroundImage: `url(${contactUsImg})`, backgroundSize: 'cover' }}>
        <div className='absolute bg-[#00000070] h-[479px] w-full z-10'>
        </div>
        <div className='h-[479px] flex items-center justify-center z-20'>
          <span className='text-white text-[65px] font-semibold text-center w-[614px] z-20 max-sm:text-[40px]'>CONTACT US</span>
        </div>
      </div>

      <div className='flex justify-center items-center my-[50px]'>
        <div className='flex flex-col items-center w-[950px]'>
          <h1 className='text-white text-[45px] font-extrabold max-sm:text-[30px]'>You can find us at:</h1>
          <div className='flex flex-col items-center mt-[30px]'>
            <h1 className='text-white text-[45px] font-extrabold max-sm:text-[30px]'>EMAIL:</h1>
            <span className='text-white text-[30px] font-medium max-sm:text-[20px]'>alphaimpex.org@outlook.com</span>
          </div>
          <div className='flex flex-col items-center mt-[30px]'>
            <h1 className='text-white text-[45px] font-extrabold max-sm:text-[30px]'>PHONE NUMBER:</h1>
            <span className='text-white text-[30px] font-medium max-sm:text-[20px]'>+90 212 345 67 89</span>
          </div>
          <div className='flex flex-col items-center mt-[30px]'>
            <h1 className='text-white text-[45px] font-extrabold max-sm:text-[30px]'>LOCATION:</h1>
            <span className='text-white text-[30px] font-medium text-center max-sm:text-[20px] max-sm:w-[300px]'>Atakoy 7-8-9-10. Kisim mah. Cobançesme e-5 yan yol cad. A no: 22 /1 Iç Kapi no: 30 bakirkoy/ Istanbul/Turkey</span>
          </div>
        </div>
      </div>
    </div>
  )
}
