import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutus/AboutUs'
import Product from './pages/product/Product'
import Service from './pages/service/Service'
import Contact from './pages/contact/Contact'
import TransitionWrapper from './TransitionWrapper'

import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <Header />
      <TransitionWrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/product' element={<Product />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </TransitionWrapper>
      <Footer />
    </>
  )
}
