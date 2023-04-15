// import { useEffect, useState } from "react";

// const useScreenshot = () => {
//   const [screenshot, setScreenshot] = useState<Blob | null>(null);

//   useEffect(() => {
//     const captureScreenshot = async () => {
//       // Get the width and height of the page
//       const pageWidth = Math.max(
//         document.body.scrollWidth,
//         document.documentElement.scrollWidth,
//         document.body.offsetWidth,
//         document.documentElement.offsetWidth,
//         document.documentElement.clientWidth
//       );
//       const pageHeight = Math.max(
//         document.body.scrollHeight,
//         document.documentElement.scrollHeight,
//         document.body.offsetHeight,
//         document.documentElement.offsetHeight,
//         document.documentElement.clientHeight
//       );

//       // Create a canvas element to draw the screenshot on
//       const canvas = document.createElement("canvas");
//       canvas.width = pageWidth;
//       canvas.height = pageHeight;

//       // Get the 2D context of the canvas and draw the screenshot on it
//       const ctx = canvas.getContext("2d")!;
//       ctx.drawImage(window.document.documentElement, 0, 0);

//       // Create a new Image object and set the source to the data URL of the canvas
//       const img = new Image();
//       img.src = canvas.toDataURL("image/png");

//       // Wait for the image to load and create a new canvas element with the correct dimensions
//       img.onload = () => {
//         const finalCanvas = document.createElement("canvas");
//         finalCanvas.width = pageWidth;
//         finalCanvas.height = pageHeight;

//         // Get the 2D context of the final canvas and draw the image on it
//         const finalCtx = finalCanvas.getContext("2d")!;
//         finalCtx.drawImage(img, 0, 0);

//         // Convert the final canvas to a blob and set the screenshot state
//         finalCanvas.toBlob((blob) => {
//           setScreenshot(blob);
//         }, "image/png");
//       };
//     };

//     captureScreenshot();
//   }, []);

//   return screenshot;
// };

// export default useScreenshot;
