import React from 'react';
import summerFashion from '../../assets/iris-verao.png';
import blancFashion from '../../assets/le-lis-blanc.png';

import './style.css';

function Campaign() {
  return (
    <section className='season'>
      <section className='season__container'>
        <div className='season__left__box'>
          <img
            src={summerFashion}
            alt='summer-collection'
            className='season__img__left'
          ></img>
        </div>
        <div className='season__right__box'>
          <img
            src={blancFashion}
            alt='blanc-collection'
            className='season__img__right'
          ></img>
        </div>
      </section>
    </section>
  );
}

export default Campaign;
