import React, { useEffect } from 'react'


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

  // Determine the font size based on the current language
  const getFontSize = () => {
    return i18n.language === 'en' ? '200px' : i18n.language === 'tr' ? '200px' : '150px';
  };

  const getPositionCard = () => {
    return i18n.language === 'en' ? '24' : i18n.language === 'tr' ? '24' : '24';
  }

  return (
    <div className='mt-[125px]'>
      <div className='px-[40px] mb-[100px]'>
        <h1 className='text-center font-bold' style={{ fontSize: getFontSize() }}>
          {t('contact.contactTextHero')}
        </h1>
        <div className='flex justify-center '>
          <div className={`flex gap-[80px] -translate-y-${getPositionCard()}`}>
            {t('contact.methods', { returnObjects: true }).map((method, index) => (
              <div
                key={index}
                style={{ backgroundColor: method.color }}
                className={`w-[390px] h-[500px] p-[30px] rounded-[25px] flex flex-col items-center ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'}`}
              >
                <h2 className='font-bold text-[50px]'>{method.title}</h2>
                <div className='flex flex-1 justify-center items-center'>
                  <span className='font-light ' style={{ fontSize: `${method.textSize}px` }}>{method.details}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
