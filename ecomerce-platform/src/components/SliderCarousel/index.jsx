import React from 'react';
import Slider from 'react-slick';

import data from '../../services/database';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className='products'>
      <div className='container'>
        <h1 className='title'>DESTAQUES</h1>
        <Slider {...settings}>
          {data.map(({ image, product, price, priceParcels }) => (
            <div className='product-container'>
              <img className='product-img' src={image} alt={product} />
              <h3 className='product-name'>{product}</h3>
              <h4 className='product-price'>{price}</h4>
              <p className='product-priceParcels'>{priceParcels}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SliderCarousel;
