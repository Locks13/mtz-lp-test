import React from 'react';
import BannerHero from './components/BannerHero/BannerHero';
import TwoColumnSection from './components/TwoColumnSection/TwoColumnSection';
import TipBox from './components/TipBox/TipBox';
import CustomCarousel from './components/CustomCarousel/CustomCarousel';
import CompactCarousel from './components/CompactCarousel/CompactCarousel';
import FAQ from './components/FAQ/FAQ';
import Testimonials from './components/Testimonials/Testimonials';
import './App.css';
import TwoColumnsBoxes from './components/TwoColumnsBoxes/TwoColumnsBoxes';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <BannerHero />     
      <TwoColumnSection sectionId={1} />
      <TwoColumnSection sectionId={2} customClass="color-background" />
      <TipBox groupId={1} />
      <CustomCarousel 
        interval={8000}
      />
      <CompactCarousel />
      <FAQ />
      <Testimonials />
      <TwoColumnsBoxes group="diferenciais" title="Nossos Diferenciais" />
      <Footer />
    </div>
  );
};

export default App;