import React, {useState} from 'react';

export const MiPrimerEstado = () => {

    /* ESTO NO FUNCIONA - Hay que usar UseState   --- No cambia el nombre*/

    /* let nombre = 'Guadalupe Sol' /*LET no deja cambiar la informacion dentro */

   // const cambiarNombre = e => { /*CONST sí */
    //     nombre = 'Selena Gomez'
   // } 


    const [nombre, setNombre] = useState('Guadalupe Sol');

    const cambiarNombre = (e, nombreFijo ) => {
        setNombre(nombreFijo)
        console.log (e.target)
    }

   return (
    <div>
         <h3>Mis primer estado : Practica</h3>
         <strong className='label'>{nombre}</strong>
         &nbsp;
         <button onClick={ e => cambiarNombre(e, "Nuevo nombre cambiado") }>Cambiar</button>
         &nbsp;
         <input type='text' onChange={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre'/>
         <h2>Mi nombre es <span className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</span></h2>
    </div>
   )
}
