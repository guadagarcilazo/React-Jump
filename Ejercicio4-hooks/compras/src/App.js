import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Api from './componentes/Api';
import Detalle from './componentes/Detalle/Detalle'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Api />} />
      <Route path="/user/:id" element={<Detalle />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
