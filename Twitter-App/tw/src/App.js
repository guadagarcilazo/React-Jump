import './App.css';

import { Header } from './Header';
import { Section } from './Section'

export function App() {
  return (
    <div className="App">
     <div className="header"><Header /></div>
     <div className='section'><Section /></div>
    </div>
  );
}


