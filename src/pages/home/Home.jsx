import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';


import homeImage from './images/home.png';
import homeImage2 from './images/homeendbg.png';

import brendImg1 from './images/samsung.png'
import brendImg2 from './images/lg.png'
import brendImg3 from './images/philips.png'
import brendImg4 from './images/mi.png'
import brendImg5 from './images/beko.png'

import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            delay: 200, // задержка перед началом анимации (в миллисекундах)
            duration: 700, // длительность анимации (в миллисекундах)
            easing: 'ease', // функция сглаживания анимации
            mirror: false, // запуск анимации при прокрутке назад
        });
    }, []);
    return (
        <>
            <div className='mt-[125px] max-sm:mt-[100px]'>
                <div className='h-[700px] relative md:h-[600px] max-[375px]:h-[450px] max-sm:h-[400px]' style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover' }}>
                    <div className='absolute w-full h-full bg-gradient-to-t from-[#00000069] via-[#000000bc] to-[#00000069]'></div>
                    <div className='xl:w-[770px] lg:w-[770px] max-sm:w-[300px] min-[375px]:w-[375px] md:w-[600px] max-sm:px-4 h-full flex flex-col justify-center px-[40px] z-20'>
                        <span className='text-white text-[55px] font-bold  z-20 max-sm:text-[24px]'>{t('home.homeTextHero')}</span>
                        <span className='text-white text-[29px] mt-[25px] font-bold z-20 xl:w-[768px] lg:w-[770px] md:w-[600px] max-sm:text-[24px] max-sm:w-[270px] min-[375px]:w-[300px]'>{t('home.homeTextHeroPrg')}</span>
                        <Link to='/contact' className='text-white bg-[#FFCE33] mt-[40px] rounded-[25px] w-[270px] text-[31px] font-bold text-center z-20 max-sm:text-[24px] max-sm:w-[250px]'>{t('home.homeTextHeroBtn')}</Link>
                    </div>
                </div>

                <div className='flex justify-center px-[40px] mt-[50px] max-sm:px-4'>
                    <div className='flex justify-around w-full max-md:flex-col'>
                        <div className='flex flex-col items-center'>
                            <span className='text-[52px] font-black flex'>300 000 <strong className='text-[#FFCE33] text-[52px] font-black'>+</strong></span>
                            <span className='text-[26px] font-normal'>{t('home.stats.items')}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-[52px] font-black flex'>9 000 <strong className='text-[#FFCE33] text-[52px] font-black'>+</strong></span>
                            <span className='text-[26px] font-normal'>{t('home.stats.brands')}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-[52px] font-black flex'>10 000 <strong className='text-[#FFCE33] text-[52px] font-black'>+</strong></span>
                            <span className='text-[26px] font-normal'>{t('home.stats.clients')}</span>
                        </div>
                    </div>
                </div>

                <div className='mt-[60px] px-[40px] max-sm:px-4 flex flex-col'>
                    <div className='flex justify-center'>
                        <h1 className='text-[32px] font-bold'>{t('home.products.title')}</h1>
                    </div>
                    <div className='mt-[30px] flex flex-wrap justify-center gap-[30px]'>
                        <div className='w-[293px] h-[370px] bg-[#CBCBCB] rounded-[25px]'>
                            <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                                <h1 className='font-bold text-[26px]'>{t('home.products.categories.carAndMotorbike.title')}</h1>
                                <span className='font-light text-[16px]'>{t('home.products.categories.carAndMotorbike.description')}</span>
                            </div>
                        </div>
                        <div className='w-[293px] h-[370px] bg-[#CBCBCB] rounded-[25px]'>
                            <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                                <h1 className='font-bold text-[26px]'>{t('home.products.categories.electronics.title')}</h1>
                                <span className='font-light text-[16px]'>{t('home.products.categories.electronics.description')}</span>
                            </div>
                        </div>
                        <div className='w-[293px] h-[370px] bg-[#CBCBCB] rounded-[25px]'>
                            <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                                <h1 className='font-bold text-[26px]'>{t('home.products.categories.diyAndTools.title')}</h1>
                                <span className='font-light text-[16px]'>{t('home.products.categories.diyAndTools.description')}</span>
                            </div>
                        </div>
                        <div className='w-[293px] h-[370px] bg-[#CBCBCB] rounded-[25px]'>
                            <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                                <h1 className='font-bold text-[26px]'>{t('home.products.categories.clothing.title')}</h1>
                                <span className='font-light text-[16px]'>{t('home.products.categories.clothing.description')}</span>
                            </div>
                        </div>
                        <div className='w-[293px] h-[370px] bg-[#CBCBCB] rounded-[25px]'>
                            <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                                <h1 className='font-bold text-[26px]'>{t('home.products.categories.computing.title')}</h1>
                                <span className='font-light text-[16px]'>{t('home.products.categories.computing.description')}</span>
                            </div>
                        </div>
                        <div className='w-[293px] h-[370px] bg-[#CBCBCB] rounded-[25px]'>
                            <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                                <h1 className='font-bold text-[26px]'>{t('home.products.categories.textile.title')}</h1>
                                <span className='font-light text-[16px]'>{t('home.products.categories.textile.description')}</span>
                            </div>
                        </div>
                        <div className='w-[293px] h-[370px] bg-[#CBCBCB] rounded-[25px]'>
                            <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                                <h1 className='font-bold text-[26px]'>{t('home.products.categories.houseAppliances.title')}</h1>
                                <span className='font-light text-[16px]'>{t('home.products.categories.houseAppliances.description')}</span>
                            </div>
                        </div>
                        <div className='w-[293px] h-[370px] bg-[#CBCBCB] rounded-[25px]'>
                            <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                                <h1 className='font-bold text-[26px]'>{t('home.products.categories.foodProducts.title')}</h1>
                                <span className='font-light text-[16px]'>{t('home.products.categories.foodProducts.description')}</span>
                            </div>
                        </div>
                    </div>
                    <div className='px-[40px] max-sm:px-4 flex justify-center'>
                        <Link to='/product' className='text-black bg-[#FFCE33] mt-[40px] rounded-[25px] w-[230px] text-[29px] font-bold text-center z-20 max-sm:text-[30px] max-sm:w-[300px]'>{t('home.products.moreBtn')}</Link>
                    </div>
                </div>

                <div className='bg-[#CBCBCB] px-[40px] max-sm:px-4 my-[70px]'>
                    <div className='flex justify-between py-[46px]'>
                        <div className='flex justify-center items-center'>
                            <img src={brendImg1} alt={t('home.brands.brend1')} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={brendImg2} alt={t('home.brands.brend2')} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={brendImg3} alt={t('home.brands.brend3')} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={brendImg4} alt={t('home.brands.brend4')} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={brendImg5} alt={t('home.brands.brend5')} />
                        </div>
                    </div>
                </div>

                <div className='h-[518px] w-full' style={{ backgroundImage: `url(${homeImage2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className='w-[768px] max-sm:px-4 max-sm:w-full max-sm:items-center max-md:w-[400px] h-full flex flex-col justify-center px-[40px] z-20'>
                        <span className='text-white text-[32px] font-bold  z-20 max-sm:text-[32px]'>{t('home.aboutUs.title')}</span>
                        <span className='text-white text-[24px] mt-[25px] font-medium z-20 max-sm:text-[18px] max-sm:w-full'>{t('home.aboutUs.description')}</span>
                        <Link className='text-white bg-[#FFCE33] mt-[40px] rounded-[25px] w-[230px] text-[25px] font-bold text-center z-20 max-sm:text-[25px] max-sm:w-[300px]'>{t('home.aboutUs.learnMoreBtn')}</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
