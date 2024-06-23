import React from 'react'

import logo from './images/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='h-[125px] flex justify-center gap-[50px] pt-[4px]'>
            <div className='flex items-center flex-col lg:gap-[10px] md:gap-1'>
                <img src={logo} alt='logo' className='w-[77px] h-[69px]' />
                <Link to='/' className='text-white text-[30px] font-bold lg:text-[20px] md:text-[16px]'>ALPHA IMPEX</Link>
            </div>

            <div className='flex items-end pb-[14px] gap-[50px] lg:gap-4 md:gap-2 md:pb-[30px] max-sm:hidden'>
                <Link to='/' className='lg:text-[16px] md:text-[12px] text-white text-[20px] font-bold'>HOME</Link>
                <Link to='/about' className='lg:text-[16px] md:text-[12px] text-white text-[20px] font-bold w-max'>ABOUT US</Link>
                <Link to='/product' className='lg:text-[16px] md:text-[12px] text-white text-[20px] font-bold'>PRODUCT</Link>
                <Link to='/service' className='lg:text-[16px] md:text-[12px] text-white text-[20px] font-bold'>SERVICES</Link>
                <Link to='/contact' className='lg:text-[16px] md:text-[12px] text-white text-[20px] font-bold'>CONTACT</Link>
            </div>
            <div className='flex flex-col justify-end pb-[18px] gap-4'>
                <div className='flex justify-end gap-5'>
                    <button className='text-white text-[20px] font-bold'>ENG</button>
                    <button className='text-white text-[20px] font-bold'>TRK</button>
                </div>
                <div className='border border-white p-2 max-sm:hidden'>
                    <a href='mailto:alphaimpex.org@outlook.com' className='text-white text-[14px] font-bold'>alphaimpex.org@outlook.com</a>
                </div>
            </div>
        </div>
    )
}
