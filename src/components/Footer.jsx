import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logowhite.svg'

import footerBg from './images/footer.png'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <div className='flex justify-between px-[40px] pt-[25px] w-full max-sm:flex-col  max-sm:pb-12 bg-white' style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='flex w-full items-center justify-between py-[20px] md:justify-normal md:gap-3'>
                <div className='flex items-center justify-center flex-col gap-4'>
                    <img src={logo} alt='logo' className='w-[80px] h-[150px]' />
                </div>
                <div className='flex md:gap-3 lg:gap-[15px] xl:gap-[122px]'>
                    <div className='flex flex-col items-start gap-[1px] w-[180px] md:w-max lg:w-[150px] max-sm:items-center'>
                        <Link to='/' className='text-white md:text-[14px] text-[24px] font-medium max-lg:text-[16px]'>{t('header.homeLink')}</Link>
                        <Link to='/about' className='text-white md:text-[14px] text-[24px] font-medium max-lg:text-[16px]'>{t('header.homeLink2')}</Link>
                        <Link to='/contact' className='text-white md:text-[14px] text-[24px] font-medium max-lg:text-[16px]'>{t('header.homeLink5')}</Link>
                        <Link to='/product' className='text-white md:text-[14px] text-[24px] font-medium max-lg:text-[16px]'>{t('header.homeLink3')}</Link>
                        <Link to='/service' className='text-white md:text-[14px] text-[24px] font-medium max-lg:text-[16px]'>{t('header.homeLink4')}</Link>
                    </div>
                    <div className='flex  flex-col items-start gap-[10px] md:w-max'>
                        <span className='text-[24px] max-lg:text-[16px] font-medium text-white md:text-[14px]'>TELEPHONE NUMBER</span>
                        <span className='text-[18px] max-lg:text-[14px] font-medium text-white md:text-[14px]'>+90 532 987 6543</span>
                    </div>
                    <div className='flex flex-col items-start gap-[10px]'>
                        <span className='text-[24px] max-lg:text-[16px] font-medium text-white md:text-[14px]'>EMAIL</span>
                        <a href='mailto:worldinnovationgroup@hotmail.com' className='text-[18px] max-lg:text-[14px] font-medium text-white md:text-[14px]'>worldinnovationgroup@hotmail.com</a>
                    </div>
                    <div className='flex flex-col w-[200px] items-start gap-[10px] md:w-[120px]'>
                        <span className='text-[24px] max-lg:text-[16px]font-medium text-white md:text-[14px]'>ADRESS</span>
                        <span className='text-[18px] max-lg:text-[14px] font-medium text-white md:text-[14px]'>Ziya gokalp mah. Suleyman demirel blv. The office no: 7e ic kapi no: 136 basaksehir/ Istanbul/ Turkiye</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
