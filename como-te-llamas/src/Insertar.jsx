import React from "react";

export function Insertar ({nombreAyuda, escribePantalla, valorId, type }) {
    return (
        <input
        onChange={escribePantalla}
        placeholder={nombreAyuda}
        type={type}
        Id={valorId}
        />
    )
}