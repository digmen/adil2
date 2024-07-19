import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutus/AboutUs';
import Product from './pages/product/Product';
import Service from './pages/service/Service';
import Contact from './pages/contact/Contact';
import TransitionWrapper from './TransitionWrapper';
import Header from './components/Header';
import NotFoundPage from './notfound/NotFoundPage';

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TransitionWrapper><Home /></TransitionWrapper>} />ы
        <Route path="/about" element={<TransitionWrapper><AboutUs /></TransitionWrapper>} />
        <Route path="/product" element={<TransitionWrapper><Product /></TransitionWrapper>} />
        <Route path="/service" element={<TransitionWrapper><Service /></TransitionWrapper>} />
        <Route path="/contact" element={<TransitionWrapper><Contact /></TransitionWrapper>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
