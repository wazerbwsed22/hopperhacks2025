import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Family from './Family';
import Identify from './Identify';
import Photos from './Photos';
import Member1 from './Members/Member1';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/family" element={<Family />} />
            <Route path="/identify" element={<Identify />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/member1" element={<Member1 />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
