import React, { useEffect } from 'react'

import contactUsImg from './images/contuctusimg.png'
import { useTranslation } from 'react-i18next';


import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Contact() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      easing: 'ease', // функция сглаживания анимации
      mirror: false, // запуск анимации при прокрутке назад
    });
  }, []);

  return (
    <div>
      <div className='px-[40px] mb-[100px]'>
        <h1 className='text-[140px] text-center font-bold'>{t('contact.contactTextHero')}</h1>
        <div className='flex justify-around -translate-y-14'>
          {t('contact.methods', { returnObjects: true }).map((method, index) => (
            <div key={index} className={`bg-[${method.color}] w-[390px] h-[500px] p-[30px] rounded-[25px] flex flex-col items-center ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'}`}>
              <h2 className='font-bold text-[50px]'>{method.title}</h2>
              <span className={`font-light ${method.title === 'TELEPHONE' ? 'text-[40px]' : 'text-[34px]'}`}>{method.details}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
