import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/Travel/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu, { } from "../Navbar/ResponsiveMenu";
import "flowbite";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark"); // Thêm class 'dark' vào <html>
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark"); // Gỡ class 'dark' khỏi <html>
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <>
            <div className="fixed top-0 right-0 w-full text-black bg-white shadow-md dark:bg-gray-900 dark:text-white z-[999999]">
                <div className="hidden text-white bg-gradient-to-r from-primary to-secondary sm:block">
                    <div className="container py-[2px] flex items-center justify-between">
                        <p className="text-lg font-normal">Giảm giá 20% cho lần đặt tiếp theo</p>
                        <div className="flex items-center justify-end gap-5">
                            <FaPhoneAlt className="w-4 h-4" />
                            <p className="text-lg font-normal">Hotline: 0922222016</p>
                        </div>
                    </div>
                </div>
                <div className="container py-3 sm:py-0">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div>
                            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                                <img src={LogoImg} alt="MixiTravel" className="h-16 mt-2 mb-2" />
                            </Link>
                        </div>

                        {/* Desktop Navbar */}
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-6">
                                <li className="py-4 text-lg font-normal">
                                    <NavLink
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                        to="/"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        Tour du lịch
                                    </NavLink>
                                </li>
                                <li className="py-4 text-lg font-normal">
                                    <NavLink
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                        to="/blogs"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        Blogs
                                    </NavLink>
                                </li>
                                <li className="py-4 text-lg font-normal">
                                    <NavLink
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                        to="/places"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        Khách sạn
                                    </NavLink>
                                </li>
                                <li className="py-4 text-lg font-normal">
                                    <NavLink
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                        to="/about"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        Doanh Nghiệp
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-4">
                            {/* Toggle Dark Mode */}
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 bg-gray-200 rounded-full dark:bg-gray-700"
                            >
                                {darkMode ? <FiSun className="w-5 h-5 text-yellow-500" /> : <FiMoon className="w-5 h-5" />}
                            </button>
                            {/* ĐN && ĐK */}
                            <Link
                                to='/login'
                                type="button"
                                className="px-5 py-2 text-white transition-all rounded-full duration-600 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary"
                            >
                                Đăng Nhập
                            </Link>
                            <Link
                                to='/signup'
                                type="button"
                                className="px-5 py-2 text-white transition-all rounded-full duration-600 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary"
                            >
                                Đăng Kí
                            </Link>
                        </div>
                        <div className="block md:hidden">
                            {showMenu ? (
                                <HiMenuAlt1
                                    className="transition-none cursor-pointer"
                                    onClick={toggleMenu}
                                    size={30}
                                >
                                </HiMenuAlt1>
                            ) : (
                                <HiMenuAlt3
                                    onClick={toggleMenu}
                                    className="transition-all cursor-pointer"
                                    size={30}
                                >
                                </HiMenuAlt3>
                            )}
                        </div>
                    </div>
                </div>
                <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}></ResponsiveMenu>
            </div>
        </>
    );
};

export default Navbar;
