import React, { useState } from 'react';

import data from '../services/database';
import Context from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([...data]);
  const [liked, setLiked] = useState([]);
  const [ cart, setCart ] = useState([]);

  const likedProducts = (id) => {
    const alreadyLiked = liked.includes(id);

    if (alreadyLiked) {
      const removeLiked = liked.filter((item) => item !== id);
      setLiked([...removeLiked]);
      return alreadyLiked;
    }

    if (!alreadyLiked) {
      setLiked([...liked, id]);
      return alreadyLiked;
    }
  };

  const addToCartProvider = (id) => {
    setCart([ ...cart, id ]);
  }

  const contextValue = {
    setProducts,
    products,
    liked, 
    likedProducts,
    addToCartProvider, 
    cart,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
