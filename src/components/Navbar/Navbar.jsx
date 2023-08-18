import React from 'react';

export default function Navbar() {
    return (
        <nav className='h-[250px] w-full bg-[#FFFFFF] flex flex-col justify-end'>
            <section className='font-Montserrat flex justify-between px-[135px] mb-[51px] '>
                <div className='flex gap-[31px] items-end'>
                    <img className='h-[16.66px] w-[16.66px]' src="../images/menu-icon.png" alt="Menu" />
                    <img className='h-[16.66px] w-[16.66px]' src="../images/search.png" alt="Search" />
                </div>

                <div className='flex w-[527px] h-[100.08px] flex-col items-center uppercase'>
                    <img src="../images/Logo.png" alt="Logo" className='w-[100%] h-[100%] ' />
                </div>

                <div className='flex gap-[21.34px] items-end '>
                    <img className='h-[16.66px] w-[16.66px]' src="../images/instagram.png" alt="Instagram" />
                    <img className='h-[16.66px] w-[16.66px]' src="../images/twitter-icon.png" alt="Twitter" />
                    <img className='h-[16.66px] w-[16.66px]' src="../images/facebook.png" alt="Facebook" />
                    <img className='h-[16.66px] w-[16.66px]' src="../images/youtube.png" alt="YouTube" />
                </div>
            </section>

            <section className='flex gap-[37px] uppercase text-[14px] font-[500] text-[#000000] justify-between mb-[33px] px-[84px] '>
                <a href="">HOME</a>
                <a href="">TECHNOLOGY</a>
                <a href="">SCIENCE</a>
                <a href="">BUSINESS</a>
                <a href="">TRAVEL</a>
                <a href="">FOOD</a>
                <a href="">HEALTH</a>
                <a href="">SPORT</a>
                <a href="">FASHION</a>
                <a href="">WORLD</a>
            </section>
        </nav>
    )
}