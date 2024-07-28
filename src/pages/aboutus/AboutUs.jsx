import React, { useEffect } from 'react'

import aboutHeroImage from './images/abouthero.png'
import aboutImgOne from './images/aboutimgone.png'
import aboutImgTwo from './images/aboutimgtwo.png'
import aboutImgThree from './images/aboutimgthree.png'

import { useTranslation } from 'react-i18next'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../components/Footer'


export default function AboutUs() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      easing: 'ease', // функция сглаживания анимации
      mirror: false, // запуск анимации при прокрутке назад
    });
  }, []);

  return (
    <>
      <div className='mt-[125px] max-sm:mt-[100px]'>
        <div className='h-[200px] md:h-[150px] max-md:h-[100px] max-sm:h-[80px]' style={{ backgroundImage: `url(${aboutHeroImage})`, backgroundSize: 'cover' }}>
          <div className='h-[200px] md:h-[150px] max-md:h-[100px] max-sm:h-[80px] flex items-center px-[40px] max-sm:px-4  z-20'>
            <span className='text-white text-[55px] font-black text-center z-20 max-sm:text-[30px]'>{t('about.aboutTextHero')}</span>
          </div>
        </div>

        <div className='px-[40px] mt-[40px] max-sm:px-4'>
          <div className='flex justify-between items-center gap-4 max-md:flex-col'>
            <div className='w-[636px] md:w-[350px] max-md:w-full'>
              <h1 className='text-[32px] font-bold md:text-[24px] max-md:text-[20px]'>{t('about.ourMission.title')}</h1>
              <p className='text-[18px] font-normal md:text-[14px] max-md:text-[14px]'>{t('about.ourMission.description')}</p>
            </div>
            <div className='lg:w-[531px] lg:h-[240px] md:h-[180px] max-md:w-[340px] max-sm:w-[288px]'>
              <img className='lg:w-[531px] lg:h-[240px] md:h-[180px] max-md:w-[340px] max-sm:w-[288px]' src={aboutImgOne} alt='about img' />
            </div>
          </div>
        </div>

        <div className='px-[40px] mt-[100px] max-sm:px-4'>
          <div className='flex flex-row-reverse items-center gap-4 justify-between max-md:flex-col'>
            <div className='w-[636px] md:w-[400px] max-md:w-full'>
              <h1 className='text-[32px] font-bold md:text-[24px] max-md:text-[20px]'>{t('about.ourPhilosophy.title')}</h1>
              <p className='text-[18px] font-normal md:text-[14px] max-md:text-[14px]'>{t('about.ourPhilosophy.description')}</p>
            </div>
            <div className='lg:w-[531px] lg:h-[200px] md:h-[180px]'>
              <img className='lg:w-[531px] lg:h-[200px] md:h-[180px]' src={aboutImgTwo} alt='about img' />
            </div>
          </div>
        </div>

        <div className='mt-[60px] px-[40px] flex flex-col max-sm:px-4'>
          <div className='flex justify-center'>
            <h1 className='text-[32px] font-bold'>{t('about.ourValues.title')}</h1>
          </div>
          <div className='mt-[30px] flex flex-wrap justify-center gap-[30px]'>
            <div className='w-[350px] h-[253px] bg-[#CBCBCB] rounded-[25px] flex items-start'>
              <div className='p-[25px] flex flex-col gap-[10px]'>
                <h1 className='font-bold text-[26px]'>{t('about.ourValues.dynamism.title')}</h1>
                <span className='font-light text-[16px]'>{t('about.ourValues.dynamism.description')}</span>
              </div>
            </div>
            <div className='w-[350px] h-[253px] bg-[#CBCBCB] rounded-[25px] flex items-start'>
              <div className='p-[25px] flex flex-col gap-[10px]'>
                <h1 className='font-bold text-[26px]'>{t('about.ourValues.innovation.title')}</h1>
                <span className='font-light text-[16px]'>{t('about.ourValues.innovation.description')}</span>
              </div>
            </div>
            <div className='w-[350px] h-[253px] bg-[#CBCBCB] rounded-[25px] flex items-start'>
              <div className='p-[25px] flex flex-col gap-[10px]'>
                <h1 className='font-bold text-[26px]'>{t('about.ourValues.passionForEcommerce.title')}</h1>
                <span className='font-light text-[16px]'>{t('about.ourValues.passionForEcommerce.description')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='px-[40px] mt-[100px] bg-[#FFCE33] max-sm:px-4'>
          <div className='flex justify-between items-center gap-3 py-[50px] max-md:flex-col '>
            <div className='w-[600px] md:w-[400px] flex flex-col gap-[20px] max-md:w-full'>
              <h1 className='text-[32px] font-bold md:text-[24px] max-md:text-[20px]'>{t('about.ourStory.title')}</h1>
              <p className='text-[18px] font-normal md:text-[14px] max-md:text-[14px]'>{t('about.ourStory.description')}</p>
            </div>
            <div className='lg:w-[531px] lg:h-[246px] md:h-[180px]'>
              <img className='lg:w-[531px] lg:h-[246px] md:h-[180px]' src={aboutImgThree} alt='about img' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
