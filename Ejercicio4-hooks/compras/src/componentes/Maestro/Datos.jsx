import React from "react";
import ItemM from "./ItemM";

export default function Datos({ Api }) {
  return (
    <div>
      {Api.map((info) => {
        return <ItemM key={info.id} nombre={info.name} id={info.id} />;
      })}
    </div>
  );
}