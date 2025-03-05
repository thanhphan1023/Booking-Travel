import React from 'react';
import { FaFacebookMessenger } from "react-icons/fa";
import { Link } from 'react-router-dom';
import UserTour from '../../assets/Travel/Khachtour.png'
const BlogContentCard = ({ item }) => {
    return (
        <div>
            <div className='pt-5'>
                <h1 data-aos="slide-right" className='text-lg font-semibold text-red-500'>{item.title}</h1>
                <img
                    data-aos="zoom-in"
                    className='object-cover w-full h-full mt-5 rounded-lg'
                    src={item.images[0]} alt="" />
                <div>
                    {item.schedule.map((s, index) => (
                        <div key={index} className='items-center gap-3 mt-2 '>
                            <div>
                                <p><strong>Thời gian:</strong> {s.time}</p>
                                <p><strong>Hoạt động:</strong> {s.activity}</p>
                            </div>
                            {s.img && (
                                <img data-aos="fade-in" data-aos-duration="800" src={s.img} alt="Hình minh họa" className="object-cover w-full h-[500px] mt-5 rounded-lg" />
                            )}
                        </div>
                    ))}
                </div>
                <div className='pt-5'>
                    <h1 className='text-xl font-semibold'>Những điều lưu ý cho chuyến đi</h1>
                    <div>
                        {item.note.map((n, index) => (
                            <div key={index} className='items-center gap-3 mt-2 '>
                                <p>- {n}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='pt-5'>
                    <h1 className='text-xl font-semibold'>Tour bao gồm:</h1>
                    <div>
                        {item.include.map((inclu, index) => (
                            <div key={index} className='items-center gap-3 mt-2 '>
                                <p>- {inclu}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='pt-5'>
                    <h1 className='text-xl font-semibold'>Liên hệ đặt tour:</h1>
                    <div>
                        {item.contact.map((contact, index) => (
                            <div key={index} className='items-center gap-3 mt-2 '>
                                <p>- {contact}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=''>
                    <img className='object-cover' src={UserTour} alt="Hình ảnh du khách" />
                </div>
                <div className="mb-5 text-center ">
                    <div className='relative flex items-center justify-center px-5 py-2 mx-auto text-white'>
                        <FaFacebookMessenger className='absolute w-4 h-4   left-[450px]' />
                        <a
                            href="https://www.facebook.com/share/153am77Q8f/?mibextid=wwXIfr"

                            className="px-12 py-2 transition-all rounded-full duration-600 bg-gradient-to-r from-primary to-secondary hover:text-white hover:bg-gray-400"
                        >
                            Inbox tư vấn book tour
                        </a>
                    </div>
                    <p className='text-xs'>Bấm vào để hổ trợ tư vấn</p>
                </div>
            </div>
        </div>
    );
};

export default BlogContentCard;