import React from 'react';
import Slider from 'react-slick';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import './style.css';

import data from '../../services/database';

function SliderCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const stylesPrevArrow = {
    backgroundColor: "#EEEEEE",
    border: "none",
    position: "absolute",
    left: "-2rem",
    top: "8rem",
    cursor: "pointer",
  };

  const stylesNextArrow = {
    backgroundColor: "#EEEEEE",
    border: "none",
    position: "absolute",
    right: "-2rem",
    top: "8rem",
    cursor: "pointer",
  };

  const PrevArrow = (props) => {
    const { onClick, style } = props;

    return (
      <button
        type='button'
        onClick={onClick}
        style={{ ...style, ...stylesPrevArrow }}
      >
        <RiArrowLeftSLine />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick, style } = props;

    return (
      <button
        type='button'
        onClick={onClick}
        style={{ ...style, ...stylesNextArrow }}
      >
        <RiArrowRightSLine />
      </button>
    );
  };

  return (
    <section className='products'>
      <div className='products-container'>
        <div className='products-title'>
          <h1>DESTAQUES</h1>
        </div>
        <div className='products-carousel'>
          <Slider
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            {...settings}
          >
            {data.map(({ image, product, price, price_x }) => (
              <div>
                <div className='product-container'>
                  <img className='product-img' src={image} alt={product} />
                  <div className='product-info'>
                    <h3 className='product-name'>{product}</h3>
                    <h4 className='product-price'>{price}</h4>
                    <p className='product-price_x'>{price_x}</p>
                  </div>
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
