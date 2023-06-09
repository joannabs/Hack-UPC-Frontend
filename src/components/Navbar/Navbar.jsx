import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-link">
        <button className="nav-button">Home</button>
      </Link>
      <Link to="/films" className="nav-link">
        <button className="nav-button">Films</button>
      </Link>
      <Link to="/music" className="nav-link">
        <button className="nav-button">Music</button>
      </Link>
      <Link to="/rooms" className="nav-link">
        <button className="nav-button">Game Rooms</button>
      </Link>
      <Link to="/destination" className="nav-link">
        <button className="nav-button">Destination</button>
      </Link>
    </nav>
  );
};

export default Navbar;
