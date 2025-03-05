import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Hero = () => {
    return (
        <div className='h-full'>
            <div className='flex items-center justify-center w-full h-full p-4 '>
                <div className='container grid grid-cols-1 gap-4'>
                    <div className='text-left text-white'>
                        <p data-aos="fade-up" className='text-sm'>Các gói của chúng tôi</p>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className='text-3xl font-bold'>
                            Tìm kiếm Điểm đến của bạn
                        </p>
                    </div>
                    {/* form section */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="relative p-4 space-y-4 bg-white rounded-xl"
                    >
                        <div className='text-center'>
                            <label htmlFor="destination" className="text-3xl font-medium text-gray-400">
                                Bạn lựa chọn điểm đến nào?
                            </label>
                            <p className="mt-2 mb-6 text-xl text-gray-500">Hàng nghìn điểm đến hấp dẫn với giá tốt nhất đang chờ bạn</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-3">
                            <div className='relative flex items-center '>
                                <IoIosSearch className='absolute w-6 h-6 ml-2 text-gray-400 -translate-y-1/2 top-1/2' />
                                <input
                                    type="text"
                                    name="destination"
                                    id="destination"
                                    placeholder="Nhập tên điểm đến..."
                                    className="w-full p-3 pl-8 my-2 bg-gray-100 rounded-full range accent-primary focus:outline-primary focus:outline outline-1"
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    name="destination"
                                    id="destination"
                                    className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-3 text-gray-500"
                                />
                            </div>
                            <div className='relative flex items-center ' >
                                <AiOutlineDollarCircle className='absolute w-6 h-6 ml-2 text-gray-800 -translate-y-1/2 top-1/2' />
                                <select className="w-full p-3 my-2 text-gray-500 bg-gray-100 rounded-full pl-9 range accent-primary focus:outline-primary focus:outline outline-1">
                                    <option>Tất cả mức giá</option>
                                    <option>Từ 1 đến 3 triệu</option>
                                    <option>Từ 3 đến 6 triệu</option>
                                    <option>Trên 6 triệu</option>
                                </select>
                            </div>
                            <button className="absolute px-6 py-3 text-white duration-200 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105 -bottom-6 left-1/2">
                            Tìm Kiếm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
