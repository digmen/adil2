import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.svg'

import footerBg from './images/footer.png'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t, i18n } = useTranslation()

    return (
        <div className='flex justify-between px-[40px] pt-[35px]  max-sm:flex-col  max-sm:pb-12' style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover' }}>
            <div className='flex flex-col pb-[14px] gap-[1px]  max-sm:items-center'>
                <Link to='/' className='text-white text-[20px] font-bold'>HOME</Link>
                <Link to='/about' className='text-white text-[20px] font-bold'>ABOUT US</Link>
                <Link to='/product' className='text-white text-[20px] font-bold'>PRODUCT</Link>
                <Link to='/service' className='text-white text-[20px] font-bold'>SERVICES</Link>
                <Link to='/contact' className='text-white text-[20px] font-bold'>CONTACT</Link>
            </div>
            <div className='flex gap-[200px] md:gap-11 max-sm:flex-col  max-sm:gap-10  max-sm:items-center'>
                <div className='flex items-center flex-col '>
                    <img src={logo} alt='logo' className='w-[77px] h-[69px]' />
                    <Link to='/' className='text-white text-[30px] font-bold'>ALPHA IMPEX</Link>
                </div>
                <div className='w-[290px] flex items-center flex-col'>
                    <div className='border border-white p-2 w-[210px]'>
                        <a href='mailto:alphaimpex.org@outlook.com' className='text-white text-[14px] font-bold '>alphaimpex.org@outlook.com</a>
                    </div>
                    <span className='text-white mt-[25px]'>Atakoy 7-8-9-10. Kisim mah. Cobançesme e-5 yan yol cad. A no: 22 /1 Iç Kapi no: 30 bakirkoy/ Istanbul/Turkey</span>
                </div>
            </div>
        </div>
    )
}
