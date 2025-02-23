import React from 'react';
import { Link } from "react-router-dom";
import photo1 from '../profile_memories/utsha/pic1.jpg';
import photo6 from '../profile_memories/utsha/pic6.jpg';
import photo11 from '../profile_memories/utsha/pic11.jpg';
import '../index.css';


export const photos = [
  { id: 1, src: photo1 },
  { id: 6, src: photo6 },
  { id: 11, src: photo11 },

];

function Member1() {
  return (
    <div className="user-container">
      <h1>This is Jahnavi, your cousin</h1>
      <h2>
        Jahnavi is 21 year olds and she's your cousin from your mother's side. She loves to read and paint.
        Both of you love to watch movies together.
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

export default Member1;
