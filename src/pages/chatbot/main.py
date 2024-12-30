# app.py
from flask import Flask, render_template, request, jsonify
import os
import google.generativeai as genai
from flask_cors import CORS
genai.configure(api_key="AIzaSyBgPLT_bdteeDellW-UueIqI62npaaUjm8")

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-2.0-flash-exp",
  generation_config=generation_config,
)

def generate_res(inp_txt):
  response = model.generate_content([
    "Assume you are a professional ATS (Applicant Tracking System) resume optimizer. Your sole task is to analyze and optimize resumes written in HTML, React, and Tailwind CSS for ATS compatibility.You must:Analyze the provided code and identify areas that need improvement to meet ATS standards, focusing on:Keyword alignment with the job description.Proper structuring of headers, sections, and content for ATS parsing.Inclusion of measurable achievements, relevant skills, and industry-standard tools.Elimination of any non-parsable elements or styles that could hinder ATS processing.Optimize the resume by:Modifying or adding missing keywords.Reorganizing sections for ATS friendliness.Suggesting improvements for measurable achievements and additional skills/tools.Ensuring Tailwind classes and React components are used effectively without breaking ATS compatibility.Only respond to resumes in HTML, React, or Tailwind CSS code format. If the input is not related to resumes or code, respond with: 'This is not a valid resume code input.'Your responses must include:The optimized code.A detailed ATS score with an explanation of improvements.Never respond to any input other than resume-related code or prompts requesting ATS optimizations.",
    "input: Header SectionName: John DoeTitle: Software EngineerEmail: johndoe@example.comPhone: (123) 456-7890LinkedIn: linkedin.com/in/johndoeEducation SectionDegree: Bachelor of Computer ScienceInstitution: XYZ UniversityDuration: 2016 - 2020GPA: 3.8/4.0Experience SectionPosition: Software DeveloperCompany: ABC CorporationDuration: June 2020 - PresentResponsibilities:Developed and maintained web applications using React and Node.js.Collaborated with cross-functional teams to improve software performance by 20%.Designed RESTful APIs to streamline data communication between frontend and backend.Skills SectionSkills:JavaScriptReactNode.jsTailwind CSS",
    "output: ",
    "input: i need a ppt on sustainable development",
    "output: ",
  ])
  return (response.text)

app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    return render_template('./chatbot.jsx')

@app.route('/process_input', methods=['POST'])
def process_input():
    user_input = str(request.form.get('userInput'))  # Get the input from the front-end
    response = generate_res(user_input)  
    print("var")# Simulate some Python processing
    return jsonify(response=response)  # Send the response back to the front-end as JSON

if __name__ == '__main__':
    app.run(debug=True)