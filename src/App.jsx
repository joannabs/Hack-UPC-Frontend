import React from 'react';
import './App.css';
import {  BrowserRouter, Routes,  Route} from "react-router-dom";
import Home from './views/Home'
import Films from './views/Films';
import Music from './views/Music';
import Games from './views/Games';
import Destination from './views/Destination';
//import Navbar from './components/Navbar/Navbar';
import Login from './Login';
import Rooms from './views/Rooms';

function App() {
  return (
    <BrowserRouter>
    <div>
      <section>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/films' element={<Films/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
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