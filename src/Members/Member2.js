import React from 'react';
import { Link } from "react-router-dom";
import photo5 from '../profile_memories/utsha/pic5.jpg';
import photo9 from '../profile_memories/utsha/pic9.jpg';
import photo10 from '../profile_memories/utsha/pic10.jpg';
import '../index.css';

export const photos = [
  { id: 5, src: photo5 },
  { id: 9, src: photo9 },
  { id: 10, src: photo10 },

];

function Member2() {
  return (
    <div className="user-container">
      <h1>This is Aadith, your cousin</h1>
      <h2>
       Aadith is 21 year olds and he's your cousin from your father's side. He loves to play video games
       and go to the gym. You guys bond over playing football 
       and watching shows.
      </h2>

      <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
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

export default Member2;
