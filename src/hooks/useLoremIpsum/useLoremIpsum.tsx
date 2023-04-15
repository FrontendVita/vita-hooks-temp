// import { useState } from "react";

// type LoremIpsumOptions = {
//   count: number;
//   units: "words" | "sentences" | "paragraphs";
// };

// const defaultOptions: LoremIpsumOptions = {
//   count: 1,
//   units: "paragraphs",
// };

// const useLoremIpsum = (options?: LoremIpsumOptions) => {
//   const [text, setText] = useState<string>("");

//   const generateLoremIpsum = (options: LoremIpsumOptions) => {
//     const { count, units } = options;
//     const unitString =
//       units === "words"
//         ? "word"
//         : units === "sentences"
//         ? "sentence"
//         : "paragraph";
//     const result = [];

//     for (let i = 0; i < count; i++) {
//       const unitCount = i + 1;
//       const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${unitString} ${unitCount}.`;
//       result.push(loremIpsumText);
//     }

//     return result.join("\n\n");
//   };

//   const optionsToUse = { ...defaultOptions, ...options };

//   const updateText = () => {
//     const newText = generateLoremIpsum(optionsToUse);
//     setText(newText);
//   };

//   return {
//     text,
//     generateLoremIpsum: updateText,
//   };
// };

// export default useLoremIpsum;
