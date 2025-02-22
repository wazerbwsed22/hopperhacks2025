import whisper

# Load the desired model size; options include "tiny", "base", "small", "medium", "large"
model = whisper.load_model("base")

# Transcribe an audio file
result = model.transcribe("hhuj2.m4a")
print("Transcription:", result["text"])
