export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, Qty } = state;
  let product;
  let updatePrice;
  let updateQty;
  let index;
  switch (action.type) {
    case 'ADD_TO_CART':
      const checked = shoppingCart.find(
        (shopCart) => shopCart.id === action.id
      );
      if (checked) {
        return state;
      } else {
        product = action.prd;
        // product['qty'] = 1
        product.quantity = 1;
        updateQty = Qty + 1;
        updatePrice = totalPrice + product.price;
        return {
          shoppingCart: [...shoppingCart, product],
          totalPrice: updatePrice,
          Qty: updateQty,
        };
      }
      break;
    case 'INCREMENT':
      product = action.shopCart;
      product.quantity = product.quantity + 1;
      updateQty = Qty + 1;
      updatePrice = totalPrice + product.price;
      index = shoppingCart.findIndex((cart) => {
        return cart.id === action.id;
      });
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatePrice,
        Qty: updateQty,
      };
      break;
    case 'DECREMENT':
      product = action.shopCart;
      if (product.quantity > 1) {
        product.quantity = product.quantity - 1;
        updateQty = Qty - 1;
        updatePrice = totalPrice - product.price;
        index = shoppingCart.findIndex((cart) => {
          return cart.id === action.id;
        });
        shoppingCart[index] = product;
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatePrice,
          Qty: updateQty,
        };
      } else {
        return state;
      }
      break;
    case 'DLT':
      product = action.shopCart;
      updateQty = Qty - product.quantity;
      updatePrice = totalPrice - product.price * product.quantity;
      const filtered = shoppingCart.filter((cart) => cart.id !== action.id);
      return {
        shoppingCart: [...filtered],
        totalPrice: updatePrice,
        Qty: updateQty,
      };
    case 'EMPTY':
      return { shoppingCart: [], totalPrice: 0, Qty: 0 };
    //   console.log(action);
    //   console.log('clicked');
    default:
      return state;
  }
};
