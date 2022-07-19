import React from 'react';
import summerFashion from '../../assets/iris-verao.png';
import blancFashion from '../../assets/le-lis-blanc.png';

import './style.css';

function Campaign() {
  return (
    <section className='season'>
      <section className='season-container'>
        <div className='season-left-box'>
          <img
            src={summerFashion}
            alt='summer-collection'
            className='season-img-left'
          ></img>
        </div>
        <div className='season-right-box'>
          <img
            src={blancFashion}
            alt='blanc-collection'
            className='season-img-right'
          ></img>
        </div>
      </section>
    </section>
  );
}

export default Campaign;
