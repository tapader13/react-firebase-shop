import React from 'react';
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Cart from './Cart';
import Main from './Main';
import Error from './Error';
import Navbar from './Navbar';
import Login from './Login';
import Registration from './Registration';
function Rts() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default Rts;
