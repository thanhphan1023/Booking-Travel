import React from 'react';
import PaymentHeader from '../components/Payment/PaymentHeader';
import PaymentInformation from '../components/Payment/PaymentInformation';
import PaymentQuality from '../components/Payment/PaymentQuality';
import PaymentMethod from '../components/Payment/PaymentMethod';
import PaymentSidebar from '../components/Payment/PaymentSidebar';
import PaymentCheckbox from '../components/Payment/PaymentCheckbox';

const Payment = () => {
    return (
        <div>
            <PaymentHeader />
            <div className='container flex gap-10'>
                {/* bên phải */}
                <div className='w-3/5'>
                    <PaymentInformation />
                    <PaymentQuality />
                    <PaymentCheckbox />
                    <PaymentMethod />
                </div>
                {/* bên trái */}
                <div className='w-2/5'>
                    <div className='sticky top-10'>
                        <PaymentSidebar />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;