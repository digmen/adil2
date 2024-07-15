import React, { useEffect } from 'react'

import aboutHeroImage from './images/abouthero.png'
import aboutImgOne from './images/aboutimgone.png'
import aboutImgTwo from './images/aboutimgtwo.png'
import aboutImgThree from './images/aboutimgthree.png'

import { useTranslation } from 'react-i18next'

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function AboutUs() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      easing: 'ease', // функция сглаживания анимации
      mirror: false, // запуск анимации при прокрутке назад
    });
  }, []);

  return (
    <div>
      <div className='h-[200px]' style={{ backgroundImage: `url(${aboutHeroImage})`, backgroundSize: 'cover' }}>
        <div className='h-[200px] flex items-center px-[40px]  z-20'>
          <span className='text-white text-[55px] font-black text-center z-20 max-sm:text-[30px]'>{t('about.aboutTextHero')}</span>
        </div>
      </div>

      <div className='px-[40px] mt-[40px]'>
        <div className='flex justify-between'>
          <div className='w-[636px]'>
            <h1 className='text-[32px] font-bold'>Our Mission</h1>
            <p className='text-[18px] font-normal'>At World Innovation Group, we strive to create comfort and style in every home, offering our customers the finest solutions for interior and food. Our goal is to inspire and enrich the lives of our customers by providing high-quality textiles, unique interior items, and food products. We believe that every home deserves to be a perfect place for relaxation and self-expression, and thus we continually work to offer products that enhance life and comfort.
              Join us on our journey to create beautiful and functional spaces that reflect your individuality and style.</p>
          </div>
          <div className='w-[531px] h-[246px]'>
            <img className='w-[531px] h-[246px]' src={aboutImgOne} alt='about img' />
          </div>
        </div>
      </div>

      <div className='px-[40px] mt-[100px]'>
        <div className='flex flex-row-reverse justify-between'>
          <div className='w-[636px]'>
            <h1 className='text-[32px] font-bold'>Our Philosophy</h1>
            <p className='text-[18px] font-normal'>The philosophy of our company is based on three main principles: honesty, transparency and constant pursuit of excellence. We believe in the importance of open and honest relationships with our customers and partners. Our goal is to ensure maximum customer satisfaction by providing them with only the best products and services. We are constantly striving to improve all aspects of our business.</p>
          </div>
          <div className='w-[531px] h-[204px]'>
            <img className='w-[531px] h-[204px]' src={aboutImgTwo} alt='about img' />
          </div>
        </div>
      </div>


      <div className='mt-[60px] px-[40px] flex flex-col'>
        <div className='flex justify-center'>
          <h1 className='text-[32px] font-bold'>Our Values</h1>
        </div>
        <div className='mt-[30px] flex flex-wrap justify-center gap-[30px]'>
          <div className='w-[350px] h-[253px] bg-[#CBCBCB] rounded-[25px] flex justify-center items-center'>
            <div className='px-[50px] py-[22px] flex flex-col gap-[10px]'>
              <h1 className='font-bold text-[26px]'>Dynamism</h1>
              <span className='font-light text-[16px]'>We evolve with the fast pace of e commerce. We detect the latest trends and we take risks. So that our customers are satisfied and continue to cooperate with us</span>
            </div>
          </div>
          <div className='w-[350px] h-[253px] bg-[#CBCBCB] rounded-[25px] flex justify-center items-center'>
            <div className='px-[50px] py-[22px] flex flex-col gap-[10px]'>
              <h1 className='font-bold text-[26px]'>Innovation</h1>
              <span className='font-light text-[16px]'>Innovation is the core of our strategy. We innovate in technology, logistics, operations and we constantly optimise our processes.</span>
            </div>
          </div>
          <div className='w-[350px] h-[253px] bg-[#CBCBCB] rounded-[25px] flex justify-center items-center'>
            <div className='px-[50px] py-[22px] flex flex-col gap-[10px]'>
              <h1 className='font-bold text-[26px]'>Passion For Ecommerce</h1>
              <span className='font-light text-[16px]'>We are passionate about online, multi-channel and international selling. And we always do it with sustainability as a priority.</span>
            </div>
          </div>
        </div>
      </div>

      <div className='px-[40px] mt-[100px] bg-[#FFCE33]'>
        <div className='flex justify-between py-[50px]'>
          <div className='w-[636px] flex flex-col gap-[20px]'>
            <h1 className='text-[32px] font-bold'>Our Story</h1>
            <p className='text-[18px] font-normal'>We founded our company with the aim of connecting manufacturers with customers. Starting with a small amount of capital, we signed contracts with large manufacturers and significantly increased the volume of orders. The opening of offices and warehouses allowed us to reduce the delivery time. Today we are the market leader, introducing the latest technologies and constantly expanding our geographical presence and customer service capabilities.</p>
          </div>
          <div className='w-[531px] h-[246px]'>
            <img className='w-[531px] h-[246px]' src={aboutImgThree} alt='about img' />
          </div>
        </div>
      </div>

    </div>
  )
}
