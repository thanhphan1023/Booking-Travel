import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Button = ({ to, text, width, icon = true }) => {
    return (
        <div className='flex mt-8'>
            <Link
                onClick={() => window.scrollTo(0, 0)}
                to={to}
                type="button"
                className={`relative inline-flex items-center justify-center font-semibold w-full ${width} px-6 py-3 text-white transition-all rounded-full duration-600 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary gap-2`}
            >
                {text} {icon && <GoArrowUpRight size={20} />}
            </Link>
        </div>
    );
};

export default Button;