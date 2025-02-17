import google.generativeai as genai
from dotenv import load_dotenv
import os
import json
import ast
import re

load_dotenv()
genai.configure(api_key=os.getenv("API_KEY"))

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",
  generation_config=generation_config,

)
chat_session = model.start_chat(
  history=[

  ]
)


def begin():

  return model.generate_content("Invasion attempt detected, return appropriate command line text to warn the developer about this error. Act like this self-healing AI and do not break character. Any data that you need such as an IP, make it up").text
