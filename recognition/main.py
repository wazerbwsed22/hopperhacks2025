import cv2
import pickle
import face_recognition
import numpy as np
import cvzone
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import io

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows requests from any origin (you can change this to ["http://localhost:3000"] for security)
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Load the encoding file

print("Loading Encoded File ...")
with open("EncodeFile.p", "rb") as file:
    encodeListKnownWithIds = pickle.load(file)
encodeListKnown, studentIds = encodeListKnownWithIds
print("Encode File Loaded")

@app.post("/detect-face/")
async def detect_face(file: UploadFile = File(...)):
    # Read image bytes
    image_bytes = await file.read()
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Resize & Convert
    imgS = cv2.resize(img, (0, 0), None, 0.25, 0.25)
    imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)

    # Recognize faces
    faceCurFrame = face_recognition.face_locations(imgS)
    encodeCurFrame = face_recognition.face_encodings(imgS, faceCurFrame)

    result = "Unknown"
    for encodeFace, faceLoc in zip(encodeCurFrame, faceCurFrame):
        matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
        faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)
        matchIndex = np.argmin(faceDis)

        if matches[matchIndex]:
            result = studentIds[matchIndex]
            if result == "100":
                print("Utsha Recognized")
            elif result == "101":
                print("Aadith Recognized")
            elif result == "102":
                print("Jahnavi Recognized")

    return {"recognized_person": result}

# Run server with:
# uvicorn server:app --host 0.0.0.0 --port 8000

# while True:
#     success, img = cap.read()

#     imgS = cv2.resize(img,(0,0),None,0.25,0.25)
#     imgS = cv2.cvtColor(imgS,cv2.COLOR_BGR2RGB)

#     faceCurFrame = face_recognition.face_locations(imgS)
#     encodeCurFrame = face_recognition.face_encodings(imgS,faceCurFrame)


#     for encodeFace, faceLoc in zip(encodeCurFrame, faceCurFrame):
#         matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
#         faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)

#         # print("Matches", matches)
#         # print("faceDis", faceDis)

#         matchIndex = np.argmin(faceDis)

#         # print("Match Index", matchIndex)

#         if matches[matchIndex]:
#             # print("Known Face Detected")
#             pId = studentIds[matchIndex]
#             if pId == "100":
#                 print("Utsha recongnized")
#             elif pId == "101":
#                 print("Aadith recognized")
#             elif pId == "102":
#                 print("Jahnavi recognized")
#             print(studentIds[matchIndex])
#             y1, x2, y2, x1 = faceLoc
#             y1, x2, y2, x1 = y1 * 4, x2 * 4, y2 * 4, x1 * 4
#             bbox = x1, y1, x2-x1, y2-y1
#             img =  cvzone.cornerRect(img, bbox, rt=0)

#     cv2.imshow("Face Recognition", img)
#     cv2.waitKey(1)

