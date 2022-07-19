import React, {useContext} from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import Slider from 'react-slick';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import Context from '../../context/Context';
import './style.css';

// import product from '../../services/database';

function SliderCarousel() {
  const { products, likedProducts, liked } = useContext(Context);

  const heartProducts = (id) => {
    const alreadyLiked = liked.includes(id);
    return (
      <div onClick={() => likedProducts(id)}>
        {alreadyLiked ? <FaHeart /> : <FiHeart />}
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const stylesPrevArrow = {
    backgroundColor: '#EEEEEE',
    border: 'none',
    position: 'absolute',
    left: '-2rem',
    top: '8rem',
    cursor: 'pointer',
  };

  const stylesNextArrow = {
    backgroundColor: '#EEEEEE',
    border: 'none',
    position: 'absolute',
    right: '-2rem',
    top: '8rem',
    cursor: 'pointer',
  };

  const PrevArrow = (props) => {
    const { onClick, style } = props;

    return (
      <button
        type='button'
        onClick={onClick}
        style={{ ...style, ...stylesPrevArrow }}
      >
        <RiArrowLeftSLine className='arrow' />
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
        <RiArrowRightSLine className='arrow' />
      </button>
    );
  };

  return (
    <section className="products">
      <div className="products-container">
        <div className="products-title">
          <h1>DESTAQUES</h1>
        </div>
        <div className="products-carousel">
          <Slider
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            {...settings}
          >
            {products.map(({ id, image, product, price, priceParcels, extras }) => (
              <div>
                <div className="product-container">
                  <div className="product-extras">
                    <h4>
                      { extras }
                    </h4>
                    { heartProducts(id) }
                  </div>
                  <img className="product-img" src={image} alt={product} />
                  <div className="product-info">
                    <h3 className="product-name">{product}</h3>
                    <h4 className="product-price">{price}</h4>
                    <p className="product-price_x">{priceParcels}</p>
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
