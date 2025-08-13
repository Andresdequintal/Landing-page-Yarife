import React from 'react';
import './App.css';
import img2 from './assets/images/footer2.png';
import img3 from './assets/images/footer3.png';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
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
      {/* <Contact /> */}
      <img src={img3}/>
      <img src={img2}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App; 