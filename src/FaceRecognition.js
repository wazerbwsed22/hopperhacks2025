import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Webcam from "react-webcam";
import axios from "axios";
import { FaCamera } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";


const FaceRecognition = () => {
    const webcamRef = useRef(null);
    const [recognizedPerson, setRecognizedPerson] = useState("No one detected");
    const navigate = useNavigate(); // Initialize useNavigate hook

    const capture = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        const blob = await fetch(imageSrc).then((res) => res.blob());

        const formData = new FormData();
        formData.append("file", blob, "image.jpg");

        try {
            const response = await axios.post("http://127.0.0.1:8000/detect-face/", formData);
            const recognizedId = response.data.recognized_person;
            console.log(recognizedId);
            setRecognizedPerson(recognizedId);

            // Redirect to the corresponding page based on recognized person ID
            if (recognizedId) {
                navigate(`/${recognizedId}`);
            }
        } catch (error) {
            console.error("Error detecting face:", error);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 id="webcam-heading">Face Recognition System</h1>
            <p id="webcam_paragraph">
                <HiOutlineLightBulb size={17} style={{ marginRight: '8px' }} />
                Guide: Point camera at someone and take a picture
            </p>
            <Webcam ref={webcamRef} screenshotFormat="image/jpeg" style={{ border: "2px solid black" }} />
            <button
                onClick={capture}
                id="webcam-button"
                style={{ padding: "10px 20px", width: "640px", fontSize: "16px", cursor: "pointer" }}
            >
                <FaCamera size={25} />
            </button>
        </div>
    );
};

export default FaceRecognition;
