import React from 'react'
import logo from '../components/images/logo.svg'


export default function NotFoundPage() {
    return (
        <div className='flex flex-col items-center'>
            <div></div>
            <div className='flex flex-col items-center gap-10'>
                <img className='w-[160px] h-[190px]' src={logo} alt='logo' />
                <span className='font-black text-[32px]'>We apologize for the inconvenience, technical work is currently underway, please wait</span>
            </div>
        </div>
    )
}
