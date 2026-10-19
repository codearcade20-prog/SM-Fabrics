import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="site-wrapper">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Products />
        <AboutUs />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
