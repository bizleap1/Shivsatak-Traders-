import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div>
      <Navbar setPage={setCurrentPage} currentPage={currentPage} />
      
      {currentPage === 'Home' && (
        <>
          <Hero setPage={setCurrentPage} />
          <Marquee />
          <About />
          <WhyUs />
        </>
      )}

      {currentPage === 'About' && <About />}
      {currentPage === 'Products' && <Products />}
      {currentPage === 'Why Us' && <WhyUs />}
      {currentPage === 'Gallery' && <Gallery />}
      {currentPage === 'Contact' && <Contact />}
      
      <Footer setPage={setCurrentPage} />
    </div>
  );
}

