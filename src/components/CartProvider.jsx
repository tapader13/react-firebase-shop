import React, { createContext, useContext, useReducer } from 'react';
import { CartReducer } from './CartReducer';
const cartContext = createContext();
export const useCartUser = () => {
  return useContext(cartContext);
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    totalPrice: 0,
    Qty: 0,
  });
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
