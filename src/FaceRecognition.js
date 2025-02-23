import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

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
        <div>
            <h1>Face Recognition System</h1>
            <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
            <button onClick={capture}>Capture & Recognize</button>
            <p>Recognized: {recognizedPerson}</p>
        </div>
    );
};

export default FaceRecognition;
