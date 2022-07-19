import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import Context from '../../context/Context';
import logo from '../../assets/logo.png';

import './style.css';

function Header() {
  const { cart } = useContext(Context);

  let cartLength = cart.length;
  return (
    <nav className='header'>
      <div className='header-container'>
        <div className='header-logobox'>
          <img src={logo} alt='logo-icon' className='header-logo' />
          <h4 data-className='header-title'>MCX</h4>
        </div>
        <div>
          <div className='cart-number'>{cartLength}</div>
          <FiShoppingCart size={30} className='header-cart' />
        </div>
      </div>
    </nav>
  );
}

export default Header;
