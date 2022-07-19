import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from './components/Header';
import Campaign from './components/Campaign';
import SliderCarousel from './components/SliderCarousel';

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
