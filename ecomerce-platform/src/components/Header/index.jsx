import { FiShoppingCart } from 'react-icons/fi';

import logo from '../../../public/assets/logo.png';

import './style.css';

function Header() {
  return (
    <nav className='header'>
      <div className='content'>
        <div className='logobox'>
          <img src={logo} alt='logo-icon' className='logo' />
          <h4 className='title'>MCX</h4>
        </div>
        <div>
          <FiShoppingCart size={25} className='shoppingCart' />
        </div>
      </div>
    </nav>
  );
}

export default Header;
