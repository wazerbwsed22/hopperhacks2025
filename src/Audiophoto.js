import { useParams } from "react-router-dom";
import { photos } from "./Photos"; // Import the photos array
import { FaVolumeUp } from "react-icons/fa"; // Import speaker icon from react-icons

function Audiophoto() {
  const { photoId } = useParams();
  const photo = photos.find(p => p.id === Number(photoId));

  if (!photo) {
    return <h1 style={{ color: "red", fontSize: "1.25rem" }}>Photo not found!</h1>;
  }

  return (
    <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
      <img 
        src={photo.src} 
        alt="" 
        style={{ 
          width: "1400px", 
          height: "auto", 
          borderRadius: "8px", 
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)", 
          marginRight: "20px" // Adds spacing between image and button
        }} 
      />
      <button 
        style={{ 
          backgroundColor: "#007bff", 
          color: "white", 
          border: "none", 
          borderRadius: "50%", 
          width: "80px", 
          height: "80px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        marginLeft: "50px"
        }}
        onClick={() => alert("Play audio!")} 
      >
        <FaVolumeUp size={24} />
      </button>
    </div>
  );
}

export default Audiophoto;
