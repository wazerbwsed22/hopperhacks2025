import { useParams } from "react-router-dom";
import { photos } from "./Photos"; // Import the photos array

function Audiophoto() {
console.log("DIEOIRFOEO")
  const { photoId } = useParams(); // Get the photoId from the URL
  const photo = photos.find(p => p.id === Number(photoId)); // Find the matching photo

  if (!photo) {
    return <h1 className="text-red-500 text-xl">Photo not found!</h1>;
  }

  return (
    <div className="flex flex-col items-center p-4">
        <h2>TESITNGITNIGN</h2>
      <h1 className="text-2xl font-bold mb-4">Photo {photo.id}</h1>
      <img src={photo.src} alt="" className="w-96 h-auto rounded-lg shadow-md" />
    </div>
  );
}

export default Audiophoto;
