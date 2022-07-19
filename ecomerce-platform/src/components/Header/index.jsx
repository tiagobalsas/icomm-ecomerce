import { FiShoppingCart } from 'react-icons/fi';

import logo from '../../assets/logo.png';

import './style.css';

function Header() {
  return (
    <nav className='header'>
      <div className='header__container'>
        <div className='header__logobox'>
          <img src={logo} alt='logo-icon' className='header__logo' />
          <h4 data-className='header__title'>MCX</h4>
        </div>
        <div>
          <FiShoppingCart className='header__cart' />
        </div>
      </div>
    </nav>
  );
}

export default Header;
