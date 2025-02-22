import pymongo
import gridfs
import os

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["dementiaSystem"]
fs = gridfs.GridFS(db)

folderPath = "./images"

for file in os.listdir(folderPath):
    file_path = os.path.join(folderPath, file)

    if os.path.isfile(file_path):
        with open(file_path, "rb") as img:
            file_id = fs.put(img, filename=file)