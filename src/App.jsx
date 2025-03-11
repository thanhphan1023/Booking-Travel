import reactLogo from './assets/react.svg'
import viteLogo from '/favicon.jpg'
// import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import About from './pages/About'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Popular from './pages/Popular';
import BlogsDetail from './pages/BlogsDetail'
import Login from './pages/auth/Login/Login';
import Signup from './pages/auth/signup/Signup';
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from './pages/Contact';
import Place from './pages/Place';
import Tours from './pages/Tours';
import TourGuide from './pages/TourGuide';
import Profile from './pages/Profile';

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      delay: 300,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/popular' element={<Popular />}></Route>
            <Route path='/blog/:id' element={<BlogsDetail />}></Route>
            <Route path='/places' element={<Place />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/tour' element={<Tours />}></Route>
            <Route path='/tourguide' element={<TourGuide />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='*' element={<NoPage />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
