import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


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
            <div className='h-[700px] relative' style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover' }}>
                <div className='absolute w-full h-full bg-gradient-to-t from-[#00000069] via-[#000000bc] to-[#00000069]'></div>
                <div className='w-[780px] h-full flex flex-col justify-center px-[40px] z-20'>
                    <span className='text-white text-[55px] font-bold  z-20 max-sm:text-[30px]'>{t('home.homeTextHero')}</span>
                    <span className='text-white text-[29px] mt-[25px] font-bold  z-20 max-sm:text-[30px] max-sm:w-[300px]'>{t('home.homeTextHeroPrg')}</span>
                    <Link className='text-white bg-[#FFCE33] mt-[40px] rounded-[25px] w-[230px] text-[31px] font-bold text-center z-20 max-sm:text-[30px] max-sm:w-[300px]'>{t('home.homeTextHeroBtn')}</Link>
                </div>
            </div>

            <div className='flex justify-center px-[40px] mt-[50px]'>
                <div className='flex justify-between w-[1000px]'>
                    <div className='flex flex-col items-center'>
                        <span className='text-[52px] font-black'>300 000 <strong className='text-[#FFCE33] text-[52px] font-black'>+</strong></span>
                        <span className='text-[26px] font-normal'>Items</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-[52px] font-black'>9 000 <strong className='text-[#FFCE33] text-[52px] font-black'>+</strong></span>
                        <span className='text-[26px] font-normal'>Brands</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-[52px] font-black'>10 000 <strong className='text-[#FFCE33] text-[52px] font-black'>+</strong></span>
                        <span className='text-[26px] font-normal'>Glad Clients</span>
                    </div>
                </div>
            </div>

            <div className='mt-[60px] px-[40px] flex flex-col'>
                <div className='flex justify-center'>
                    <h1 className='text-[32px] font-bold'>Our Product</h1>
                </div>
                <div className='mt-[30px] flex flex-wrap justify-center gap-[30px]'>
                    <div className='w-[293px] h-[350px] bg-[#CBCBCB] rounded-[25px]'>
                        <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                            <h1 className='font-bold text-[26px]'>Car And Motorbike</h1>
                            <span className='font-light text-[16px]'>The repair and maintenance of cars and motorcycles requires high-quality spare parts and tools. The company [Company Name] provides everything you need to keep your transport in excellent condition. We guarantee high quality, a wide range and affordable prices for all products. Contact us for professional advice and selection of necessary spare parts.</span>
                        </div>
                    </div>
                    <div className='w-[293px] h-[350px] bg-[#CBCBCB] rounded-[25px]'>
                        <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                            <h1 className='font-bold text-[26px]'>Electronics</h1>
                            <span className='font-light text-[16px]'>Electronics for home and office greatly simplify our lives and increase comfort and productivity. The company [Company name] offers a wide range of high-quality and reliable products that will satisfy all your needs. Contact us for professional advice and selection of the necessary equipment.</span>
                        </div>
                    </div>
                    <div className='w-[293px] h-[350px] bg-[#CBCBCB] rounded-[25px]'>
                        <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                            <h1 className='font-bold text-[26px]'>DIY And Tools</h1>
                            <span className='font-light text-[16px]'>The company World Innovation Group offers a wide range of tools and materials for DIY projects. Here you will find everything you need for repairs, construction and creativity. We guarantee high quality, affordable prices and professional support. Contact us to make your DIY ideas a reality.</span>
                        </div>
                    </div>
                    <div className='w-[293px] h-[350px] bg-[#CBCBCB] rounded-[25px]'>
                        <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                            <h1 className='font-bold text-[26px]'>Clothing</h1>
                            <span className='font-light text-[16px]'>Our company offers a wide range of fashionable and high-quality clothing for all occasions and seasons. Here you will find everything you need to create the perfect wardrobe — from everyday items to elegant outfits. We guarantee high quality materials, a variety of styles and affordable prices. </span>
                        </div>
                    </div>
                    <div className='w-[293px] h-[350px] bg-[#CBCBCB] rounded-[25px]'>
                        <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                            <h1 className='font-bold text-[26px]'>Computing</h1>
                            <span className='font-light text-[16px]'>The company World Innovation Group offers everything you need for your computing needs. Our product range includes high-quality computers, accessories and software. We provide high quality, competitive prices and professional support. Contact us to find the perfect solutions for your computing and IT tasks.</span>
                        </div>
                    </div>
                    <div className='w-[293px] h-[350px] bg-[#CBCBCB] rounded-[25px]'>
                        <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                            <h1 className='font-bold text-[26px]'>Textile</h1>
                            <span className='font-light text-[16px]'>The company World Innovation Group offers a wide range of textile products for various needs. Here you will find high-quality fabrics, materials and finished products for home, office and fashion. We guarantee excellent quality, affordable prices and professional service. Contact us to update and decorate your space with our textile products.</span>
                        </div>
                    </div>
                    <div className='w-[293px] h-[350px] bg-[#CBCBCB] rounded-[25px]'>
                        <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                            <h1 className='font-bold text-[26px]'>House Appliances</h1>
                            <span className='font-light text-[16px]'>The company World Innovation Group offers a wide range of household appliances for your home. Here you will find high-quality and reliable devices for the kitchen, cleaning and comfort. We guarantee high quality, affordable prices and professional service. Contact us to make your home cozy and modern with the help of our household appliances.</span>
                        </div>
                    </div>
                    <div className='w-[293px] h-[350px] bg-[#CBCBCB] rounded-[25px]'>
                        <div className='px-[20px] py-[22px] flex flex-col gap-1 items-center justify-center'>
                            <h1 className='font-bold text-[26px]'>Food Products</h1>
                            <span className='font-light text-[16px]'>The company World Innovation Group offers a variety of high-quality food products. Here you will find fresh and natural products that will satisfy any taste preferences. We guarantee affordable prices and professional service. Contact us to fill your table with delicious and healthy food.</span>
                        </div>
                    </div>
                </div>
                <div className='px-[40px] flex justify-center'>
                    <Link className='text-black bg-[#FFCE33] mt-[40px] rounded-[25px] w-[230px] text-[29px] font-bold text-center z-20 max-sm:text-[30px] max-sm:w-[300px]'>More</Link>
                </div>
            </div>

            <div className='bg-[#CBCBCB] px-[40px] my-[70px]'>
                <div className='flex justify-between py-[46px]'>
                    <div className='flex justify-center items-center'>
                        <img src={brendImg1} alt='brend' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={brendImg2} alt='brend' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={brendImg3} alt='brend' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={brendImg4} alt='brend' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={brendImg5} alt='brend' />
                    </div>
                </div>
            </div>

            <div className='h-[518px] w-full' style={{ backgroundImage: `url(${homeImage2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className='w-[780px] h-full flex flex-col justify-center px-[40px] z-20'>
                    <span className='text-white text-[32px] font-bold  z-20 max-sm:text-[32px]'>About Us</span>
                    <span className='text-white text-[18px] mt-[25px] font-bold  z-20 max-sm:text-[30px] max-sm:w-[300px]'>Our company specializes in wholesale sales of high-quality textiles, home goods, and food products. We strive to offer only the best items, carefully selected from trusted suppliers. Our approach is based on meeting customer needs and providing the highest level of service. With us, you get not just products, but a reliable partner for your business. Join our satisfied customers and experience the difference!</span>
                    <Link className='text-white bg-[#0090FF] mt-[40px] rounded-[25px] w-[230px] text-[31px] font-bold text-center z-20 max-sm:text-[30px] max-sm:w-[300px]'>Learn More</Link>
                </div>
            </div>
        </div >
    )
}
