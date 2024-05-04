<template>
    <div class="relative">
        <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${bgImage})` }">
            <div class="backdrop-filter backdrop-blur-md h-full w-full"></div>
        </div>

        <div class="container h-[100vh] mx-auto px-4 relative">
            <h1 class="text-3xl font-poppins text-center py-8 text-white">Voice Translator</h1>

            <div class="flex justify-between gap-5">

                <div class="w-1/4 p-10 border rounded-[50px] h-[75vh]">
                    <div class="flex items-center">
                        <label for="sourceLanguage" class="block text-base font-poppins pr-2 text-white">Source Language
                        </label>
                        <select id="sourceLanguage" v-model="sourceLanguage" class=" font-poppins border rounded">
                            <option v-for="language in languages" :value="language.code">{{ language.name }}</option>
                        </select>
                    </div>

                    <button @click="toggleRecognition"
                        class="my-10 bg-blue-700 hover:bg-blue-900 transition-all duration-300 text-white p-3 rounded-full">
                        Start Microphone
                    </button>

                    <p class="text-green-500 text-xl font-poppins  ">Mic Status : {{ micStatus }}</p>

                    <p class="my-10 font-poppins text-2xl text-white ">{{ inputData }}</p>
                </div>

                <div class="w-1/4 p-10 border-[1px] border-white rounded-[50px] h-[75vh]">
                    <div class="flex items-center">
                        <label for="targetLanguage" class="block text-base font-poppins pr-2 text-white">Target Language
                        </label>
                        <select id="targetLanguage" v-model="targetLanguage" class=" font-poppins border rounded">
                            <option v-for="language in languages" :value="language.code">{{ language.name }}</option>
                        </select>
                    </div>
                    <p class="text-green-500 font-poppins text-xl mt-10">{{ message }}</p>
                    <p v-if="outputData" class="mt-10 mb-3 font-poppins text-xl text-white">Translated Data : </p>
                    <p v-if="outputData" class="font-poppins text-2xl text-white">{{ outputData }}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import bgImage from '../images/Translator.jpg';
export default {
    data() {
        return {
            message: '',

            bgImage,

            micStatus: 'OFF',
            recognition: null,

            inputData: '',
            outputData: '',

            sourceLanguage: '',
            targetLanguage: '',

            languages: [
                {
                    "code": "af",
                    "name": "Afrikaans"
                },
                {
                    "code": "am",
                    "name": "Amharic"
                },
                {
                    "code": "ar",
                    "name": "Arabic"
                },
                {
                    "code": "bn",
                    "name": "Bengali"
                },
                {
                    "code": "bg",
                    "name": "Bulgarian"
                },
                {
                    "code": "ca",
                    "name": "Catalan"
                },
                {
                    "code": "zh-CN",
                    "name": "Chinese (Simplified)"
                },
                {
                    "code": "zh-TW",
                    "name": "Chinese (Traditional)"
                },
                {
                    "code": "hr",
                    "name": "Croatian"
                },
                {
                    "code": "cs",
                    "name": "Czech"
                },
                {
                    "code": "da",
                    "name": "Danish"
                },
                {
                    "code": "nl",
                    "name": "Dutch"
                },
                {
                    "code": "en",
                    "name": "English"
                },
                {
                    "code": "et",
                    "name": "Estonian"
                },
                {
                    "code": "fi",
                    "name": "Finnish"
                },
                {
                    "code": "fr",
                    "name": "French"
                },
                {
                    "code": "gl",
                    "name": "Galician"
                },
                {
                    "code": "de",
                    "name": "German"
                },
                {
                    "code": "el",
                    "name": "Greek"
                },
                {
                    "code": "gu",
                    "name": "Gujarati"
                },
                {
                    "code": "hi",
                    "name": "Hindi"
                },
                {
                    "code": "hu",
                    "name": "Hungarian"
                },
                {
                    "code": "id",
                    "name": "Indonesian"
                },
                {
                    "code": "ga",
                    "name": "Irish"
                },
                {
                    "code": "it",
                    "name": "Italian"
                },
                {
                    "code": "ja",
                    "name": "Japanese"
                },
                {
                    "code": "km",
                    "name": "Khmer"
                },
                {
                    "code": "ko",
                    "name": "Korean"
                },
                {
                    "code": "lv",
                    "name": "Latvian"
                },
                {
                    "code": "lt",
                    "name": "Lithuanian"
                },
                {
                    "code": "ms",
                    "name": "Malay"
                },
                {
                    "code": "mt",
                    "name": "Maltese"
                },
                {
                    "code": "mr",
                    "name": "Marathi"
                },
                {
                    "code": "my",
                    "name": "Myanmar (Burmese)"
                },
                {
                    "code": "fa",
                    "name": "Persian"
                },
                {
                    "code": "pl",
                    "name": "Polish"
                },
                {
                    "code": "pt",
                    "name": "Portuguese"
                },
                {
                    "code": "ro",
                    "name": "Romanian"
                },
                {
                    "code": "ru",
                    "name": "Russian"
                },
                {
                    "code": "sk",
                    "name": "Slovak"
                },
                {
                    "code": "sl",
                    "name": "Slovenian"
                },
                {
                    "code": "so",
                    "name": "Somali"
                },
                {
                    "code": "es",
                    "name": "Spanish"
                },
                {
                    "code": "su",
                    "name": "Sundanese"
                },
                {
                    "code": "sw",
                    "name": "Swahili"
                },
                {
                    "code": "sv",
                    "name": "Swedish"
                },
                {
                    "code": "ta",
                    "name": "Tamil"
                },
                {
                    "code": "te",
                    "name": "Telugu"
                },
                {
                    "code": "th",
                    "name": "Thai"
                },
                {
                    "code": "tr",
                    "name": "Turkish"
                },
                {
                    "code": "uk",
                    "name": "Ukrainian"
                },
                {
                    "code": "ur",
                    "name": "Urdu"
                },
                {
                    "code": "uz",
                    "name": "Uzbek"
                },
                {
                    "code": "vi",
                    "name": "Vietnamese"
                },
                {
                    "code": "cy",
                    "name": "Welsh"
                },
                {
                    "code": "xh",
                    "name": "Xhosa"
                },
                {
                    "code": "zu",
                    "name": "Zulu"
                },
                {
                    "code": "he",
                    "name": "Hebrew"
                },
                {
                    "code": "zh",
                    "name": "Chinese (Simplified)"
                }
            ],
        };
    },
    methods: {
        async translate() {
            if (this.sourceLanguage && this.targetLanguage && this.inputData && this.sourceLanguage !== this.targetLanguage) {
                const encodedParams = new URLSearchParams();
                encodedParams.set('source_language', this.sourceLanguage);
                encodedParams.set('target_language', this.targetLanguage);
                encodedParams.set('text', this.inputData);

                const options = {
                    method: 'POST',
                    url: 'https://text-translator2.p.rapidapi.com/translate',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'X-RapidAPI-Key': '8257ca243bmsh0ddc264dcc26c21p1cc9f5jsn8943e00c3da7',
                        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
                    },
                    data: encodedParams,
                };

                try {
                    const response = await axios.request(options);
                    if (response.data.status == 'success') {
                        this.message = 'Translation successful!';
                        this.outputData = response.data.data.translatedText;
                    }
                } catch (error) {
                    console.error(error)
                    alert(error.name);
                }
            }
            else {
                alert("Please ensure all fields are filled out correctly");
            }
        },
        toggleRecognition() {
            if (this.sourceLanguage && this.targetLanguage && this.sourceLanguage !== this.targetLanguage) {
                if (this.micStatus === 'OFF') {
                    this.startRecognition();
                } else {
                    this.stopRecognition();
                }
            }
            else {
                alert("Please ensure all fields are filled out correctly");
            }
        },
        startRecognition() {
            this.micStatus = 'Listening...';
            this.recognition = new window.webkitSpeechRecognition();
            this.recognition.interimResults = true;

            this.recognition.lang = this.sourceLanguage;

            this.recognition.onresult = (event) => {
                const transcript = Array.from(event.results)
                    .map((result) => result[0])
                    .map((result) => result.transcript)
                    .join('');

                this.inputData = transcript;
            };

            this.recognition.onspeechend = () => {
                this.stopRecognition();
            };

            this.recognition.start();

        },
        stopRecognition() {
            if (this.recognition) {
                this.recognition.stop();
                this.recognition = null;
            }
            this.micStatus = 'OFF';
            this.translate();
        },
    },
}    
</script>