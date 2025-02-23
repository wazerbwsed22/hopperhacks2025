import React from 'react';
import { Link } from 'react-router-dom';
import './Family.css';

const Family = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <Link to="/user" className="family-box">
          <h2>Utsha : Me</h2>
        </Link>
        <Link to="/member1" className="family-box">
          <h2>Jahnavi</h2>
        </Link>
        <Link to="/member2" className="family-box">
          <h2>Aadith</h2>
        </Link>
      </div>
    </div>
  );
};


// const blockStyle = {
//   textDecoration: 'none',
//   color: 'black',
//   padding: '20px',
//   border: '2px solid black',
//   borderRadius: '10px',
//   width: '150px',
//   textAlign: 'center',
//   cursor: 'pointer',
//   backgroundColor: '#f0f0f0',
  
//   /* 3D Effect */
//   boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
//   transition: 'transform 0.2s, box-shadow 0.2s',

//   /* Hover Effect */
//   ':hover': {
//     transform: 'translateY(-5px)', // Moves box up slightly
//     boxShadow: '6px 6px 15px rgba(0, 0, 0, 0.4)',
//   }
// };

export default Family;
