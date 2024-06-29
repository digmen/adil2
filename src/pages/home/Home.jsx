import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


import homeImage from './images/home.png';
import homeImageTwo from './images/hometwo.png';

import homeCardImgOne from './images/homecardone.png'
import homeCardImgTwo from './images/homecardtwo.png'
import homeCardImgThere from './images/homecardthere.png'

import homeAboutUsImg from './images/homeaboutus.png'
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        AOS.init({
            delay: 200, // задержка перед началом анимации (в миллисекундах)
            duration: 700, // длительность анимации (в миллисекундах)
            easing: 'ease', // функция сглаживания анимации
            mirror: false, // запуск анимации при прокрутке назад
        });
    }, []);
    return (
        <div>
            <div className='h-[479px] relative' style={{ backgroundImage: `url(${homeImage})` }}>
                <div className='absolute bg-[#00000070] h-[479px] w-full z-10'>
                </div>
                <div className='h-[479px] flex items-center justify-center z-20'>
                    <span className='text-white text-[34px] font-semibold text-center w-[614px] z-20 max-sm:text-[30px] max-sm:w-[300px]'>{t('home.homeTextHero')}</span>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='mt-[20px] text-white text-[40px] font-extrabold'>{t('home.titleProduct')}</h1>
                <div className='flex gap-[74px] mt-[52px] lg:gap-9 lg:mx-6 md:mx-3 md:gap-3 max-sm:flex-wrap max-sm:justify-center'>
                    <div className='flex flex-col items-center gap-3' data-aos="fade-right">
                        <img src={homeCardImgOne} alt='home one card photo' className='w-[350px] h-[250px]' />
                        <span className='text-[30px] font-medium text-white md:text-[20px]'>{t('home.homeProductCardOne')}</span>
                    </div>
                    <div className='flex flex-col items-center gap-3' data-aos="fade-up">
                        <img src={homeCardImgTwo} alt='home one card photo' className='w-[350px] h-[250px]' />
                        <span className='text-[30px] font-medium text-white md:text-[20px]'>{t('home.homeProductCardTWo')}</span>
                    </div>
                    <div className='flex flex-col items-center gap-3' data-aos="fade-left">
                        <img src={homeCardImgThere} alt='home one card photo' className='w-[350px] h-[250px]' />
                        <span className='text-[30px] font-medium text-white md:text-[20px]'>{t('home.homeProductCardThree')}</span>
                    </div>
                </div>
                <Link className='mt-[52px] bg-[#828282] px-[70px] py-[7px] rounded-[67px] text-white text-[30px] font-medium max-sm:text-[20px]' to='/product' data-aos="fade-up">{t('home.btn1')}</Link>
            </div>

            <div className='flex justify-between mx-[125px] mt-[114px] lg:mx-[100px] md:mx-[40px] max-sm:mx-[10px] max-sm:flex-wrap max-sm:justify-center'>
                <div className='w-[571px] flex flex-col'>
                    <div className='flex flex-col gap-[20px]'>
                        <h1 className='text-[30px] text-white' data-aos="fade-down">{t('home.titleAboutUs')}</h1>
                        <span className='text-[30px] text-white md:text-[20px] max-sm:text-[16px]' data-aos="fade-down">{t('home.titleAboutUsPrgf')}</span>
                    </div>
                    <div className='mt-[30px]'>
                        <ol>
                            <li data-aos="fade-down" className='flex gap-2 items-center text-white max-sm:text-[16px]'><div className='w-[12px] h-[12px] bg-white rounded-full'></div>{t('home.titleAboutUsList1')}</li>
                            <li data-aos="fade-down" className='flex gap-2 items-center text-white max-sm:text-[16px]'><div className='w-[12px] h-[12px] bg-white rounded-full'></div>{t('home.titleAboutUsList2')}</li>
                            <li data-aos="fade-down" className='flex gap-2 items-center text-white max-sm:text-[16px]'><div className='w-[12px] h-[12px] bg-white rounded-full'></div>{t('home.titleAboutUsList3')}</li>
                        </ol>
                    </div>
                    <div className='mt-[50px] max-sm:flex max-sm:justify-center'>
                        <Link data-aos="fade-down" className='max-sm:text-[20px] max-sm:mt-0 max-sm:mb-[20px] mt-[52px] bg-[#828282] px-[70px] py-[7px] rounded-[67px] text-white text-[30px] font-medium' to='/about'>{t('home.btn2')}</Link>
                    </div>
                </div>
                <img data-aos="fade-down" src={homeAboutUsImg} alt='homeAboutUsImg' />
            </div>

            <div className='h-[605px] relative mt-[40px]' style={{ backgroundImage: `url(${homeImageTwo})`, backgroundRepeat: 'repeat', width: '100%', backgroundSize: 'cover' }}>
                <div className='absolute bg-[#0000009e] h-[605px] w-full z-10'>
                </div>
                <div className='h-[605px] flex flex-col items-center justify-center z-20'>
                    <h1 data-aos="fade-left" className='text-[65px] font-extrabold text-white z-20 max-sm:text-[20px]'>{t('home.homeTitleDown')}</h1>
                    <span data-aos="fade-right" className='text-white text-[34px] font-semibold text-center w-[614px] mt-[108px] z-20 max-sm:text-[16px] max-sm:w-[330px]'>{t('home.homeTitleTextDown')}</span>
                    <Link data-aos="fade-up" className='max-sm:text-[20px] mt-[52px] bg-[#828282] px-[84px] py-[7px] rounded-[67px] text-white text-[30px] font-medium  z-20' to='/contact'>{t('home.btn3')}</Link>
                </div>
            </div>
        </div>
    )
}
