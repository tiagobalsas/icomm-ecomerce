import React, { useContext } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import Slider from 'react-slick';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import Context from '../../context/Context';
import './style.css';

const classNameExtras = (extras) => {
  if (extras === 'VERÃO 2022') return 'product-extras-verao';
  if (extras === '20% OFF') return 'product-extras-20off';
  if (extras === 'LANÇAMENTO') return 'product-extras-lancamento';
  return 'product-extras';
};

function SliderCarousel() {
  const { products, likedProducts, liked, addToCartProvider } =
    useContext(Context);

  const heartProducts = (id) => {
    const alreadyLiked = liked.includes(id);
    return (
      <button type='button' className='heart' onClick={() => likedProducts(id)}>
        {alreadyLiked ? <FaHeart size={30} /> : <FiHeart size={30} />}
      </button>
    );
  };

  const addToCart = (id) => {
    addToCartProvider(id);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  const stylesPrevArrow = {
    backgroundColor: '#CCCCCC',
    border: 'none',
    position: 'absolute',
    left: '-2rem',
    top: '8rem',
    cursor: 'pointer',
    margin: '30px -21px 0 -42px',
    color: 'white',
  };

  const stylesNextArrow = {
    backgroundColor: '#CCCCCC',
    border: 'none',
    position: 'absolute',
    right: '-2rem',
    top: '8rem',
    cursor: 'pointer',
    margin: '30px -42px 0 -42px',
    color: 'white',
  };

  function MouseOver(event) {
    event.target.style.background = '#444444';
  }

  function MouseOut(event) {
    event.target.style.background = '#EEEEEE';
  }

  const PrevArrow = (props) => {
    const { onClick, style } = props;

    return (
      <button
        type='button'
        onClick={onClick}
        style={{ ...style, ...stylesPrevArrow }}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
      >
        <RiArrowLeftSLine size={40} className='arrow-carousel' />
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
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
      >
        <RiArrowRightSLine size={40} className='arrow-carousel' />
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
            {products.map(
              ({ id, image, products, price, priceParcels, extras }) => (
                <div key={id}>
                  <div className='product-card'>
                    <div className='product-extras'>
                      <h4 className={classNameExtras(extras)}>{extras}</h4>
                      {heartProducts(id)}
                    </div>
                    <div className='product-imgAndname'>
                      <img className='product-img' src={image} alt={products} />
                    </div>
                    <div className='product-info'>
                      <h3 className='product-name'>{products}</h3>
                      <h4 className='product-price'>{price}</h4>
                      <p className='product-price_x'>{priceParcels}</p>
                    </div>
                    <button
                      type='button'
                      onClick={() => addToCart(id)}
                      className='product-comprar'
                    >
                      <div className='comprar'>COMPRAR</div>
                    </button>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default SliderCarousel;
