import React from "react";
import { Link } from "react-router-dom";

function Item ({ info }) {
  return (
    <div>
      <div className="volver-a-maestro">
        <Link to="/"> Volver </Link>
      </div>
      <div className="caja-detalle">
        <img className="img" src='' alt={`Foto de usuario ${info.id}`} />
        <h2>ID: {info.id}</h2>
        <h2>Usuario: {info.username}</h2>
        <h2>Nombre: {info.name}</h2>
        <h2>Email: {info.email}</h2>
      </div>
    </div>
  );
};
export default Item;