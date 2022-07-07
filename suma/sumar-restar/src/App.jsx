import React, {useState} from "react";

export function App(){
    const [numero, setCounter]= useState(0)

    return(
        <div className="Contenedor">
        <div className="texto"></div>
        <div className="botones">
        <button className="suma" onClick={()=>setCounter (numero + 1)}>Sumar</button>
        {numero}
        <button className="resta" onClick={()=> setCounter (numero + 1)}>Restar</button>
        </div></div>
    )

}

