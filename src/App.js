import React from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductsShowcase from './components/ProductsShowcase/ProductsShowcase';
import Services from './components/Services/Services';
import ServicesDetails from './components/ServicesDetails/ServicesDetails';
import StrategyBanner from './components/StrategyBanner/StrategyBanner';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <StrategyBanner/>
      <ServicesDetails/>
      <ProductsShowcase />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 