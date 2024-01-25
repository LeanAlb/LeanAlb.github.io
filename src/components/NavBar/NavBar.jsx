// NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={style.nav}>
      <nav className={style.navigator}>
        <span className={style.logo}>Leandro</span>
        <ul className={style.elementos}>
          <li><NavLink to='#presentation'>Inicio</NavLink></li>
          <li><NavLink to='#sobreMi'>Sobre Mi</NavLink></li>
          <li><NavLink to='#skills'>Skills</NavLink></li>
          <li><NavLink to='#curriculum'>Curriculum</NavLink></li>
          <li><NavLink to='#porfolio'>Porfolio</NavLink></li>
          <li><NavLink to='#contacto'>Contacto</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
