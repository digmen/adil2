import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutus/AboutUs';
import Product from './pages/product/Product';
import Service from './pages/service/Service';
import Contact from './pages/contact/Contact';
import TransitionWrapper from './TransitionWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFoundPage from './notfound/NotFoundPage';

export default function App() {
  const location = useLocation();

  // Define paths where Footer should not be shown
  const noFooterPaths = ['/contact'];

  // Check if the current path matches one of the noFooterPaths or if it matches the * route
  const shouldShowFooter = !noFooterPaths.includes(location.pathname) && location.pathname !== '*';

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
}
