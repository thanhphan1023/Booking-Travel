import React from 'react';
import Hero from '../components/Hero/Hero';
import HotelVD from '../assets/Video/MixivivuHotel.mp4'
const Hotel = () => {
    return (
        <>
            <div className="h-[700px] relative mt-[112px] w-full">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute w-full h-[600px] object-cover z-[-1]"
                >
                    <source src={HotelVD} type="video/mp4" />
                </video>
                <Hero />
            </div>

        </>
    );
};

export default Hotel;