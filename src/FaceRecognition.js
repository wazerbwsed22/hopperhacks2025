import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { FaCamera } from "react-icons/fa6";
import "./index.css"
import { HiOutlineLightBulb } from "react-icons/hi";


const FaceRecognition = () => {
    const webcamRef = useRef(null);
    const [recognizedPerson, setRecognizedPerson] = useState("No one detected");

    const capture = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        const blob = await fetch(imageSrc).then((res) => res.blob());

        const formData = new FormData();
        formData.append("file", blob, "image.jpg");

        try {
            const response = await axios.post("http://127.0.0.1:8000/detect-face/", formData);
            console.log(response)
            setRecognizedPerson(response.data.recognized_person);
        } catch (error) {
            console.error("Error detecting face:", error);
        }
    };

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 id="webcam-heading">Face Recognition System</h1>
            <p id="webcam_paragraph"><HiOutlineLightBulb size={17} style={{ marginRight: '8px' }} />Guide: Point camera at someone and take a picture </p>
            <Webcam ref={webcamRef} screenshotFormat="image/jpeg" style={{border: "2px solid black"}}/>
            <button onClick={capture} id = "webcam-button" style={{ padding: "10px 20px", width: "640px", fontSize: "16px", cursor: "pointer" }}><FaCamera size = {25}/></button>
        </div>
    );
};

export default FaceRecognition;
