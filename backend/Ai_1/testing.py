from voice_of_the_patient import record_audio

# Test recording
audio_filepath = "test_recording.mp3"
record_audio(file_path=audio_filepath, timeout=5, phrase_time_limit=5)
print(f"Recording saved to {audio_filepath}")