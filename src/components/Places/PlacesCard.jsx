import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const PlacesCard = ({ item }) => {
    return (
        <div className='p-5 transition-all duration-500 shadow-2xl cursor-pointer rounded-[32px] hover:shadow-xl border border-gray-300 h-full flex flex-col'>
            {/* Hình ảnh */}
            <div className='overflow-hidden'>
                <img src={item.img[0]} alt={item.title[0]}
                    className='mx-auto h-[220px] w-full rounded-[32px] object-cover transition duration-700 hover:skew-x-2 hover:scale-110' />
            </div>

            {/* Phần nội dun*/}
            <div className='flex-grow p-2 space-y-2'>
                <h1 className='text-lg font-bold text-left min-h-[50px]'>{item.title[0]}</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3 opacity-70'>
                        <IoLocationOutline className='w-6 h-6' />
                        <p>{item.location}</p>
                    </div>
                    <p className='text-lg'>{item.date} ngày</p>
                </div>
                <p className='text-left line-clamp-2'>{item.description}</p>
            </div>

            {/* Phần giá và nút, luôn nằm ở dưới */}
            <div className='flex items-center justify-between px-2 py-3 mt-auto border-t-2'>
                <div className='opacity-70'>
                    <p className='text-xl font-bold'>{item.price} VND</p>
                </div>
                <Link
                    to={`/blog/${item.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="px-5 py-2 text-black transition-all rounded-full duration-600 bg-gradient-to-r from-primary to-secondary hover:text-white hover:bg-gray-400"
                >
                    Xem chi tiết
                </Link>
            </div>
        </div>
    );
};

export default PlacesCard;
