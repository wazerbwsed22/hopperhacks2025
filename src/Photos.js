import React from 'react';
import { Link } from "react-router-dom";
import photo1 from './profile_memories/utsha/pic1.jpg';
import photo2 from './profile_memories/utsha/pic2.jpg';
import photo3 from './profile_memories/utsha/pic3.jpg';
import photo4 from './profile_memories/utsha/pic4.jpg';
import photo5 from './profile_memories/utsha/pic5.jpg';
import photo6 from './profile_memories/utsha/pic6.jpg';
import photo7 from './profile_memories/utsha/pic7.jpg';
import photo8 from './profile_memories/utsha/pic8.jpg';
import photo9 from './profile_memories/utsha/pic9.jpg';
import photo10 from './profile_memories/utsha/pic10.jpg';


import './index.css';


export const photos = [
  { id: 1, src: photo1 },
  { id: 2, src: photo2 },
  { id: 3, src: photo3 },
  { id: 4, src: photo4 },
  { id: 5, src: photo5 },
  { id: 6, src: photo6 },
  { id: 7, src: photo7 },
  { id: 8, src: photo8 },
  { id: 9, src: photo9 },
  { id: 10, src: photo10 },






];

function User() {
  return (
    <div className="user-container">
      <h1>Click on a photo to know more</h1>


      <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
      <div className="photo-gallery">
        {photos.map((photo) => (
          <Link key={photo.id} to={`/photo/${photo.id}`}>
            <img src={photo.src} alt="" className="gallery" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default User;
