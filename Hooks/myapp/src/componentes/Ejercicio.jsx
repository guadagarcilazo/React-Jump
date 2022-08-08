import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const Ejercicio = ({year}) => {

    const [yearNow, setYearNow] = useState(year);

    const siguiente = e => {
        setYearNow(yearNow+1)
    }

    const anterior = e => {
        setYearNow(yearNow-1)
    }

    const cambiarYear = e => {
        let dato = parseInt(e.target.value);

        if(Number.isInteger(dato)){
        setYearNow(dato)
        }else{
            setYearNow(year)
        }
    }

  return (
    <div>
        <hr/>
        <h2>Ejercicio con Eventos y useState</h2>
        <p className='label label-uno'> {yearNow} </p>

        <button onClick={siguiente}>Siguiente</button>
        &nbsp;
        <button onClick={anterior}>Anterior</button>
        &nbsp;
        <input onChange={cambiarYear} type="text" placeholder='Cambia el año' />

    </div>
  )
}

//Valida que la informacion sea un numero y que sea requerido

Ejercicio.propTypes = {
    year: PropTypes.number.isRequired
}