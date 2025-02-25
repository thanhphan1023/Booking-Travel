import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from 'react-icons/io5';
import { FaHiking } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BlogDetailCard = ({ item }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImg, setSelectedImg] = useState(item.img[0]);

    const handlePrev = () => {
        setSelectedIndex(prev => {
            const newIndex = prev === 0 ? item.img.length - 1 : prev - 1;
            setSelectedImg(item.img[newIndex]);
            return newIndex;
        });
    };

    const handleNext = () => {
        setSelectedIndex(prev => {
            const newIndex = prev === item.img.length - 1 ? 0 : prev + 1;
            setSelectedImg(item.img[newIndex]);
            return newIndex;
        });
    };

    return (
        <div>
            <div className='container grid gap-10 pt-10 md:grid-cols-2'>
                <div className=''>
                    <div className="relative mx-auto">
                        <img
                            className='rounded-[32px] h-[300px] w-[560px] object-cover transition duration-700'
                            src={selectedImg} alt="" />
                        <button
                            onClick={handlePrev}
                            className="absolute p-2 text-white rounded-full shadow-md bg-gradient-to-r from-primary to-secondary left-5 top-1/2">
                            <AiOutlineLeft className='w-6 h-6' />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute p-2 text-white rounded-full shadow-md bg-gradient-to-r from-primary to-secondary right-5 top-1/2">
                            <AiOutlineRight className='w-6 h-6' />
                        </button>
                    </div>
                    <div className='flex justify-center w-full gap-2 mt-2'>
                        {item.img.map((img, index) => (
                            <img
                                key={index}
                                className={`w-[105px] object-cover cursor-pointer border 
                                    ${index === selectedIndex ? 'border-red-500' : ''}`}
                                src={img} alt=""
                                onClick={() => {
                                    setSelectedIndex(index);
                                    setSelectedImg(img);
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className='p-5 bg-gray-100 rounded-xl'>
                    <div className='space-y-4' >
                        <h1 className='text-xl font-bold '>{item.title[0]}</h1>
                        <div className='flex items-center gap-2'>
                            <AiFillThunderbolt className='w-5 h-5 text-yellow-400' />
                            <p className='text-lg'><span className='font-bold'>Giá tour từ:</span> {item.price} VND</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <AiFillThunderbolt className='w-5 h-5 text-yellow-400' />
                            <p className='text-lg'><span className='font-bold'>Giá trẻ em:</span> 0 VND</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiClock2 className='w-5 h-5 ' />
                            <p className='text-lg'><span className='font-bold'>Thời gian: </span>{item.date} ngày</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <IoLocationOutline className='w-6 h-6' />
                            <p className='text-lg'><span className='font-bold'>Điểm khởi hành: </span>{item.location}</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaHiking className='w-6 h-6' />
                            <p className='text-lg'><span className='font-bold'>Mô tả: </span>{item.description}</p>
                        </div>
                        <input
                            className='w-full p-2 border border-gray-600 rounded-full'
                            type="text" name="" id=""
                            placeholder='Vui lòng nhập số điện thoại để được tư vấn' />
                        <button
                            className="w-full py-2 mb-5 font-bold text-white transition-all rounded-full duration-600 bg-gradient-to-r from-primary to-secondary hover:text-white hover:bg-gray-400"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailCard;
