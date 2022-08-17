import React from "react";
import { Link } from "react-router-dom";

 function ItemM ({ id, nombre }) {
  return (
    <div className="caja-usuario">
      <img className="ft-us" src='' alt={`Foto de perfil suario ${id}`} />
      <h2 className="nombre-usuario">Nombre: {nombre}</h2>
      <div className="boton-a-detalle">
        <Link to={`/user/${id}`}> Usuario {id}</Link>
      </div>
    </div>
  );
}
export default ItemM;