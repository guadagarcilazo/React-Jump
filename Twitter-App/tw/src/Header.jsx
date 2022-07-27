import React from 'react';
import './Header.css';
import Imagen from './Img/twitter.png';
import Fotoperfil from './Img/image.jpeg'

export function Header() {
  return (
    <div className='header'>
       <a href=''><img className='icono-principal' src={Imagen}/></a> 
        <div className='header-1'>
        <a href='' class="fa-regular fa-bell"></a>
        <h1 className='nombre-usuario'>Guada</h1>
        <span className='usuario'>@Guada2103</span>
        <a href='' className='tresp'>...</a>
        <a href=''><img className='foto-perfil' src={Fotoperfil}/></a>
        </div>
    </div>
    
  )
}
