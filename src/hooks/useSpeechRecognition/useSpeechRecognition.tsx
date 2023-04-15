// import { useState, useEffect } from "react";

// const useSpeechRecognition = (): [string, boolean, () => void, () => void] => {
//   const [transcript, setTranscript] = useState("");
//   const [isListening, setIsListening] = useState(false);

//   const recognition = new (window.SpeechRecognition ||
//     window.webkitSpeechRecognition ||
//     window.mozSpeechRecognition ||
//     window.msSpeechRecognition)();

//   useEffect(() => {
//     recognition.onresult = (event: SpeechRecognitionEvent) => {
//       const currentTranscript = event.results[0][0].transcript;
//       setTranscript(currentTranscript);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };
//   }, [recognition]);

//   const startListening = (): void => {
//     recognition.start();
//     setIsListening(true);
//   };

//   const stopListening = (): void => {
//     recognition.stop();
//     setIsListening(false);
//   };

//   return [transcript, isListening, startListening, stopListening];
// };

// export default useSpeechRecognition;
