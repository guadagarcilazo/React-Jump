import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MiPrimerEstado } from './componentes/MiPrimerEstado';
import { Ejercicio } from './componentes/Ejercicio';

const root = ReactDOM.createRoot(document.getElementById('root'));

const fecha = new Date();
const yearActual = fecha.getFullYear();

root.render(
  <>
  <App />
  <MiPrimerEstado/>
  <Ejercicio year={yearActual}/>
  </>
);


