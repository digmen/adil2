import React, { useEffect } from 'react'

import serviceHero from './images/serviceheroimg.png'
import serviceImg from './images/serviceimg.png'
import serviceDownBg from './images/servicebgdown.png'
import { useTranslation } from 'react-i18next';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../components/Footer';




export default function Service() {
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
        <div className='h-[200px]' style={{ backgroundImage: `url(${serviceHero})`, backgroundSize: 'cover' }}>
          <div className='h-[200px] flex items-center px-[40px] z-20'>
            <span className='text-white text-[55px] font-black text-center z-20 max-sm:text-[30px]'>{t('service.heroText')}</span>
          </div>
        </div>

        <div className='px-[40px]'>
          <div className='flex justify-between py-[50px]'>
            <div className='w-[670px] flex flex-col gap-[20px]'>
              <h1 className='text-[32px] font-bold'>{t('service.whyServiceBest.title')}</h1>
              <p className='text-[18px] font-normal'>{t('service.whyServiceBest.description')}</p>
              <ul className='list-disc pl-9 flex flex-col gap-3'>
                {t('service.whyServiceBest.points', { returnObjects: true }).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className='w-[597px] h-[448px]'>
              <img className='w-[597px] h-[448px]' src={serviceImg} alt='about img' />
            </div>
          </div>
        </div>

        <div className='mt-[60px] mb-[50px] px-[40px] flex flex-col'>
          <div className='flex justify-center'>
            <h1 className='text-[32px] font-bold'>{t('service.advantagesTitle')}</h1>
          </div>
          <div className='mt-[30px] flex flex-wrap justify-center gap-[30px]'>
            {t('service.advantages', { returnObjects: true }).map((advantage, index) => (
              <div key={index} className='w-[350px] bg-[#FFCE33] rounded-[25px]'>
                <div className='px-[30px] py-[22px] flex flex-col gap-[10px]'>
                  <h1 className='font-bold text-[26px]'>{advantage.title}</h1>
                  <span className='font-light text-[16px]'>{advantage.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='h-[862px] flex justify-center items-center' style={{ backgroundImage: `url(${serviceDownBg})`, backgroundSize: 'cover' }}>
          <div className='flex justify-center items-center w-[700px]'>
            <p className='text-[32px] font-medium text-center'>
              {t('service.goalText')}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
