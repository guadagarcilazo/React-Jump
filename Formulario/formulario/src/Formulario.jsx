import React from "react";

export function Formulario(){
    return (
        <form className="conteiner-form">
        <label className="nombre">
          Nombreㅤ
          <input type="text" name="nombre" />
        </label> <br></br>
        <label>
          Apellidoㅤ
          <input type="text" name="apellido" />
        </label><br></br>
        <label>
          Fecha Nacimientoㅤ
          <input type="date" name="ddmmaaaa" />
        </label><br></br>
        <label>
          Usuarioㅤ
          <input type="text" name="usuario" />
        </label><br></br>
        <label>
          Emailㅤ
          <input type="email" name="mail" />
        </label><br></br>
        <label>
          Contraseñaㅤ
          <input type="password" name="contraseña" />
        </label><br></br>
        <label>
          Repetir Contraseñaㅤ
          <input type="password" name="contraseña" />
        </label><br></br>
        <label>
          Aceptas los terminos y condiciones
          <input type="checkbox" name="contraseña" />
        </label><br></br>
        <input className="enviar" type='submit'></input><br></br>
        <input className="restablecer" type='reset'></input>
      </form>
    )
}