import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Cart} from './pages/cart/Cart';
import {Details} from './pages/details/Details';
import {Index} from './pages/index/Index';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/' element={<Index/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
