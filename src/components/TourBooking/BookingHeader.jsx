import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import AboutImg from '../../assets/Travel/BannerAbout.jpg';

const BookingHeader = () => {
    return (
        <div className='relative pt-10'>
            <img className='object-cover h-[500px] w-full' src={AboutImg} alt="" />
            <div className='absolute top-[85%] left-[10%]  w-[80%] flex justify-between items-center text-white'>
                {/* bên trái */}
                <p data-aos="fade-right" className='text-4xl font-bold'>Tour đã đặt</p>
                {/*bên phải */}
                <div data-aos="fade-left" className='flex items-center text-lg font-semibold'>
                    <p>Trang chủ</p>
                    <AiOutlineRight />
                    <p className='underline cursor-pointer'>Tour đã đặt</p>
                </div>
            </div>
        </div>
    );
};

export default BookingHeader;