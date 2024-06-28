import React from 'react'

import productHero from './images/producthero.png'

import pricetags from './images/pricetags-sharp.png'
import caravan from './images/caravan-fill.png'
import bulding from './images/building-4-fill.png'
import arrowCircle from './images/arrow-down-circle-fill.png'


import productOne from './images/productone.png'
import productTwo from './images/producttwo.png'
import productThree from './images/productthere.png'
import { useTranslation } from 'react-i18next'

export default function Product() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className='h-[479px] relative' style={{ backgroundImage: `url(${productHero})`, backgroundSize: 'cover' }}>
        <div className='absolute bg-[#00000070] h-[479px] w-full z-10'>
        </div>
        <div className='h-[479px] flex items-center justify-center z-20'>
          <span className='text-white text-[65px] font-semibold text-center w-[614px] z-20'>{t('product.productHeroTitle')}</span>
        </div>
      </div>

      <div className='flex flex-col justify-center mt-[50px] mx-[95px] max-sm:mx-[10px] max-sm:justify-center'>
        <h1 className='text-white font-black text-[35px]'>{t('product.productTitle2')}</h1>
        <div className='flex justify-between lg:flex-wrap lg:justify-center lg:gap-7 md:flex-wrap md:gap-9 md:justify-center max-sm:flex-wrap max-sm:justify-center max-sm:gap-9'>
          <div className='mt-[30px]'>
            <ol className='w-[400px] flex-col flex gap-2 lg:w-full md:w-full   max-sm:w-[330px]'>
              <li className='flex gap-2 items-center text-white text-[30px] font-medium max-sm:text-[20px]'><div className='w-[18px] h-[18px] min-w-[18px] min-h-[18px] bg-white rounded-full'></div>{t('product.productList1')}</li>
              <li className='flex gap-2 items-center text-white text-[30px] font-medium max-sm:text-[20px]'><div className='w-[18px] h-[18px] min-w-[18px] min-h-[18px] bg-white rounded-full'></div>{t('product.productList2')}</li>
              <li className='flex gap-2 items-center text-white text-[30px] font-medium max-sm:text-[20px]'><div className='w-[18px] h-[18px] min-w-[18px] min-h-[18px] bg-white rounded-full'></div>{t('product.productList3')}</li>
              <li className='flex gap-2 items-center text-white text-[30px] font-medium max-sm:text-[20px]'><div className='w-[18px] h-[18px] min-w-[18px] min-h-[18px] bg-white rounded-full'></div>{t('product.productList4')}</li>
            </ol>
          </div>
          <div className='flex gap-[102px] max-sm:flex-wrap max-sm:justify-center max-sm:gap-[30px]'>
            <div className='flex flex-col justify-around'>
              <div className='flex flex-col items-center'>
                <img className='w-[200px] h-[180px] md:w-[150px] md:h-[130px] max-sm:w-[150px] max-sm:h-[130px]' src={pricetags} />
                <span className='text-white text-[30px] font-extrabold md:text-[18px] max-sm:text-[14px]'>{t('product.productCardText1')}</span>
              </div>
              <div className='flex flex-col items-center'>
                <img className='w-[200px] h-[180px] md:w-[150px] md:h-[130px] max-sm:w-[150px] max-sm:h-[130px]' src={caravan} />
                <span className='text-white text-[30px] font-extrabold md:text-[18px] max-sm:text-[14px]'>{t('product.productCardText2')}</span>
              </div>
            </div>
            <div className='flex flex-col justify-around'>
              <div className='flex flex-col items-center'>
                <img className='w-[200px] h-[180px] md:w-[150px] md:h-[130px] max-sm:w-[150px] max-sm:h-[130px]' src={bulding} />
                <span className='text-white text-[30px] font-extrabold md:text-[18px] max-sm:text-[14px]'>{t('product.productCardText3')}</span>
              </div>
              <div className='flex flex-col items-center'>
                <img className='w-[200px] h-[180px] md:w-[150px] md:h-[130px] max-sm:w-[150px] max-sm:h-[130px]' src={arrowCircle} />
                <span className='text-white text-[30px] font-extrabold md:text-[18px] max-sm:text-[14px]'>{t('product.productCardText4')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex items-center flex-col mt-[100px] gap-[87px]'>
        <div className='flex gap-[40px] max-sm:flex-col max-sm:items-center'>
          <div>
            <img className='w-[400px] h-[400px] md:w-[300px] md:h-[300px]' src={productOne} />
          </div>
          <div className='flex flex-col w-[660px] gap-[52px] lg:w-[400px] md:w-[300px] max-sm:w-[330px] '>
            <h1 className='text-white text-[35px] font-black lg:text-[25px] md:text-[20px]'>{t('product.productCardTitle1')}</h1>
            <p className='text-white text-[30px] font-medium lg:text-[20px] md:text-[16px] max-sm:text-[18px]'>{t('product.productCardTextPrgf1')}</p>
          </div>
        </div>
        <div className='flex gap-[40px] max-sm:flex-col max-sm:items-center'>
          <div>
            <img className='w-[400px] h-[400px] md:w-[300px] md:h-[300px]' src={productTwo} />
          </div>
          <div className='flex flex-col w-[660px] gap-[52px] lg:w-[400px] md:w-[300px]  max-sm:w-[330px]'>
            <h1 className='text-white text-[35px] font-black lg:text-[25px] md:text-[20px]'>{t('product.productCardTextPrgf2')}</h1>
            <p className='text-white text-[30px] font-medium  lg:text-[20px] md:text-[16px] max-sm:text-[18px]'>{t('product.productCardTextPrgf2')}</p>
          </div>
        </div>
        <div className='flex gap-[40px] max-sm:flex-col max-sm:items-center'>
          <div>
            <img className='w-[400px] h-[400px] md:w-[300px] md:h-[300px]' src={productThree} />
          </div>
          <div className='flex flex-col w-[660px] gap-[52px] lg:w-[400px] md:w-[300px]  max-sm:w-[330px]'>
            <h1 className='text-white text-[35px] font-black lg:text-[25px] md:text-[20px]'>{t('product.productCardTitle3')}</h1>
            <p className='text-white text-[30px] font-medium  lg:text-[20px] md:text-[16px] max-sm:text-[18px]'>{t('product.productCardTextPrgf3')}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-[37px] mb-[68px]'>
        <div className='flex flex-col items-center w-[1000px] gap-[67px] lg:w-[800px] md:w-[500px] max-sm:w-[330px]'>
          <span className='text-white font-medium text-[30px] lg:text-[25px] md:text-[20px] max-sm:text-[18px]'>{t('product.productDownTitle1')}</span>
          <span className='text-white font-medium text-[30px] lg:text-[25px] md:text-[20px] max-sm:text-[18px]'>{t('product.productDownTitle2')}</span>
        </div>
      </div>
    </div>
  )
}
