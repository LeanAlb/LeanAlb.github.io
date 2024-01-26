import React from 'react';
import style from './Presentation.module.css';
import Leandro from './Leandro-Perfil.png';
import SocialMedia from '../SocialMedia/SocialMedia';

const Presentation = () => {
  return (
    <div className={style.container}>
      <div id="presentation" className={style.card}>
        <img src={Leandro} alt="foto Leandro" className={style.foto} />
        <h1>Leandro Albrieu</h1>
        <h2>FullStack developer</h2>
        <h3>JavaScript | React | Redux | Express | PostgreSQL</h3>
        <h4>HTML | CSS</h4>
        <SocialMedia/>
      </div>
    </div>
  );
}

export default Presentation;
