import { React, useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

export default function Detalle() {
  const [dato, setDato] = useState([]);
  const { id } = useParams();

  const obtenerUnUsuario = async () => {
    const datos = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const dato = await datos.json();
    setDato(dato);
  };

  useEffect(() => {
    obtenerUnUsuario();
  });

  return (
    <div>
      <h2 className="info-detalle">Información de usuario </h2>
      <Item info={dato} />
    </div>
  );
}