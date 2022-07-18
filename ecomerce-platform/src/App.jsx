import React from 'react';

import Campaign from './components/Campaign';
import Header from './components/Header';
import SliderCarousel from './components/SliderCarousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div>
      <Header />
      <Campaign />
      <SliderCarousel />
    </div>
  );
}

export default App;
