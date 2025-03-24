import React from 'react';
import AboutHeader from '../components/About/AboutHeader';
import AboutUs from '../components/About/AboutUs';
import AboutBannerImg from '../components/About/AboutBannerImg';
import AboutTravel from '../components/About/AboutTravel';
import AboutTeam from '../components/About/AboutTeam';

const About = () => {
    return (
        <div className='dark:bg-[#101828] dark:text-white'>
            <AboutHeader />
            <AboutUs />
            <AboutBannerImg />
            <AboutTravel />
            <AboutTeam />
        </div>
    );
};

export default About;