import { useEffect } from "react";
import { React, useState } from "react";
import Datos from "./Maestro/Datos";


 function Api() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    obtenerdatos();
  }, []);

  const obtenerdatos = async () => {
    const datos = await fetch("https://jsonplaceholder.typicode.com/users");
    const info = await datos.json();
    setInfo(info);
  };

  return (
    <div className="usuarios">
      <h1 className="info-usuario">Usuarios</h1>

      <Datos Api={info} />
    </div>
  );
};
export default Api;