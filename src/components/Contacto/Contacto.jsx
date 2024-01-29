import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia'
import style from './Contacto.module.css'

const Contacto = () => {
  return (
    <div className={style.contacto}>
        <h2>Contactate conmigo:</h2>
        <h3>A mi correo: leandroalbrieu@gmail.com</h3>
        <h3>O a mis redes relacionadas a mi trabajo:</h3>
      <SocialMedia/>
    </div>
  )
}

export default Contacto
