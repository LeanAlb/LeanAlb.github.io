import React from 'react';
import style from './Presentation.module.css';
import Leandro from './Leandro-Perfil.png';

const Presentation = () => {
  return (
    <div className={style.container}>
      <div id="presentation" className={style.card}>
        <img src={Leandro} alt="foto Leandro" className={style.foto} />
        <h1>Leandro Albrieu</h1>
        <h2>FullStack developer</h2>
      </div>
    </div>
  );
}

export default Presentation;
