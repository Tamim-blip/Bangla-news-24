import Image from 'next/image';
import React from 'react';
import NavLinks from './navLinks';


const HeaderPage = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle : "full"
    })
    return (
        <div className='container mx-auto '>
            <div className='relative flex justify-end items-center mt-5'>
            <div className='absolute left-1/2 -translate-x-1/2 flex gap-2 items-center'>
                <Image className='h-10 w-10' src= {'/logo.webp'} alt='Header logo' height={300} width={300}></Image>
                <div>
                    <h1 className='font-bold text-2xl text-red-700'>Bangla News 24</h1>
                    <p className='text-xs text-neutral-500'>{date}</p>
                </div>
            </div>

            <div className='flex gap-2'>
                <button className='btn'>সাইন ইন</button>
                <button className='btn bg-red-900 text-white'>সাইন আপ</button>

            </div>
        </div>
        <NavLinks></NavLinks>
        </div>
    );
};

export default HeaderPage;