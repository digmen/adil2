import React, { useEffect } from 'react'

import serviceHero from './images/serviceimg.png'
import { useTranslation } from 'react-i18next';

import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Service() {
  const { t, i18n } = useTranslation();


  useEffect(() => {
    AOS.init({
      easing: 'ease', // функция сглаживания анимации
      mirror: false, // запуск анимации при прокрутке назад
    });
  }, []);

  return (
    <div>

      <div className='h-[479px] relative' style={{ backgroundImage: `url(${serviceHero})`, backgroundSize: 'cover' }}>
        <div className='absolute bg-[#00000070] h-[479px] w-full z-10'>
        </div>
        <div className='h-[479px] flex items-center justify-center z-20'>
          <span className='text-white text-[65px] font-semibold text-center w-[614px] z-20 max-sm:text-[30px]'>{t('service.serviceHeroTitle')}</span>
        </div>
      </div>


      <div className='flex justify-center mt-[83px] mx-[40px] max-sm:mx-[15px]'>
        <div data-aos="flip-up" className='flex justify-center items-center'>
          <span className='font-medium text-white text-[30px] text-center  max-sm:text-[20px] '>{t('service.CardTitle')}</span>
        </div>
      </div>


      <div className='flex justify-center flex-wrap gap-[20px] mt-[32px] mb-[62px]'>
        <div className='flex'>
          <div data-aos="flip-right" data-aos-duration="1000" className='max-sm:w-[330px] w-[516px] h-[335px] rounded-[20px] bg-[#828282] flex items-center justify-center flex-col gap-[60px]'>
            <h1 className='font-medium text-[30px] text-white text-center max-sm:text-[20px]'>{t('service.CardTitle2')}</h1>
            <span className='font-semibold text-[20px] text-white w-[480px] text-center max-sm:w-[300px]'>{t('service.CardPrgf1')}</span>
          </div>
        </div>
        <div>
          <div data-aos="flip-left" data-aos-duration="1000" className='max-sm:w-[330px] w-[516px] h-[335px] rounded-[20px] bg-[#828282] flex items-center justify-center flex-col gap-[60px]'>
            <h1 className='font-medium text-[30px] text-white text-center max-sm:text-[20px]'>{t('service.CardTitle3')}</h1>
            <span className='font-semibold text-[20px] text-white w-[480px] text-center max-sm:w-[300px]'>{t('service.CardPrgf2')}</span>
          </div>
        </div>
        <div>
          <div data-aos="flip-right" data-aos-duration="1000" className='max-sm:w-[330px] w-[516px] h-[335px] rounded-[20px] bg-[#828282] flex items-center justify-center flex-col gap-[60px]'>
            <h1 className='font-medium text-[30px] text-white text-center max-sm:w-[300px] max-sm:text-[20px]'>{t('service.CardTitle4')}</h1>
            <ul>
              <li className='text-white text-[20px] font-semibold'>{t('service.CardList1')}</li>
              <li className='text-white text-[20px] font-semibold'>{t('service.CardList2')}</li>
              <li className='text-white text-[20px] font-semibold'>{t('service.CardList3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
