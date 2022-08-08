//https://api.mercadolibre.com/items/MLA1136716168#options
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export function Probandoapi (){

    const [producto,setProducto] = useState([]) /*En esta constante se va a guardar el estado en el que esta mi elemento (producto) */

    useEffect(()=>{ /*Trae lo guardado en el estado -- effect -- en el estado que esta mi componente */
        obtenerDatos()
    },[])

    const obtenerDatos = async()=> {
        const datos = await fetch ('https://api.mercadolibre.com/sites/MLA/categories'); /*el fetch llama a la url*/ 
        const producto = await datos.json() /*await hace una espera que se convierta en peticion de la url*/ /*aca se convierten los datos en json*/ 
        setProducto(producto)
    }
    return(
        <div className="conteiner">
            <h1>Holaa probando Api</h1>
            <ul>
            {
            producto.map(items=>(<li key={items.id}>{items.name}-{items.price}</li>))
            }
            </ul>
        </div>
    )
}


