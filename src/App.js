import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutus/AboutUs';
import Product from './pages/product/Product';
import Service from './pages/service/Service';
import Contact from './pages/contact/Contact';
// import TransitionWrapper from './TransitionWrapper';
import Header from './components/Header';
import NotFoundPage from './notfound/NotFoundPage';

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<><Home /></>} />ы
        <Route path="/about" element={<><AboutUs /></>} />
        <Route path="/product" element={<><Product /></>} />
        <Route path="/service" element={<><Service /></>} />
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
