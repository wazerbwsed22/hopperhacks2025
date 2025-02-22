import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Family from './Family';
import Photos from './Photos';
import FaceRecognition from './FaceRecognition';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/family" element={<Family />} />
            <Route path="/identify" element={<FaceRecognition />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
