import React, { useState } from 'react'

import logo from './images/logo.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function Header() {

    const { t, i18n } = useTranslation();


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [modal, setModal] = useState(false)

    return (
        <div className='h-[125px] flex justify-center gap-[50px] pt-[4px]'>
            <div className='flex items-center flex-col lg:gap-[10px] md:gap-1'>
                <img src={logo} alt='logo' className='w-[77px] h-[69px]' />
                <Link to='/' className='text-white text-[30px] font-bold lg:text-[20px] md:text-[16px]'>ALPHA IMPEX</Link>
            </div>

            <div className='flex items-end pb-[14px] gap-[50px] lg:gap-4 md:gap-2 max-md:pb-[30px] max-sm:hidden max-2xl:pd-[14px] max-lg:pb-[28px]'>
                <Link to='/' className='lg:text-[16px] md:text-[12px] text-white text-[20px] font-bold'>{t('header.homeLink')}</Link>
                <Link to='/about' className='lg:text-[16px] md:text-[12px] text-white text-[20px] font-bold w-max'>{t('header.homeLink2')}</Link>
                <Link to='/product' className='lg:text-[16px] md:text-[12px] text-white text-[20px] font-bold'>{t('header.homeLink3')}</Link>
                <Link to='/service' className='lg:text-[16px] md:text-[12px] text-white text-[20px] font-bold'>{t('header.homeLink4')}</Link>
                <Link to='/contact' className='lg:text-[16px] md:text-[12px] text-white text-[20px] font-bold'>{t('header.homeLink5')}</Link>
            </div>
            <div className='flex flex-col justify-end pb-[18px] gap-4'>
                <div className='flex justify-end gap-5'>
                    <button onClick={() => changeLanguage('en')} className='text-white text-[20px] font-bold'>ENG</button>
                    <button onClick={() => changeLanguage('trk')} className='text-white text-[20px] font-bold'>TRK</button>
                </div>
                <div className='border border-white p-2 max-sm:hidden'>
                    <a href='mailto:alphaimpex.org@outlook.com' className='text-white text-[14px] font-bold'>alphaimpex.org@outlook.com</a>
                </div>
                <div onClick={() => setModal(prev => !prev)} className='flex flex-col gap-2 items-end max-sm:flex lg:hidden md:hidden 2xl:hidden xl:hidden '>
                    <div className='w-[30px] h-[2px] bg-white'></div>
                    <div className='w-[30px] h-[2px] bg-white'></div>
                    <div className='w-[30px] h-[2px] bg-white'></div>
                </div>
            </div>
        </div>
    )
}
