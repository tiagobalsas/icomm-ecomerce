import React, { useState } from 'react';

import data from '../services/database';
import Context from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([...data]);

  const contextValue = {
    setProducts,
    products,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
