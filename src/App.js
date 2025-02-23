import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Family from './Family';
import Identify from './Identify';
import Photo from './Photos';
import Member1 from './Members/Member1';
import Member2 from './Members/Member2';
import User from './Members/User';
import Audiophoto from './Audiophoto';
import FamilyGallery from './FamilyGallery';


function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/family" element={<Family />} />
            <Route path="/identify" element={<Identify />} />
            <Route path="/photos" element={<Photo />} />
            <Route path="/member1" element={<Member1 />} />
            <Route path="/members" element={<FamilyGallery />} />  {/* ✅ Add this line */}
            <Route path="/member2" element={<Member2 />} />
            <Route path="/user" element={<User />} />
            <Route path="/" element={<Photo />} />
            <Route path="/photo/:photoId" element={<Audiophoto />} />


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
