![Vuejs notion](https://github.com/TH-Activities/saturday-hack-night-template/assets/117498997/b879ba9f-2057-431b-99db-e86a0010b1ea)

# EchoGlobe
EchoGlobe is an advanced voice translator application built with Vue.js. It provides a user-friendly interface for users to select source and target languages, and a voice type for the translation. Users can then speak in the source language and the application translates the voice data into the target language. The translated text is displayed to the user and also converted into audio in the selected voice type, which is then played back to the user, providing a comprehensive and interactive translation experience.

## Features
- Multi-Language Support: Translate between a wide variety of languages with high accuracy.
- Text Display: Displays the translated text in the selected target language for user verification.
- Real-Time Translation: Provides quick and efficient voice-to-voice translation.
- Interactive User Interface: Intuitive and easy-to-use interface built with Vue.js.
- Voice Synthesis: Converts translated text into audio using natural-sounding voices.

## Team members
1. [Jayakanth Arun](https://github.com/JAYAKANTHARUN)
2. [Jayadev Arun](https://github.com/JayadevArun)

## Link to product walkthrough
https://drive.google.com/file/d/1DqNQDmKBYcDrI7G_4sUlbRh7dmvb1LAi/view?usp=sharing

## How it Works ?
1. The user selects the source language, target language, and target voice type.
2. The user initiates the voice recognition by clicking the "Start Microphone" button.
3. The user speaks in the source language and the application captures the voice input and sends it to the translation API.
4. The API translates the voice data into the target language and sends it back to the application.
5. The translated text is displayed to the user.
6. The application converts the translated text into audio in the selected voice type.
7. The translated audio is played back to the user, providing a real-time translation experience.

## Libraries used
- vue - 3.4.21
- axios - 1.6.8
- tailwindcss - 3.4.3

## How to configure
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## How to Run
1. Run `npm run dev` to start the development server.
2. Open your browser and navigate to `http://localhost:5173`.
