import React from 'react';
import TourHeader from '../components/Tour/TourHeader';
import TourFilter from '../components/Tour/TourFilter';
import Places from '../components/Places/Places';
import Sort from '../components/Sort/Sort';

const Tours = () => {
    return (
        <div className=''>
            <TourHeader />
            <div className='flex gap-3 p-5'>
                <div className='w-1/4'>
                    <TourFilter />
                </div>
                <div className=''>
                    <Sort />
                    <Places hideTitle={false} booking={false} size="small" left={true} container={false} star={true} />
                </div>
            </div>

        </div>
    );
};

export default Tours;