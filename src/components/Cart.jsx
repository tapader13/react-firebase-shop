import React from 'react';
import { useCartUser } from './CartProvider';
import { Button } from 'react-bootstrap';
import { FaRegRectangleXmark } from 'react-icons/fa6';
import style from './cart.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const { state, dispatch } = useCartUser();
  const { shoppingCart, totalPrice, Qty } = state;
  //   console.log(userCart);
  const user = useAuth();
  const navigate = useNavigate();
  const handleBtn = () => {
    if (user.isLogged) {
      toast.success(
        'Your Payment Done.Now You Can Continue Your Shopping With MERN',
        { position: toast.POSITION.TOP_CENTER }
      );
      dispatch({ type: 'EMPTY' });
      navigate('/', { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  };
  return (
    <div className={style.container}>
      <div className={style.box}>
        {shoppingCart.length > 0
          ? shoppingCart.map((shopCart, i) => {
              return (
                <div className={style.cart_box} key={i}>
                  <div className={style.first}>
                    <img className={style.img} src={shopCart.img} alt='' />
                    <h6>{shopCart.name.slice(1, 15)}</h6>
                  </div>

                  <div className={style.icon}>
                    <p style={{ fontWeight: '900' }}>
                      &#2547; {shopCart.price}.00
                    </p>
                    <p
                      onClick={() => {
                        dispatch({
                          type: 'INCREMENT',
                          id: shopCart.id,
                          shopCart,
                        });
                      }}
                    >
                      <i className={`fa-solid fa-plus ${style.fa_plus}`}></i>
                    </p>
                    <p>{shopCart.quantity}</p>
                    <p
                      onClick={() => {
                        dispatch({
                          type: 'DECREMENT',
                          id: shopCart.id,
                          shopCart,
                        });
                      }}
                    >
                      {' '}
                      <i className={`fa-solid fa-minus ${style.fa_minus}`}></i>
                    </p>
                  </div>
                  <div className={style.amount}>
                    <h6>{shopCart.price * shopCart.quantity}Tk</h6>
                    <i
                      onClick={() => {
                        dispatch({
                          type: 'DLT',
                          id: shopCart.id,
                          shopCart,
                        });
                      }}
                      className='fa-solid fa-trash'
                    ></i>
                  </div>
                  {/* <div className={style.trash}> */}
                  {/* <i
                      onClick={() => {
                        dispatch({
                          type: 'DLT',
                          id: shopCart.id,
                          shopCart,
                        });
                      }}
                      className='fa-solid fa-trash'
                    ></i> */}
                  {/* </div> */}
                </div>
              );
            })
          : 'Your cart is now empty. Please, add some product in your cart then click here.'}
      </div>
      {shoppingCart.length > 0 ? (
        <div className={style.payement}>
          <h3 style={{ textAlign: 'center', fontWeight: '600' }}>
            Cart Summery
          </h3>

          <div className={style.tlt_items}>
            <h4>Total Items</h4>
            <h4>{Qty}</h4>
          </div>
          <div className={style.tlt_price}>
            <h4>Total Price</h4>
            <h4>{totalPrice}Tk</h4>
          </div>

          <Button
            onClick={handleBtn}
            style={{
              fontWeight: '600',
              marginBlock: '5px',
            }}
          >
            Payment
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Cart;
