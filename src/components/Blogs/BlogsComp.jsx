import React, { useEffect, useState } from 'react';
import BlogImg from '../../assets/Travel/dauphay.webp'
import axios from 'axios';
import { IoTelescope } from 'react-icons/io5';
import BlogsCard from './BlogsCard';

const BlogsComp = () => {
    const [blogsData, setBlogData] = useState([])
    const getBlog = async () => {
        try {
            const res = await axios.get("https://67b48e00392f4aa94fab5b59.mockapi.io/Bestplace")
            setBlogData(res.data)
        } catch {
            console.log("lỗi");
        }
    }
    useEffect(() => {
        getBlog()
    }, [])
    return (
        <div className='py-10'>
            <div data-aos="fade-up" className='container' >
                <div className='mx-auto text-center '>
                    <h1 className='text-4xl font-bold '>Kinh Nghiệm Du Lịch</h1>
                    <p className='mt-5 mr-4 text-xl text-gray-500'>Khám phá ngay các tour, hoạt động du lịch và địa điểm tham quan cho hành trình du lịch của bạn</p>
                </div>
                <img src={BlogImg}
                    className="w-[100px] h-auto mx-auto mt-5"
                    alt=""
                />
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                    {blogsData.map((item, index) => (
                        <BlogsCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogsComp;