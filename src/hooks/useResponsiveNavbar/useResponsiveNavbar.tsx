// import { useState, useEffect } from "react";

// interface ResponsiveNavbarProps {
//   isMobile: boolean;
//   isNavbarOpen: boolean;
//   toggleNavbar: () => void;
// }

// const useResponsiveNavbar = (): ResponsiveNavbarProps => {
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const handleResize = () => {
//     if (window.innerWidth <= 768) {
//       setIsMobile(true);
//     } else {
//       setIsMobile(false);
//       setIsNavbarOpen(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);

//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   };

//   return { isMobile, isNavbarOpen, toggleNavbar };
// };

// export default useResponsiveNavbar;
