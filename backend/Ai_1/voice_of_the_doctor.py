import os
from gtts import gTTS
import elevenlabs
from elevenlabs.client import ElevenLabs
import subprocess
import platform

ELEVENLABS_API_KEY = os.environ.get("ELEVENLABS_API_KEY")

def text_to_speech_with_gtts(input_text, output_filepath):
    """
    Convert text to speech using gTTS.
    """
    tts = gTTS(text=input_text, lang="en", slow=False)
    tts.save(output_filepath)
    play_audio(output_filepath)

def text_to_speech_with_elevenlabs(input_text, output_filepath):
    """
    Convert text to speech using ElevenLabs.
    """
    client = ElevenLabs(api_key=ELEVENLABS_API_KEY)
    audio = client.generate(
        text=input_text,
        voice="Aria",
        output_format="mp3_22050_32",
        model="eleven_turbo_v2"
    )
    elevenlabs.save(audio, output_filepath)
    play_audio(output_filepath)

def play_audio(output_filepath):
    """
    Play the generated audio file.
    """
    os_name = platform.system()
    try:
        if os_name == "Darwin":  # macOS
            subprocess.run(['afplay', output_filepath])
        elif os_name == "Windows":  # Windows
            subprocess.run(['powershell', '-c', f'(New-Object Media.SoundPlayer "{output_filepath}").PlaySync();'])
        elif os_name == "Linux":  # Linux
            subprocess.run(['mpg123', output_filepath])  # Use 'mpg123' for Linux
        else:
            raise OSError("Unsupported operating system")
    except Exception as e:
        print(f"An error occurred while trying to play the audio: {e}")