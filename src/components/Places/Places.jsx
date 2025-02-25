import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlacesCard from './PlacesCard';

const Places = () => {
    const [placesData, setPlaceData] = useState([]);

    const getPlaces = async () => {
        try {
            const res = await axios.get("https://67b48e00392f4aa94fab5b59.mockapi.io/Bestplace");
            setPlaceData(res.data);
        } catch {
            console.log("Lỗi khi lấy dữ liệu");
        }
    };

    useEffect(() => {
        getPlaces();
    }, []);

    return (
        <div className='py-10 bg-gray-50'>
            <section data-aos="fade-up" className='container'>
                <h1 className='py-2 pl-3 my-8 text-3xl font-bold text-left border-l-8 border-primary/50'>
                    Những địa điểm nổi tiếng
                </h1>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
                    {placesData.map((item) => (
                        <PlacesCard key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Places;
