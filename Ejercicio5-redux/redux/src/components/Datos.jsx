import React from 'react';
import '../App.css'

const Datos = (props) => {
  return (
    <div className='contenedor'>
        
        <div className='card'>
            <img src={props.img} alt="imagen"/>
            <p>{props.id}</p>
            <h4>{props.descripcion}</h4>
            <p>{props.cantidad}</p>
            <p>{props.precio}</p>
            <button>+</button>
            <button>-</button>
        </div>

    </div>
  )
}
export default Datos;