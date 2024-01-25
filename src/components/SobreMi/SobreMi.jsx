import React from 'react';
import style from './SobreMi.module.css';
import capturaCV from './captura-cv.png';

const SobreMi = () => {
  const openCV = () => {
    window.open(capturaCV, '_blank');
  };

  return (
    <div className={style.container}>
      <div id='sobreMi' className={style.detail}>
        <h2>Sobre Mi</h2>
        <p>
          ¡Hola! Soy Leandro Albrieu, un apasionado de la programación en la etapa final de mi formación en la academia Soy Henry. Con 22 años, estoy emocionado por comenzar mi carrera como programador. Durante mi tiempo en la academia, he adquirido experiencia en proyectos exitosos y habilidades colaborativas en equipos. Mi enfoque incluye desarrollo front-end y back-end, con habilidades en HTML, CSS, JavaScript, React, Redux, Express y PostgreSQL. Ansío contribuir con mi pasión y habilidades en un entorno laboral desafiante. ¡Listo para nuevos desafíos y aprendizaje continuo!
        </p>
      </div>
      <div>
        <button className={style.button} onClick={openCV}>Ver CV</button>
      </div>
    </div>
  );
};

export default SobreMi;
