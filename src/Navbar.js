import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/family">Family</Link>
        </li>
        <li>
          <Link to="/identify">Identify</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
