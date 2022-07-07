import './App.css'
import { useState } from 'react'
import { Insertar } from './Insertar';

export function App() {
    const [state, setState] = useState (
        {
        nombre: '',
        apellidos: ['', '']

        })

     function Escribir (Event){
       setState(
        {
        nombre: Event.target.value,
        apellidos: [state.apellidos[0],
        state.apellidos[1],
        Event.target.value ]
     }
)
}

//Me falto una cosita aca para poder hacer que se acumulen las tres palabras :(

return (
    <div className='margen'>
           
       <div className='box1'>
            {/* <input value={state.nombre} onChange={(e) => setState({...state,nombre: e.target.value})} placeholder='Nombre'  />
    
            <input value={state.apellidos.length[0]} onChange={(e) => setState({...state,apellidos:[ e.target.value, state.apellidos[1]]})} placeholder='Apellido Materno' />
    
            <input value={state.apellidos.length[1]} onChange={(e) => setState({...state,apellidos:[state.apellidos[0], e.target.value]})} placeholder='Apellido Paterno' />
            </div> */}
            <Insertar valorId='1'type='text' escribePantalla={Escribir}  nombreAyuda='Nombre' /> 
            <Insertar valorId='2'type='text' escribePantalla={Escribir}  nombreAyuda='Apellido Materno' />
            <Insertar valorId='3'type='text' escribePantalla={Escribir}  nombreAyuda='Apellido Paterno' />
       </div>
    
      <div className='box2'>
          <h2>Mi nombre es:</h2>
          <h1>{state.nombre} {state.apellidos[0]} {state.apellidos[1]} </h1>
      </div>
    
    </div>
        );
      }
