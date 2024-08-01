import React, { useEffect } from 'react'

import productHero from './images/producthero.png'
import productImg from './images/productimg.png'

import { useTranslation } from 'react-i18next'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../components/Footer';



export default function Product() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      easing: 'ease', // функция сглаживания анимации
      mirror: false, // запуск анимации при прокрутке назад
    });
  }, []);

  return (
    <>
      <div className='mt-[125px] max-sm:mt-[60px] max-lg:mt-[80px]'>
        <div className='h-[200px] md:h-[150px] max-md:h-[100px] max-sm:h-[80px]' style={{ backgroundImage: `url(${productHero})`, backgroundSize: 'cover' }}>
          <div className='h-[200px] md:h-[150px] max-md:h-[100px] max-sm:h-[80px] flex items-center px-[40px] max-sm:px-4  z-20'>
            <span className='text-white text-[55px] font-black text-center z-20 max-sm:text-[30px]'>{t('product.productTextHero')}</span>
          </div>
        </div>

        <div className='px-[40px] bg-[#FFCE33] max-sm:px-4'>
          <div className='flex justify-between  items-center py-[50px] max-sm:py-[20px] lg:flex-row md:flex-col md:gap-4 max-sm:flex-col max-sm:gap-6'>
            <div className='w-[670px] lg:w-[450px] max-sm:w-fit flex flex-col gap-[20px]'>
              <h1 className='text-[32px] max-sm:text-[24px] font-bold'>{t('product.whyChooseUs.title')}</h1>
              <p className='text-[18px] font-normal max-sm:text-[14px]'>{t('product.whyChooseUs.description')}</p>
              <ul className='list-disc pl-9 flex flex-col gap-3 max-sm:pl-4'>
                {t('product.whyChooseUs.qualities', { returnObjects: true }).map((quality, index) => (
                  <li key={index} className='max-sm:text-[14px]'>{quality}</li>
                ))}
              </ul>
            </div>
            <div className='w-[458px] h-[306px] max-sm:w-[300px] max-sm:h-[200px]'>
              <img className='w-[458px] h-[306px] max-sm:w-[300px] max-sm:h-[200px]' src={productImg} alt='product img' />
            </div>
          </div>
        </div>

        <div className='mt-[60px] mb-[50px] max-sm:px-4  px-[40px] flex flex-col'>
          <div className='flex justify-center'>
            <h1 className='text-[32px] font-bold'>{t('product.mostPopularProduction.title')}</h1>
          </div>
          <div className='mt-[30px] flex flex-wrap justify-center gap-[30px]'>
            {t('product.mostPopularProduction.categories', { returnObjects: true }).map((category, index) => (
              <div key={index} className='w-[293px] bg-[#CBCBCB] rounded-[25px]'>
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
      <Footer />
    </>
  )
}
