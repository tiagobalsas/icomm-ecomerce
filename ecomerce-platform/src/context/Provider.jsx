import React, { useState } from 'react';

import data from '../services/database';
import Context from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([...data]);
  const [liked, setLiked] = useState([]);

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

  const contextValue = {
    setProducts,
    products,
    liked,
    likedProducts,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
