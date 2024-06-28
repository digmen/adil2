import React from 'react'

import aboutHeroImage from './images/abouthero.png'

import pricetags from './images/pricetags-sharp.png'
import caravan from './images/caravan-fill.png'
import bulding from './images/building-4-fill.png'
import arrowCircle from './images/arrow-down-circle-fill.png'

import aboutUs from './images/aboutusimgdown.png'

import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div>
      <div className='h-[479px] relative' style={{ backgroundImage: `url(${aboutHeroImage})`, backgroundSize: 'cover' }}>
        <div className='absolute bg-[#00000070] h-[479px] w-full z-10'>
        </div>
        <div className='h-[479px] flex items-center justify-center z-20'>
          <span className='text-white text-[65px] font-semibold text-center w-[614px] z-20'>ABOUT US</span>
        </div>
      </div>


      <div className='flex justify-between mx-[125px] mt-[114px]  max-sm:mx-[15px]  max-sm:mt-[20px]'>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-[20px]'>
            <h1 className='text-[30px] text-white'>About Us</h1>
            <span className='text-[30px] text-white  max-sm:text-[18px]'>Welcome to Alpha Impex – your reliable partner in freight transportation and the sale of various goods. We specialize in providing high-quality delivery and sales services in the following categories:</span>
          </div>
          <div className='mt-[30px]'>
            <ol>
              <li className='flex gap-2 items-center text-white max-sm:text-[20px]'><div className='w-[12px] h-[12px] bg-white rounded-full'></div> Electric Product</li>
              <li className='flex gap-2 items-center text-white max-sm:text-[20px]'><div className='w-[12px] h-[12px] bg-white rounded-full'></div>Household Appliances</li>
              <li className='flex gap-2 items-center text-white max-sm:text-[20px]'><div className='w-[12px] h-[12px] bg-white rounded-full'></div>Food Products</li>
            </ol>
          </div>
          <div className='mt-[50px] flex flex-col gap-[37px]'>
            <h1 className='text-white font-black text-[30px]'>Benefits of partnering with our company</h1>
            <p className='text-white font-medium text-[30px]  max-sm:text-[18px]'>We seek reliable, long-term partnerships and offer favorable terms for cooperation.
              Equipment failures and operational disruptions can significantly impact business operations. ALPHA IMPEX provides seamless access to a global inventory of products, helping manufacturers worldwide minimize downtime. Our customers benefit from a broad range of products, quality services, and strategic, sustainable solutions tailored to their needs.</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-[50px]'>
        <div className='flex gap-[102px] max-sm:flex-wrap max-sm:justify-center max-sm:gap-[50px]'>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center'>
              <img className='w-[200px] h-[180px] md:w-[150px] md:h-[130px]  max-sm:h-[130px] max-sm:w-[150px]' src={pricetags} />
              <span className='text-white text-[30px] font-extrabold md:text-[20px] max-sm:text-[20px]'>COMPETITIVE PRICE</span>
            </div>
            <div className='flex flex-col items-center'>
              <img className='w-[200px] h-[180px] md:w-[150px] md:h-[130px] max-sm:h-[130px] max-sm:w-[150px]' src={caravan} />
              <span className='text-white text-[30px] font-extrabold md:text-[20px]  max-sm:text-[20px]'>WIDE SELECTION</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center'>
              <img className='w-[200px] h-[180px] md:w-[150px] md:h-[130px] max-sm:h-[130px] max-sm:w-[150px]' src={bulding} />
              <span className='text-white text-[30px] font-extrabold md:text-[20px]  max-sm:text-[20px]'>CONVENIENT DELIVERY</span>
            </div>
            <div className='flex flex-col items-center'>
              <img className='w-[200px] h-[180px] md:w-[150px] md:h-[130px] max-sm:h-[130px] max-sm:w-[150px]' src={arrowCircle} />
              <span className='text-white text-[30px] font-extrabold md:text-[20px]  max-sm:text-[20px]'>QUALITY ORIENTATION</span>
            </div>
          </div>
        </div>
      </div>


      <div className='h-[605px] relative mt-[40px] flex flex-col items-center justify-center' style={{ backgroundImage: `url(${aboutUs})`, backgroundRepeat: 'repeat', width: '100%', backgroundSize: 'cover' }}>
        <div className='absolute bg-[#0000009e] h-[605px] w-full z-10'>
        </div>
        <div className=' flex flex-col gap-[17px]  w-[1100px] z-20 md:w-[700px] sm:w-[500px] max-sm:w-[330px]'>
          <h1 className='text-[30px] font-black text-white z-20 max-sm:text-[20px]'>WHERE WE LOCATE</h1>
          <span className='text-white text-[30px] font-semibold z-20 md:text-[20px] max-sm:text-[16px]'> Due to our convenient location, we efficiently deliver to the rest of the world by land, sea, and air. Currently we are serving customers in over 50 countries.</span>
        </div>
        <div className=' flex flex-col gap-[17px] w-[1100px] z-20 md:w-[700px] sm:w-[500px] max-sm:w-[330px]'>
          <h1 className='text-[30px] font-black text-white z-20 max-sm:text-[20x]'>OUR GOALS AND MISSION</h1>
          <span className='text-white text-[30px] font-semibold z-20 md:text-[20px] max-sm:text-[16px]'> We prioritize our customers as partners, stressing long-term collaboration and reliable relationships. Our focus is on delivering advanced solutions that foster growth, extending beyond mere product supply to include resolving associated challenges. ALPHA IMPEX places a strong emphasis on upholding professional standards and continuously enhancing our technical department through training.</span>
        </div>
      </div>
    </div>
  )
}
