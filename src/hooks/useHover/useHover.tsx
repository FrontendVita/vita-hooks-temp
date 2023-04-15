// import { useState, useEffect, RefObject } from "react";

// const useHover = <T extends HTMLElement>(): [RefObject<T>, boolean] => {
//   const [hovered, setHovered] = useState(false);
//   const ref = React.useRef<T>(null);

//   const handleMouseEnter = () => {
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);
//   };

//   useEffect(() => {
//     const node = ref.current;
//     if (node) {
//       node.addEventListener("mouseenter", handleMouseEnter);
//       node.addEventListener("mouseleave", handleMouseLeave);

//       return () => {
//         node.removeEventListener("mouseenter", handleMouseEnter);
//         node.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     }
//   }, [ref]);

//   return [ref, hovered];
// };

// export default useHover;
