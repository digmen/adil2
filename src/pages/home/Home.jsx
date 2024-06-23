import React from 'react'
import { Link } from 'react-router-dom';


import homeImage from './images/home.png'; // путь к вашему изображению
import homeImageTwo from './images/hometwo.png'; // путь к вашему изображению

import homeCardImgOne from './images/homecardone.png'
import homeCardImgTwo from './images/homecardtwo.png'
import homeCardImgThere from './images/homecardthere.png'

import homeAboutUsImg from './images/homeaboutus.png'

export default function Home() {
    return (
        <div>
            <div className='h-[479px] relative' style={{ backgroundImage: `url(${homeImage})` }}>
                <div className='absolute bg-[#00000070] h-[479px] w-full z-10'>
                </div>
                <div className='h-[479px] flex items-center justify-center z-20'>
                    <span className='text-white text-[34px] font-semibold text-center w-[614px] z-20'>Reliable shipping and high-quality products for your comfort and enjoyment!</span>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='mt-[20px] text-white text-[40px] font-extrabold'>Product Range</h1>
                <div className='flex gap-[74px] mt-[52px]'>
                    <div className='flex flex-col items-center gap-3'>
                        <img src={homeCardImgOne} alt='home one card photo' className='w-[350px] h-[250px]' />
                        <span className='text-[30px] font-medium text-white'>Household Appliances</span>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <img src={homeCardImgTwo} alt='home one card photo' className='w-[350px] h-[250px]' />
                        <span className='text-[30px] font-medium text-white'>Electronics</span>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <img src={homeCardImgThere} alt='home one card photo' className='w-[350px] h-[250px]' />
                        <span className='text-[30px] font-medium text-white'>Food Products</span>
                    </div>
                </div>
                <Link className='mt-[52px] bg-[#828282] px-[70px] py-[7px] rounded-[67px] text-white text-[30px] font-medium' to='/product'>More Product</Link>
            </div>

            <div className='flex justify-between mx-[125px] mt-[114px]'>
                <div className='w-[571px] flex flex-col'>
                    <div className='flex flex-col gap-[20px]'>
                        <h1 className='text-[30px]'>About Us</h1>
                        <span className='text-[30px]'>Welcome to Alpha Impex – your reliable partner in freight transportation and the sale of various goods. We specialize in providing high-quality delivery and sales services in the following categories:</span>
                    </div>
                    <div className='mt-[30px]'>
                        <ol>
                            <li className='flex gap-2 items-center'><div className='w-[12px] h-[12px] bg-white rounded-full'></div> Electric Product</li>
                            <li className='flex gap-2 items-center'><div className='w-[12px] h-[12px] bg-white rounded-full'></div>Household Appliances</li>
                            <li className='flex gap-2 items-center'><div className='w-[12px] h-[12px] bg-white rounded-full'></div>Food Products</li>
                        </ol>
                    </div>
                    <div className='mt-[50px]'>
                        <Link className='mt-[52px] bg-[#828282] px-[70px] py-[7px] rounded-[67px] text-white text-[30px] font-medium' to='/about'>Find Out More</Link>
                    </div>
                </div>
                <img src={homeAboutUsImg} alt='homeAboutUsImg' />
            </div>

            <div className='h-[605px] relative mt-[40px]' style={{ backgroundImage: `url(${homeImageTwo})`, backgroundRepeat: 'no-repeat', width: '100%', backgroundSize: 'cover' }}>
                <div className='absolute bg-[#0000009e] h-[605px] w-full z-10'>
                </div>
                <div className='h-[605px] flex flex-col items-center justify-center z-20'>
                    <h1 className='text-[65px] font-extrabold text-white z-20'>Question?</h1>
                    <span className='text-white text-[34px] font-semibold text-center w-[614px] mt-[108px] z-20'>Reliable shipping and high-quality products for your comfort and enjoyment!</span>
                    <Link className='mt-[52px] bg-[#828282] px-[84px] py-[7px] rounded-[67px] text-white text-[30px] font-medium  z-20' to='/contact'>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}