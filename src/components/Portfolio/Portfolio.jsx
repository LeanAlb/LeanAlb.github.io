import React from 'react';
import style from './Portfolio.module.css'; 
import Carousel from '../Carousel/Carousel';

const Portfolio = () => {
  return (
    <div className={style.container}>
      <h2>Portfolio</h2>
      <p>Este portfolio fue creado con:</p>
      <Carousel/>
    </div>
  );
}

export default Portfolio;
