import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import style from './NavBar.module.css';
import Presentation from '../Presentation/Presentation';
import SobreMi from '../SobreMi/SobreMi';
import Skills from '../Skills/Skills';
import SocialMedia from '../SocialMedia/SocialMedia';

const NavBar = () => {
  return (
    <div>
      <div className={style.nav}>
        <nav className={style.navigator}>
          <span className={style.logo}>Leandro</span>
          <ul className={style.elementos}>
            <li><ScrollLink to="presentation" smooth={true} duration={500}>Inicio</ScrollLink></li>
            <li><ScrollLink to="sobreMi" smooth={true} duration={500}>Sobre Mi</ScrollLink></li>
            <li><ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink></li>
            <li><ScrollLink to="portfolio" smooth={true} duration={500}>Portfolio</ScrollLink></li>
            <li><ScrollLink to="contacto" smooth={true} duration={500}>Contacto</ScrollLink></li>
          </ul>
        </nav>
      </div>
      <section id='presentation'>
        <Presentation />
      </section>
      <section id='sobreMi'>
        <SobreMi />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      
    </div>
  );
}

export default NavBar;
