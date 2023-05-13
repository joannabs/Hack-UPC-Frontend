import React from 'react';
import './App.css';
import {  BrowserRouter, Routes,  Route} from "react-router-dom";
import Home from './views/Home'
import Films from './views/Films';
import Music from './views/Music';
import Games from './views/Games';
import Destination from './views/Destination';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div>
      <section>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/films' element={<Films/>}/>
          <Route path='/games' element={<Games/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/destination' element={<Destination/>}/>
          
        </Routes>
      </section>
      </div>
    </BrowserRouter>
  );
}

export default App;