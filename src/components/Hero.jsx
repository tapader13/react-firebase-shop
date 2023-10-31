import React from 'react';
import style from './hero.module.css';
function Hero() {
  return (
    <>
      <section className={style.section}>
        <header className={style.header}>
          <div className={style.hero_text}>
            <div className={style.wrap_hero}>
              <h1>EID KE RUN APNO KE SUNG</h1>
              <p>Enjoy online shopping with Mern</p>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Hero;
