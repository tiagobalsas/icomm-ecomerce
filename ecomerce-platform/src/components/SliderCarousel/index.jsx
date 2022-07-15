import React from 'react';
import Slider from 'react-slick';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import data from '../../services/database';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

function SliderCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  const stylesArrowLeft = {
    backgroundColor: '#EEEEEE',
    border: 'none',
    position: 'absolute',
    left: '-2rem',
    top: '8rem',
    cursor: 'pointer',
  };

  const PrevArrow = (props) => {
    const { onClick, style } = props;

    return (
      <div>
        <button
          type='button'
          onClick={onClick}
          style={{ ...style, ...stylesArrowLeft }}
        >
          <RiArrowLeftSLine />
        </button>
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;

    return (
      <div>
        <button type='button' onClick={onClick}>
          <RiArrowRightSLine />
        </button>
      </div>
    );
  };

  return (
    <section className='products'>
      <div className='container'>
        <div className='title'>
          <h1>DESTAQUES</h1>
        </div>
        <div className='sliders'>
          <Slider
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            {...settings}
          >
            {data.map(({ image, product, price, priceParcels }) => (
              <div className='product-container'>
                <img className='product-img' src={image} alt={product} />
                <div className='info'>
                  <h3 className='product-name'>{product}</h3>
                  <h4 className='product-price'>{price}</h4>
                  <p className='product-priceParcels'>{priceParcels}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default SliderCarousel;
