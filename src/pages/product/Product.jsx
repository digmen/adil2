import React, { useEffect } from 'react'

import productHero from './images/producthero.png'
import productImg from './images/productimg.png'

import { useTranslation } from 'react-i18next'

import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Product() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      easing: 'ease', // функция сглаживания анимации
      mirror: false, // запуск анимации при прокрутке назад
    });
  }, []);

  return (
    <div>
      <div className='h-[200px]' style={{ backgroundImage: `url(${productHero})`, backgroundSize: 'cover' }}>
        <div className='h-[200px] flex items-center px-[40px] z-20'>
          <span className='text-white text-[55px] font-black text-center z-20 max-sm:text-[30px]'>{t('product.productTextHero')}</span>
        </div>
      </div>

      <div className='px-[40px] bg-[#FFCE33]'>
        <div className='flex justify-between py-[50px]'>
          <div className='w-[670px] flex flex-col gap-[20px]'>
            <h1 className='text-[32px] font-bold'>{t('product.whyChooseUs.title')}</h1>
            <p className='text-[18px] font-normal'>{t('product.whyChooseUs.description')}</p>
            <ul className='list-disc pl-9 flex flex-col gap-3'>
              {t('product.whyChooseUs.qualities', { returnObjects: true }).map((quality, index) => (
                <li key={index}>{quality}</li>
              ))}
            </ul>
          </div>
          <div className='w-[458px] h-[306px]'>
            <img className='w-[458px] h-[306px]' src={productImg} alt='product img' />
          </div>
        </div>
      </div>

      <div className='mt-[60px] mb-[50px] px-[40px] flex flex-col'>
        <div className='flex justify-center'>
          <h1 className='text-[32px] font-bold'>{t('product.mostPopularProduction.title')}</h1>
        </div>
        <div className='mt-[30px] flex flex-wrap justify-center gap-[30px]'>
          {t('product.mostPopularProduction.categories', { returnObjects: true }).map((category, index) => (
            <div key={index} className='w-[293px] h-[253px] bg-[#CBCBCB] rounded-[25px]'>
              <div className='px-[30px] py-[22px] flex flex-col gap-[10px]'>
                <h1 className='font-bold text-[26px]'>{category.title}</h1>
                <ul className='list-disc pl-9 flex flex-col gap-3'>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
