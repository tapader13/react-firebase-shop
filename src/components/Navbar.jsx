import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import style from './navbar.module.css';
import { useCartUser } from './CartProvider';
import { useAuth } from './Auth';
function Navbar() {
  const { state, dispatch } = useCartUser();
  const { shoppingCart, totalPrice, Qty } = state;
  const user = useAuth();
  // useEffect(()=>{
  //   if()
  // },[])
  return (
    <>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <li className={style.li}>
            <Link to={'/'} className={style.a}>
              Mern
            </Link>
          </li>
          {user.isLogged ? (
            <li
              onClick={() => {
                user.logout();
              }}
              className={style.li}
            >
              <Link className={style.a}>LogOut</Link>
            </li>
          ) : (
            ''
          )}
          <li className={style.li}>
            <Link to={'/cart'} className={style.a}>
              <span className={style.cart_icon}>
                <BsCartFill />
              </span>
              <span className={style.cart_count}>{Qty}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
