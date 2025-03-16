import os
import gradio as gr
from brain_of_the_doctor import encode_image, analyze_image_with_query
from voice_of_the_patient import record_audio, transcribe_with_groq
from voice_of_the_doctor import text_to_speech_with_elevenlabs

# System prompt for the AI
system_prompt = """You have to act as a professional doctor..."""  # Your existing prompt

def process_inputs(audio_filepath, image_filepath):
    # Transcribe the audio input
    if audio_filepath:
        speech_to_text_output = transcribe_with_groq(
            audio_filepath=audio_filepath,
            GROQ_API_KEY=os.environ.get("GROQ_API_KEY"),
            stt_model="whisper-large-v3"
        )
    else:
        speech_to_text_output = "No audio provided."

    # Analyze the image input
    if image_filepath:
        doctor_response = analyze_image_with_query(
            query=system_prompt + " " + speech_to_text_output,  # Combine system prompt and user input
            encoded_image=encode_image(image_filepath),
            model="llama-3.2-11b-vision-preview"
        )
    else:
        doctor_response = "No image provided for me to analyze."

    # Convert the doctor's response to speech
    text_to_speech_with_elevenlabs(
        input_text=doctor_response,
        output_filepath="final.mp3"
    )

    return speech_to_text_output, doctor_response, "final.mp3"

# Create the Gradio interface
iface = gr.Interface(
    fn=process_inputs,
    inputs=[
        gr.Audio(sources=["microphone"], type="filepath"),
        gr.Image(type="filepath")
    ],
    outputs=[
        gr.Textbox(label="Speech to Text"),
        gr.Textbox(label="Doctor's Response"),
        gr.Audio("final.mp3", label="Doctor's Voice")
    ],
    title="AI Doctor with Vision and Voice"
)

iface.launch(debug=True)