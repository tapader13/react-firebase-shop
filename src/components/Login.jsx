import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from './Auth';
import { useCartUser } from './CartProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  //   const [checkLog, setCheckLog] = useState(null);
  const { state, dispatch } = useCartUser();
  const user = useAuth();
  const navigate = useNavigate();
  const handleSub = async (e) => {
    e.preventDefault();
    try {
      await user.loginUser(email, pass);
      dispatch({ type: 'EMPTY' });
      navigate('/', { replace: true });

      toast.success(
        'Your Payment Done.Now You Can Continue Your Shopping With MERN',
        { position: toast.POSITION.TOP_CENTER }
      );
    } catch (error) {
      navigate('/registration', { replace: true });
    }

    setEmail('');
    setPass('');
    // console.log(user.createUser);
  };
  return (
    <div style={{ marginTop: '100px' }} className='container'>
      <Form onSubmit={handleSub}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            type='password'
            placeholder='Password'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Login
        </Button>
        <Link to={'/registration'}>Create Account</Link>
      </Form>
    </div>
  );
}

export default Login;
