import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiEyeSlash, PiEye } from 'react-icons/pi';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import LoginImg from '../../../assets/Travel/Login.png';
import { IoIosCloseCircleOutline } from "react-icons/io";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({}); // Khai báo errors để tránh lỗi
    const navigate = useNavigate();



    return (
        <section className='flex container items-center sm:flex-row flex-col sm:h-[500px] md:h-[700px] gap-5 w-full'>
            <div className='w-1/2'>
                <img className='object-cover h-[450px]' src={LoginImg} alt="Login" />
            </div>
            <div className='w-1/2'>
                <div className='max-w-[900px] text-left'>
                    <h1 className='text-2xl font-bold text-black '>Đăng ký</h1>
                    <p className='mt-2 text-gray-500 -text-lg max-w-[600px]'>Bạn có thể đăng nhập tài khoản của mình để sử dụng dịch vụ của chúng tôi.</p>
                </div>
                <form className='items-center mt-3 '>
                    <div className='mt-3'>
                        <label className='flex flex-col mb-2 text-gray-500'>Họ và tên</label>
                        <input type='name' name="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='p-3 w-full max-w-[500px] h-auto mx-auto border border-gray-400 rounded-lg'
                            placeholder='Tên của bạn...'
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='flex flex-col mb-2 text-gray-500'>Email</label>
                        <input type="email" name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-3 w-full max-w-[500px] h-auto mx-auto border border-gray-400 rounded-lg'
                            placeholder='Email của bạn...'
                        />
                    </div>
                    <div className='relative mt-3'>
                        <label className='flex flex-col mb-2 text-gray-500 '>Mật Khẩu</label>
                        <input type={isShowPassword ? "text" : "password"} name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='p-3 w-full max-w-[500px] h-auto mx-auto border border-gray-400 rounded-lg'
                            placeholder='Mật khẩu...'
                        />
                        {errors?.password && <div className='pt-2 ml-2 text-sm text-rose-500'>{errors.password}</div>}
                        <div className='absolute top-[48px] right-[80px] cursor-pointer'>
                            {isShowPassword ? (
                                <PiEye className='w-6 h-6' onClick={() => setIsShowPassword(false)} />
                            ) : (
                                <PiEyeSlash className='w-6 h-6' onClick={() => setIsShowPassword(true)} />
                            )}
                        </div>
                    </div>
                    <div className='relative mt-3'>
                        <label className='flex flex-col mb-2 text-gray-500 '>Xác nhận mật khẩu</label>

                        <input value={passwordConfirm} type={isShowConfirmPassword === true ? "text" : "password"} name='confirmPassword'
                            className='p-3 w-full max-w-[500px] h-auto mx-auto border border-gray-400 rounded-lg'
                            placeholder='Nhập lại mật khẩu...'
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                        {errors.passwordConfirm && <div className='pt-2 ml-2 text-sm text-rose-500'>{errors.passwordConfirm}</div>}
                        <div className='absolute top-[48px] right-[80px] cursor-pointer'>
                            {isShowConfirmPassword ? (
                                <PiEye className='w-6 h-6' onClick={() => setIsShowConfirmPassword(false)} />
                            ) : (
                                <PiEyeSlash className='w-6 h-6' onClick={() => setIsShowConfirmPassword(true)} />
                            )}
                        </div>

                    </div>
                    <div className='mt-6'>
                        <button className='w-full p-3 max-w-[500px] text-white transition-all rounded-lg duration-600 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary'
                        >Đăng ký</button>
                    </div>
                </form>
                <div className='grid items-center max-w-[500px] justify-center grid-cols-3 p-5 text-gray-500 '>
                    <hr className='-mr-10 border-gray-400' />
                    <p className='text-center'>Hoặc</p>
                    <hr className='-ml-10 border-gray-400' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <a href="#!" className="p-2 mr-5 border border-gray-400 border-solid rounded-lg">
                            <FcGoogle className="w-8 h-8" />
                        </a>
                        <a href="#!" className="p-2 mr-5 border border-gray-400 border-solid rounded-lg">
                            <FaFacebookF className='w-8 h-8 text-blue-700' />
                        </a>
                    </div>
                    <div className='mr-[50px]'>
                        <Link to="/login" className='px-5 py-2 text-white transition-all rounded-full duration-600 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary'>Đăng nhập</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
