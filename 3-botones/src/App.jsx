import React, {useState} from "react";

export function App(){
    const [numero, texto]= useState('0-Cero')

    return(
        <div className="Contenedor">
        <div className="texto">{numero}</div>
        <div className="botones">
        <button className="boton" onClick={()=> texto('1-Uno')}>1</button>
        <button className="boton" onClick={()=> texto('2-Dos')}>2</button>
        <button className="boton" onClick={()=> texto('3-Tres')}>3</button>
        </div></div>
    )

}