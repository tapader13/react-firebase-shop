import '../App.css';
import Hero from './Hero';

import Products from './Products';

function Main() {
  return (
    <div className='App'>
      <Hero />
      <h1
        style={{ marginBlock: '2rem', textAlign: 'center', fontSize: '2rem' }}
      >
        Product List
      </h1>
      <Products />
      {/* <Api /> */}
    </div>
  );
}

export default Main;
