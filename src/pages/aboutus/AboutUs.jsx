import React, { useEffect } from 'react'

import aboutHeroImage from './images/abouthero.png'

import pricetags from './images/pricetags-sharp.png'
import caravan from './images/caravan-fill.png'
import bulding from './images/building-4-fill.png'
import arrowCircle from './images/arrow-down-circle-fill.png'

import aboutUs from './images/aboutusimgdown.png'

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
      <div className='h-[479px] relative' style={{ backgroundImage: `url(${aboutHeroImage})`, backgroundSize: 'cover' }}>
        <div className='absolute bg-[#00000070] h-[479px] w-full z-10'>
        </div>
        <div className='h-[479px] flex items-center justify-center z-20'>
          <span className='text-white text-[65px] font-semibold text-center w-[614px] z-20 max-sm:text-[30px]'>{t('about.aboutTextHero')}</span>
        </div>
      </div>


      <div className='flex justify-between mx-[40px] mt-[114px]  max-sm:mx-[15px]  max-sm:mt-[20px]'>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-[20px]'>
            <h1 data-aos="fade-up" data-aos-duration="500" className='text-[30px] text-white'>{t('about.aboutText2')}</h1>
            <span data-aos="fade-up" data-aos-duration="700" className='text-[30px] text-white  max-sm:text-[18px]'>{t('about.aboutTextPrgf')}</span>
          </div>
          <div className='mt-[30px]'>
            <ol>
              <li data-aos="fade-up" data-aos-duration="900" className='flex gap-2 items-center text-white max-sm:text-[20px] text-[30px]'><div className='w-[12px] h-[12px] bg-white rounded-full'></div>{t('about.titleAboutUsList1')}</li>
              <li data-aos="fade-up" data-aos-duration="1100" className='flex gap-2 items-center text-white max-sm:text-[20px] text-[30px]'><div className='w-[12px] h-[12px] bg-white rounded-full'></div>{t('about.titleAboutUsList2')}</li>
              <li data-aos="fade-up" data-aos-duration="1300" className='flex gap-2 items-center text-white max-sm:text-[20px] text-[30px]'><div className='w-[12px] h-[12px] bg-white rounded-full'></div>{t('about.titleAboutUsList3')}</li>
            </ol>
          </div>
          <div className='mt-[50px] flex flex-col gap-[37px]'>
            <h1 data-aos="fade-up" data-aos-duration="1300" className='text-white font-black text-[30px]'>{t('about.aboutText3')}</h1>
            <p data-aos="fade-up" data-aos-duration="1300" className='text-white font-medium text-[30px]  max-sm:text-[18px]'>{t('about.abouaboutTextPrgf2')}</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-[50px]'>
        <div className='flex gap-[102px] max-sm:flex-wrap max-sm:justify-center max-sm:gap-[50px]'>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center' data-aos="zoom-in-right">
              <img className='w-[200px] h-[180px] md:w-[150px] md:h-[130px]  max-sm:h-[130px] max-sm:w-[150px]' src={pricetags} />
              <span className='text-white text-[30px] font-extrabold md:text-[20px] max-sm:text-[20px]'>{t('about.aboutTextCard1')}</span>
            </div>
            <div className='flex flex-col items-center' data-aos="zoom-in-right">
              <img className='w-[200px] h-[180px] md:w-[150px] md:h-[130px] max-sm:h-[130px] max-sm:w-[150px]' src={caravan} />
              <span className='text-white text-[30px] font-extrabold md:text-[20px]  max-sm:text-[20px]'>{t('about.aboutTextCard2')}</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center' data-aos="zoom-in-left">
              <img className='w-[200px] h-[180px] md:w-[150px] md:h-[130px] max-sm:h-[130px] max-sm:w-[150px]' src={bulding} />
              <span className='text-white text-[30px] font-extrabold md:text-[20px]  max-sm:text-[20px]'>{t('about.aboutTextCard3')}</span>
            </div>
            <div className='flex flex-col items-center' data-aos="zoom-in-left">
              <img className='w-[200px] h-[180px] md:w-[150px] md:h-[130px] max-sm:h-[130px] max-sm:w-[150px]' src={arrowCircle} />
              <span className='text-white text-[30px] font-extrabold md:text-[20px]  max-sm:text-[20px]'>{t('about.aboutTextCard4')}</span>
            </div>
          </div>
        </div>
      </div>


      <div className='h-[605px] relative mt-[40px]  flex flex-col  justify-center gap-6' style={{ backgroundImage: `url(${aboutUs})`, backgroundRepeat: 'repeat', width: '100%', backgroundSize: 'cover' }}>
        <div className='absolute bg-[#0000009e] h-[605px] w-full z-10'>
        </div>
        <div className=' flex flex-col gap-[17px] px-[40px] z-20 max-sm:px-[16px]'>
          <h1 data-aos="fade-up" className='text-[30px] font-black text-white z-20 max-sm:text-[20px]'>{t('about.aboutTitleDown')}</h1>
          <span data-aos="fade-up" className='text-white text-[30px] font-semibold z-20 md:text-[20px] max-sm:text-[16px]'> {t('about.aboutTitleDownPrgf')}</span>
        </div>
        <div className=' flex flex-col gap-[17px]  px-[40px] z-20 max-sm:px-[16px]'>
          <h1 data-aos="fade-up" className='text-[30px] font-black text-white z-20 max-sm:text-[20px]'>{t('about.aboutTitleDown2')}</h1>
          <span data-aos="fade-up" className='text-white text-[30px] font-semibold z-20 md:text-[20px] max-sm:text-[16px]'> {t('about.aboutTitleDownPrgf2')}</span>
        </div>
      </div>
    </div>
  )
}
