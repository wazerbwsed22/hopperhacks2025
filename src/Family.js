import React from 'react';
import { Link } from 'react-router-dom';

const Family = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        {/* Block for Family Member 1 */}
        <Link to="/me" style={blockStyle}>
          <h2>Me</h2>
        </Link>

        {/* Block for Family Member 1 */}
        <Link to="/member1" style={blockStyle}>
          <h2>Family Member 1</h2>
        </Link>

        {/* Block for Family Member 2 */}
        <Link to="/member2" style={blockStyle}>
          <h2>Family Member 2</h2>
        </Link>
      </div>
    </div>
  );
};

const blockStyle = {
  textDecoration: 'none',
  color: 'black',
  padding: '20px',
  border: '2px solid black',
  borderRadius: '10px',
  width: '150px',
  textAlign: 'center',
  cursor: 'pointer',
  backgroundColor: '#f0f0f0'
};

export default Family;
