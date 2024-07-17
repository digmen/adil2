import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logowhite.svg'

import footerBg from './images/footer.png'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <div className='flex justify-between px-[40px] pt-[25px] w-full max-sm:flex-col  max-sm:pb-12 bg-white' style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='flex w-full justify-between py-[20px]'>
                <div className='flex items-center justify-center flex-col gap-4 w-[300px] h-[200px]'>
                    <img src={logo} alt='logo' className='w-[80px] h-[150px]' />
                </div>
                <div className='flex gap-[122px]'>
                    <div className='flex flex-col items-start pb-[14px] gap-[1px] w-[180px]  max-sm:items-center'>
                        <Link to='/' className='text-white text-[24px] font-medium'>{t('header.homeLink')}</Link>
                        <Link to='/about' className='text-white text-[24px] font-medium'>{t('header.homeLink2')}</Link>
                        <Link to='/contact' className='text-white text-[24px] font-medium'>{t('header.homeLink5')}</Link>
                        <Link to='/product' className='text-white text-[24px] font-medium'>{t('header.homeLink3')}</Link>
                        <Link to='/service' className='text-white text-[24px] font-medium'>{t('header.homeLink4')}</Link>
                    </div>
                    <div className='flex  flex-col items-start gap-[10px]'>
                        <span className='text-[24px] font-medium text-white'>TELEPHONE NUMBER</span>
                        <span className='text-[18px] font-medium text-white'>+90 532 987 6543</span>
                    </div>
                    <div className='flex flex-col items-start gap-[10px]'>
                        <span className='text-[24px] font-medium text-white'>EMAIL</span>
                        <a href='mailto:worldinnovationgroup@hotmail.com' className='text-[18px] font-medium text-white'>worldinnovationgroup@hotmail.com</a>
                    </div>
                    <div className='flex flex-col w-[200px] items-start gap-[10px]'>
                        <span className='text-[24px] font-medium text-white'>ADRESS</span>
                        <span className='text-[18px] font-medium text-white'>Ziya gokalp mah. Suleyman demirel blv. The office no: 7e ic kapi no: 136 basaksehir/ Istanbul/ Turkiye</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
