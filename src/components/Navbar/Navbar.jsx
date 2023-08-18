import React from 'react';
import {FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaSearch, FaBars} from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className='h-[250px] w-full bg-[#FFFFFF] flex flex-col justify-end font-Montserrat'>
            <section className=' flex justify-between px-[135px] mb-[51px] '>
                <div className='flex gap-[31px] items-end'>
                    <FaBars className='h-[16.66px] w-[16.66px] cursor-pointer' />
                    <FaSearch className='h-[16.66px] w-[16.66px] cursor-pointer ' />
                </div>

                <div className='flex w-[527px] h-[100.08px] flex-col items-center uppercase'>
                    <img src="../images/Logo.png" alt="Logo" className='w-[100%] h-[100%] ' />
                </div>

                <div className='flex gap-[21.34px] items-end '>
                    <FaInstagram className='h-[16.66px] w-[16.66px] cursor-pointer ' />
                    <FaTwitter className='h-[16.66px] w-[16.66px] cursor-pointer' />
                    <FaFacebook className='h-[16.66px] w-[16.66px] cursor-pointer' />
                    <FaYoutube className='h-[16.66px] w-[16.66px] cursor-pointer' />
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