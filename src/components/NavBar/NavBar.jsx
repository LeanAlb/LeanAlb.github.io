// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={style.nav}>
      <nav className={style.navigator}>
        <span className={style.logo}>Leandro</span>
        <ul className={style.elementos}>
          <li><Link to='#inicio'>Inicio</Link></li>
          <li><Link to='#sobreMi'>Sobre Mi</Link></li>
          <li><Link to='#skills'>Skills</Link></li>
          <li><Link to='#curriculum'>Curriculum</Link></li>
          <li><Link to='#porfolio'>Porfolio</Link></li>
          <li><Link to='#contacto'>Contacto</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
