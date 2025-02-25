import React from 'react';
import { Link } from 'react-router-dom';

const BlogsCard = ({ item }) => {
    return (
        <Link className='mt-10 '>
            <div className='p-5 transition-all h-[400px] duration-500  cursor-pointer  rounded-[32px] hover:shadow-xl border border-gray-300'>
                <div className='overflow-hidden'>
                    <img src={item.img[1]} alt={item.title[1]}
                        className='mx-auto h-[220px] w-full rounded-[32px] object-cover transition duration-700 hover:skew-x-2 hover:scale-110' />
                </div>
                <div className='p-3 space-y-2'>
                    <h1 className='text-xl font-bold text-left line-clamp-2 min-h-[70px]'>{item.title[1]}</h1>
                </div>
                <div className="flex justify-center">
                    <Link
                        to=""
                        type="button"
                        className="px-5 py-2 text-black transition-all rounded-full duration-600 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:text-white hover:bg-gray-400"
                    >
                        Xem ngay
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default BlogsCard;