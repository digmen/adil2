import React, { useEffect, useState } from 'react'


import { useTranslation } from 'react-i18next';


import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Contact() {
  const { t, i18n } = useTranslation();
  const [fontSIze, setFontSize] = useState('')


  useEffect(() => {
    AOS.init({
      easing: 'ease', // функция сглаживания анимации
      mirror: false, // запуск анимации при прокрутке назад
    });
  }, []);

  const getPositionCard = () => {
    return i18n.language === 'en' ? '24' : i18n.language === 'tr' ? '24' : '24';
  }




  return (
    <div className='mt-[125px] max-sm:mt-[80px] max-lg:mt-[80px]'>
      <div className='px-[40px] max-sm:px-4'>
        <div className={`text-center uppercase font-bold lg:text-[150px] md:text-[100px] max-sm:text-[30px]`}>
          {t('contact.contactTextHero')}
        </div>
        <div className='flex justify-center max-sm:mt-16 '>
          <div className={`flex max-sm:flex-col max-sm:items-center max-sm:gap-[60px] lg:gap-[80px] md:gap-10 max-sm:-translate-y-0 -translate-y-20`}>
            <div className='xl:w-[390px] xl:h-[500px] lg:w-[250px] lg:h-[350px] md:w-[200px] md:h-[260px] max-sm:w-[90%] bg-[#CBCBCB] p-[30px] rounded-[25px] flex flex-col items-center rotate-12'>
              <h2 className='font-bold xl:text-[50px] lg:text-[30px]'>{t('contact.cardOneTitle')}</h2>
              <div className='flex flex-1 justify-center items-center'>
                <span className='font-light xl:text-[20px] lg:text-[14px] md:text-[12px]'>{t('contact.cardEmail')}</span>
              </div>
            </div>
            <div className='xl:w-[390px] xl:h-[500px] lg:w-[250px] lg:h-[350px] md:w-[200px] md:h-[260px] max-sm:w-[90%] bg-[#FFCE33] p-[30px] rounded-[25px] flex flex-col items-center -rotate-12'>
              <h2 className='font-bold xl:text-[50px] lg:text-[30px] text-center'>{t('contact.cardTwoTitle')}</h2>
              <div className='flex flex-1 justify-center items-center'>
                <span className='font-light xl:text-[40px] lg:text-[18px]'>{t('contact.cardPhone')}</span>
              </div>
            </div>
            <div className='xl:w-[390px] xl:h-[500px] lg:w-[250px] lg:h-[350px] md:w-[200px] md:h-[260px] max-sm:w-[90%] bg-[#0090FF] p-[30px] rounded-[25px] flex flex-col items-center rotate-12'>
              <h2 className='font-bold xl:text-[50px] lg:text-[30px]'>{t('contact.cardThreeTitle')}</h2>
              <div className='flex flex-1 justify-center items-center'>
                <span className='font-light xl:text-[30px] lg:text-[18px]'>{t('contact.cardAdress')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
