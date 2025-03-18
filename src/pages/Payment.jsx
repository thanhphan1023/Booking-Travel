import React from 'react';
import PaymentHeader from '../components/Payment/PaymentHeader';
import PaymentInformation from '../components/Payment/PaymentInformation';
import PaymentQuality from '../components/Payment/PaymentQuality';
import PaymentMethod from '../components/Payment/PaymentMethod';
import PaymentSidebar from '../components/Payment/PaymentSidebar';

const Payment = () => {
    return (
        <div>
            <PaymentHeader />
            <div className='container flex gap-10'>
                <div className='w-3/5'>
                    <PaymentInformation />
                    <PaymentQuality />
                    <PaymentMethod />
                </div>
                <div className='w-2/5'>
                    <PaymentSidebar />
                </div>
            </div>

        </div>
    );
};

export default Payment;