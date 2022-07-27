import React from "react";

import NombreUsuario from './NombreUsuario';
import Tweet from './Tweet';
import Icono from "./Iconos";


 class Twitter extends React.Component {
    render(){
        return(
            <div> 
              <h1>Twitter</h1>
            <div className="nombreUsuario"><NombreUsuario /></div>
            <div className="tweet"><Tweet /></div>
            <div className="icono"><Icono /></div>
            </div>
        )
    }
}

export default Twitter;




// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <h1>Hola Mundo</h1>
//      <p>lorem ipsum dolor</p>
//     </div>
//   );
// }

// export default App;
