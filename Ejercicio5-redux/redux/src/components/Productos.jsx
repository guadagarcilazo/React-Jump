import React from 'react';
import { useState } from 'react';
import Datos from './Datos';

const Productos = () => {
  const [productos] = useState([
      {
      "id": 1,
      "descripcion": "Computadora Lenovo 2012",
      "cantidad": "10 unidades",
      "precio": 50000,
      "img":"https://o.aolcdn.com/images/dar/5845cadfecd996e0372f/63b6635dd325b7a8710e835dc696157b781bc9d8/aHR0cDovL3d3dy5ibG9nY2RuLmNvbS9lcy5lbmdhZGdldC5jb20vbWVkaWEvMjAxMi8wMS94MS1oeWJyaWQtbGVhZC5qcGc="
      },
      {
      "id": 2,
      "descripcion": "Computadora MAC 2010",
      "cantidad": "5 unidades",
      "precio": 100000,
      "img":"https://www.notebookcheck-tr.com/uploads/tx_nbc2/design_unibody2_20101020_01.png"
      },
      {
      "id": 3,
      "descripcion": "Computadora HP 2015",
      "cantidad": "15 unidades",
      "precio": 80000,
      "img":"https://http2.mlstatic.com/D_NQ_NP_997923-MLA43929526493_102020-O.webp"
      },
      {
      "id": 4,
      "descripcion": "Computadora Banghó 2021",
      "cantidad": "20 unidades",
      "precio": 200000,
      "img":"https://bangho.vtexassets.com/arquivos/ids/160128-800-auto?v=637697551432970000&width=800&height=auto&aspect=true"
      },
      {
      "id": 5,
      "descripcion": "Computadora Lenovo 2022",
      "cantidad": "12 unidades",
      "precio": 125000,
      "img":"https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-hero.png?context=bWFzdGVyfHJvb3R8MjczNzUyfGltYWdlL3BuZ3xoMGQvaDYxLzE0MTkwNTI5Njc1Mjk0LnBuZ3xmYTMyYzBlZmE5NTcyNzAyMTZhZmJlMmFmOTVjMmZmYTM4ZTdjNWFiZWM0YzE5YWQ2YzcxNmM3OTE2MThjZmE4"
      }
    ]);

 return (
    <div className="row">

       <h1>Store Productos</h1> 
       
        {productos.map( producto => {
            return <Datos img={producto.img} key={producto.id} descripcion={producto.descripcion} cantidad={producto.cantidad} precio={producto.precio} />
        })}
        
     </div>

    );
};

export default Productos;