import React from 'react';
import AboutImg from '../../assets/Travel/BannerAbout.jpg';
import { AiOutlineRight } from "react-icons/ai";

const AboutHeader = () => {
    return (
        <div className='relative pt-10'>
            <img className='object-cover h-[500px] w-full' src={AboutImg} alt="" />
            <div className='absolute top-[85%] left-[10%]  w-[80%] flex justify-between items-center text-white'>
                {/* bên trái */}
                <p className='text-4xl font-bold'>Giới Thiệu</p>
                {/*bên phải */}
                <div className='flex items-center text-sm font-semibold'>
                    <p>Trang chủ</p>
                    <AiOutlineRight />
                    <p className='underline cursor-pointer'>Giới thiệu</p>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;
