import React from 'react';
import ContactUs from '../components/Contact/ContactUs';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactHeader from '../components/Contact/ContactHeader';
import ContactLocation from '../components/Contact/ContactLocation';

const Contact = () => {
    return (
        <div >
            <ContactHeader />
            <ContactUs />
            <ContactInfo />
            <ContactLocation />
        </div>
    );
};

export default Contact;