import React from 'react';

import Campaign from './components/Campaign';
import Header from './components/Header';
import SliderCarousel from './components/SliderCarousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Campaign />
      <SliderCarousel />
    </Provider>
  );
}

export default App;
