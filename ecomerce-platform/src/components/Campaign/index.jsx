import React from 'react';
import summerFashion from '../../assets/iris-verao.png';
import blancFashion from '../../assets/le-lis-blanc.png';

import './style.css';

function Campaign() {
  return (
    <section className='campaign'>
      <section className='content'>
        <div className='card-left'>
          <img
            src={summerFashion}
            alt='summer fashion'
            className='img-left'
          />
        </div>
        <div className='card-right'>
          <img
            src={blancFashion}
            alt='blanc-collection'
            className='img-right'
          />
        </div>
      </section>
    </section>
  );
}

export default Campaign;
