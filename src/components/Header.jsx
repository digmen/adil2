import React, { useState } from 'react'

import logo from './images/logo.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function Header() {
    const [stateLng, setStateLng] = useState(true)
    const { t, i18n } = useTranslation();


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        if (lng == 'en') {
            setStateLng(true)
        } else {
            setStateLng(false)
        }
    };

    const [modal, setModal] = useState(false)

    return (
        <div className='h-[125px] flex justify-between gap-[50px] pt-[4px] px-[40px] relative bg-[#000000a4] max-sm:px-4'>
            <div className='flex items-center flex-col lg:gap-[10px] md:gap-1 max-sm:gap-[20px]'>
                <img src={logo} alt='logo' className='w-[77px] h-[69px]' />
                <Link to='/' className='text-white text-[30px] font-bold lg:text-[20px] md:text-[16px] max-sm:text-[16px] w-max'>ALPHA IMPEX</Link>
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
                    <button onClick={() => changeLanguage('en')} className={stateLng ? 'text-white text-[20px] font-bold underline' : 'text-white text-[20px] font-bold'}>ENG</button>
                    <button onClick={() => changeLanguage('trk')} className={stateLng ? 'text-white text-[20px] font-bold' : 'text-white text-[20px] font-bold underline'}>TRK</button>
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
            {modal &&
                <div className='absolute top-[120px] left-0 bg-white z-50 w-full'>
                    <div className='flex flex-col items-center py-4'>
                        <Link onClick={() => setModal(prev => !prev)} to='/' className='lg:text-[16px] md:text-[12px] text-black text-[20px] font-bold border w-full text-center'>{t('header.homeLink')}</Link>
                        <Link onClick={() => setModal(prev => !prev)} to='/about' className='lg:text-[16px] md:text-[12px] text-black text-[20px] font-bold w-max border w-full text-center'>{t('header.homeLink2')}</Link>
                        <Link onClick={() => setModal(prev => !prev)} to='/product' className='lg:text-[16px] md:text-[12px] text-black text-[20px] font-bold border w-full text-center'>{t('header.homeLink3')}</Link>
                        <Link onClick={() => setModal(prev => !prev)} to='/service' className='lg:text-[16px] md:text-[12px] text-black text-[20px] font-bold border w-full text-center'>{t('header.homeLink4')}</Link>
                        <Link onClick={() => setModal(prev => !prev)} to='/contact' className='lg:text-[16px] md:text-[12px] text-black text-[20px] font-bold border w-full text-center'>{t('header.homeLink5')}</Link>
                    </div>
                </div>
            }
        </div>
    )
}
