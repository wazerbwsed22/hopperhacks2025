import { Link } from "react-router-dom";
import photo1 from './profile_memories/utsha/pic1.jpg'
import photo2 from './profile_memories/utsha/pic2.jpg'
import photo3 from './profile_memories/utsha/pic3.jpg'


export const photos = [
  { id: 1, src: photo1 },
  { id: 2, src: photo2 },
  { id: 3, src: photo3 },

];

function Photo() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo) => (
          <Link key={photo.id} to={`/photo/${photo.id}`}>
            <img
              src={photo.src}
              alt=""
              className="gallery"
            />
              
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Photo;
