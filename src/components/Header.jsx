import React from 'react'

import logo from './images/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='bg-[#2B2B2C] h-[125px] flex justify-center gap-[50px] pt-[4px]'>
            <div className='flex items-center flex-col '>
                <img src={logo} alt='logo' className='w-[77px] h-[69px]' />
                <Link to='/' className='text-white text-[30px] font-bold'>ALPHA IMPEX</Link>
            </div>

            <div className='flex items-end pb-[14px] gap-[50px]'>
                <Link to='/' className='text-white text-[20px] font-bold'>HOME</Link>
                <Link to='/about' className='text-white text-[20px] font-bold'>ABOUT US</Link>
                <Link to='/product' className='text-white text-[20px] font-bold'>PRODUCT</Link>
                <Link to='/service' className='text-white text-[20px] font-bold'>SERVICES</Link>
                <Link to='/contact' className='text-white text-[20px] font-bold'>CONTACT</Link>
            </div>
            <div className='flex flex-col justify-end pb-[18px] gap-4'>
                <div className='flex justify-end gap-5'>
                    <button className='text-white text-[20px] font-bold'>ENG</button>
                    <button className='text-white text-[20px] font-bold'>TRK</button>
                </div>
                <div className='border border-white p-2'>
                    <a href='mailto:alphaimpex.org@outlook.com' className='text-white text-[14px] font-bold'>alphaimpex.org@outlook.com</a>
                </div>
            </div>
        </div>
    )
}
