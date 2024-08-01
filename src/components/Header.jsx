import React, { useState } from 'react';
import logo from './images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const [stateLng, setStateLng] = useState(true);
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setStateLng(lng === 'en');
    };

    const [modal, setModal] = useState(false);

    const isActiveLink = (path) => location.pathname === path;

    return (
        <div className='h-[125px] max-sm:h-[60px] max-lg:h-[80px] flex justify-between pt-[4px] px-[40px] fixed z-50 top-0 w-full bg-white max-sm:px-4 shadow-[0_2px_33px_0px_rgba(0,0,0,0.8)]'>
            <div className='flex items-center justify-center'>
                <img src={logo} alt='logo' className='w-[77px] h-[69px] max-sm:w-[35px] max-sm:h-[30px]' />
            </div>
            <div className='flex flex-col gap-[10px] max-sm:gap-0 justify-center'>
                <div className='flex justify-end gap-5'>
                    <button onClick={() => changeLanguage('en')} className={stateLng ? 'text-black text-[17px] font-normal underline decoration-[#FFCE33]' : 'text-black text-[17px] font-normal'}>ENGLISH</button>
                    <button onClick={() => changeLanguage('trk')} className={stateLng ? 'text-black text-[17px] font-normal' : 'text-black text-[17px] font-normal underline decoration-[#FFCE33]'}>TURKISH</button>
                </div>
                <div className='flex items-end lg:gap-5 md:gap-2 max-md:pb-[30px] max-sm:hidden max-2xl:pd-[14px] max-lg:pb-[2px]'>
                    <Link to='/' className={`lg:text-[24px] md:text-[18px] text-black text-[24px] font-bold uppercase ${isActiveLink('/') ? 'underline decoration-[#FFCE33]' : ''}`}>{t('header.homeLink')}</Link>
                    <Link to='/about' className={`lg:text-[24px] md:text-[18px] text-black text-[24px] font-bold w-max uppercase ${isActiveLink('/about') ? 'underline decoration-[#FFCE33]' : ''}`}>{t('header.homeLink2')}</Link>
                    <Link to='/product' className={`lg:text-[24px] md:text-[18px] text-black text-[24px] font-bold uppercase ${isActiveLink('/product') ? 'underline decoration-[#FFCE33]' : ''}`}>{t('header.homeLink3')}</Link>
                    <Link to='/contact' className={`lg:text-[24px] md:text-[18px] text-black text-[24px] font-bold uppercase ${isActiveLink('/contact') ? 'underline decoration-[#FFCE33]' : ''}`}>{t('header.homeLink5')}</Link>
                    <Link to='/service' className={`lg:text-[24px] md:text-[18px] text-black text-[24px] font-bold uppercase ${isActiveLink('/service') ? 'underline decoration-[#FFCE33]' : ''}`}>{t('header.homeLink4')}</Link>
                </div>
                <div className='flex flex-col items-end gap-4 lg:hidden md:hidden 2xl:hidden xl:hidden'>
                    <div onClick={() => setModal(prev => !prev)} className='flex flex-col gap-2 items-end max-sm:w-max max-sm:flex lg:hidden md:hidden 2xl:hidden xl:hidden'>
                        <div className='w-[30px] h-[2px] bg-black'></div>
                        <div className='w-[30px] h-[2px] bg-black'></div>
                        <div className='w-[30px] h-[2px] bg-black'></div>
                    </div>
                </div>
            </div>
            {modal &&
                <div className='absolute top-[60px] left-0 bg-white z-50 w-full'>
                    <div className='flex flex-col items-center py-1'>
                        <Link onClick={() => setModal(prev => !prev)} to='/' className={`lg:text-[16px] md:text-[12px] text-black text-[20px] font-bold w-full text-center uppercase ${isActiveLink('/') ? 'underline decoration-[#FFCE33]' : ''}`}>{t('header.homeLink')}</Link>
                        <Link onClick={() => setModal(prev => !prev)} to='/about' className={`lg:text-[16px] md:text-[12px] text-black text-[20px] font-bold w-full text-center uppercase ${isActiveLink('/about') ? 'underline decoration-[#FFCE33]' : ''}`}>{t('header.homeLink2')}</Link>
                        <Link onClick={() => setModal(prev => !prev)} to='/product' className={`lg:text-[16px] md:text-[12px] text-black text-[20px] font-bold w-full text-center uppercase ${isActiveLink('/product') ? 'underline decoration-[#FFCE33]' : ''}`}>{t('header.homeLink3')}</Link>
                        <Link onClick={() => setModal(prev => !prev)} to='/service' className={`lg:text-[16px] md:text-[12px] text-black text-[20px] font-bold w-full text-center uppercase ${isActiveLink('/service') ? 'underline decoration-[#FFCE33]' : ''}`}>{t('header.homeLink4')}</Link>
                        <Link onClick={() => setModal(prev => !prev)} to='/contact' className={`lg:text-[16px] md:text-[12px] text-black text-[20px] font-bold w-full text-center uppercase ${isActiveLink('/contact') ? 'underline decoration-[#FFCE33]' : ''}`}>{t('header.homeLink5')}</Link>
                    </div>
                </div>
            }
        </div>
    );
}
