// layouts/MainLayout.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import Apps from '../pages/apps/Apps';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Background from '../components/background/Background';

const MainLayout = () => {
  return (
    <div className="app-wrapper video-background-wrapper">
      <Background />

      <div className="video-overlay">
        <Header />
        <main className="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
