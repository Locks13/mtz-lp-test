import React from 'react';
import BannerHero from './components/BannerHero/BannerHero';
import TwoColumnSection from './components/TwoColumnSection/TwoColumnSection';
import TipBox from './components/TipBox/TipBox';

import InfoBoxes from './components/InfoBoxes/InfoBoxes';
import CustomCarousel from './components/CustomCarousel/CustomCarousel';
import FAQ from './components/FAQ/FAQ';
import Testimonials from './components/Testimonials/Testimonials';
import LinksCarousel from './components/LinksCarousel/LinksCarousel';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <BannerHero />     
      <TwoColumnSection sectionId={1} />
      <TwoColumnSection sectionId={2} customClass="color-background" />
      <TipBox groupId={1} />
    </div>
  );
};

export default App;