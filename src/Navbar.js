import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ width: '150', padding: '45px', background: '#F3E4F5', height: '100vh' }}>
      <h1 style={{ color: 'purple', fontSize: '30px'}}>RecallMe</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li style={{ marginBottom: '100px', marginTop: '100px', fontSize: '24px', fontWeight: 'bold' }}>
      <Link to="/family">Family</Link>
        </li>
        <li style={{ marginBottom: '100px', fontSize: '24px', fontWeight: 'bold' }}>
          <Link to="/identify">Identify</Link>
        </li>
        <li style={{ marginBottom: '100px' , fontSize: '24px', fontWeight: 'bold' }}>
          <Link to="/photos">Photos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
