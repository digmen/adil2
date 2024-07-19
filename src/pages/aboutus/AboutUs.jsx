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
      <div className='mt-[125px]'>
        <div className='h-[200px]' style={{ backgroundImage: `url(${aboutHeroImage})`, backgroundSize: 'cover' }}>
          <div className='h-[200px] flex items-center px-[40px]  z-20'>
            <span className='text-white text-[55px] font-black text-center z-20 max-sm:text-[30px]'>{t('about.aboutTextHero')}</span>
          </div>
        </div>

        <div className='px-[40px] mt-[40px]'>
          <div className='flex justify-between'>
            <div className='w-[636px]'>
              <h1 className='text-[32px] font-bold'>{t('about.ourMission.title')}</h1>
              <p className='text-[18px] font-normal'>{t('about.ourMission.description')}</p>
            </div>
            <div className='w-[531px] h-[246px]'>
              <img className='w-[531px] h-[246px]' src={aboutImgOne} alt='about img' />
            </div>
          </div>
        </div>

        <div className='px-[40px] mt-[100px]'>
          <div className='flex flex-row-reverse justify-between'>
            <div className='w-[636px]'>
              <h1 className='text-[32px] font-bold'>{t('about.ourPhilosophy.title')}</h1>
              <p className='text-[18px] font-normal'>{t('about.ourPhilosophy.description')}</p>
            </div>
            <div className='w-[531px] h-[204px]'>
              <img className='w-[531px] h-[204px]' src={aboutImgTwo} alt='about img' />
            </div>
          </div>
        </div>

        <div className='mt-[60px] px-[40px] flex flex-col'>
          <div className='flex justify-center'>
            <h1 className='text-[32px] font-bold'>{t('about.ourValues.title')}</h1>
          </div>
          <div className='mt-[30px] flex flex-wrap justify-center gap-[30px]'>
            <div className='w-[350px] h-[253px] bg-[#CBCBCB] rounded-[25px] flex justify-center items-center'>
              <div className='px-[50px] flex flex-col gap-[10px]'>
                <h1 className='font-bold text-[26px]'>{t('about.ourValues.dynamism.title')}</h1>
                <span className='font-light text-[16px]'>{t('about.ourValues.dynamism.description')}</span>
              </div>
            </div>
            <div className='w-[350px] h-[253px] bg-[#CBCBCB] rounded-[25px] flex justify-center items-center'>
              <div className='px-[50px] flex flex-col gap-[10px]'>
                <h1 className='font-bold text-[26px]'>{t('about.ourValues.innovation.title')}</h1>
                <span className='font-light text-[16px]'>{t('about.ourValues.innovation.description')}</span>
              </div>
            </div>
            <div className='w-[350px] h-[253px] bg-[#CBCBCB] rounded-[25px] flex justify-center items-center'>
              <div className='px-[50px] flex flex-col gap-[10px]'>
                <h1 className='font-bold text-[26px]'>{t('about.ourValues.passionForEcommerce.title')}</h1>
                <span className='font-light text-[16px]'>{t('about.ourValues.passionForEcommerce.description')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='px-[40px] mt-[100px] bg-[#FFCE33]'>
          <div className='flex justify-between py-[50px]'>
            <div className='w-[636px] flex flex-col gap-[20px]'>
              <h1 className='text-[32px] font-bold'>{t('about.ourStory.title')}</h1>
              <p className='text-[18px] font-normal'>{t('about.ourStory.description')}</p>
            </div>
            <div className='w-[531px] h-[246px]'>
              <img className='w-[531px] h-[246px]' src={aboutImgThree} alt='about img' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
