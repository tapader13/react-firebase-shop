import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProviderData from './Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import CartProvider from './components/CartProvider';
import CustomAuthProvider from './components/Auth';
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ProviderData>
      <CartProvider>
        <CustomAuthProvider>
          <App />
          <ToastContainer />
        </CustomAuthProvider>
      </CartProvider>
    </ProviderData>
  </BrowserRouter>
);
