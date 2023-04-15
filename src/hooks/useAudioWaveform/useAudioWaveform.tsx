// import { useState, useEffect } from "react";

// const useAudioWaveform = (audioFile: File) => {
//   const [waveform, setWaveform] = useState<number[]>([]);

//   useEffect(() => {
//     const audioContext = new AudioContext();
//     const fileReader = new FileReader();
//     fileReader.readAsArrayBuffer(audioFile);

//     fileReader.onload = () => {
//       const audioBuffer = audioContext.decodeAudioData(
//         fileReader.result as ArrayBuffer
//       );

//       const canvas = document.createElement("canvas");
//       const canvasContext = canvas.getContext("2d");
//       const width = 1000;
//       const height = 200;
//       canvas.width = width;
//       canvas.height = height;

//       const data = audioBuffer.getChannelData(0);
//       const step = Math.ceil(data.length / width);
//       const amp = height / 2;
//       canvasContext.fillStyle = "rgb(255, 255, 255)";
//       canvasContext.fillRect(0, 0, width, height);
//       canvasContext.lineWidth = 1;
//       canvasContext.strokeStyle = "rgb(0, 0, 0)";
//       canvasContext.beginPath();

//       let x = 0;
//       for (let i = 0; i < width; i++) {
//         const min = 1.0;
//         const max = -1.0;
//         for (let j = 0; j < step; j++) {
//           const datum =
//             data[Math.floor((i * step + j) * (data.length / width))];
//           if (datum < min) {
//             min = datum;
//           }
//           if (datum > max) {
//             max = datum;
//           }
//         }
//         canvasContext.moveTo(x, (1 + min) * amp);
//         canvasContext.lineTo(x, (1 + max) * amp);
//         x++;
//       }
//       canvasContext.stroke();

//       const imageData = canvasContext.getImageData(0, 0, width, height);
//       const pixelData = imageData.data;
//       const pixelValues = [];

//       for (let i = 0; i < pixelData.length; i += 4) {
//         const r = pixelData[i];
//         const g = pixelData[i + 1];
//         const b = pixelData[i + 2];
//         const brightness = Math.round((r + g + b) / 3);
//         pixelValues.push(brightness);
//       }

//       setWaveform(pixelValues);
//     };
//   }, [audioFile]);

//   return waveform;
// };

// export default useAudioWaveform;
