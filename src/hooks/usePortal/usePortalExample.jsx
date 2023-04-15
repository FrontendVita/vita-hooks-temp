// import { useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

// type UsePortalReturnType = {
//   portalElement: HTMLDivElement | null,
// };

// const usePortal = (id: string): UsePortalReturnType => {
//   const portalElementRef = (useRef < HTMLDivElement) | (null > null);

//   useEffect(() => {
//     const existingElement = document.querySelector(`#${id}`);
//     const portalElement = document.createElement("div");
//     portalElement.id = id;

//     if (existingElement) {
//       existingElement.replaceWith(portalElement);
//     } else {
//       document.body.appendChild(portalElement);
//     }

//     portalElementRef.current = portalElement;

//     return () => {
//       portalElementRef.current?.remove();
//     };
//   }, [id]);

//   const Portal: React.FC = ({ children }) => {
//     if (!portalElementRef.current) {
//       return null;
//     }

//     return ReactDOM.createPortal(children, portalElementRef.current);
//   };

//   return {
//     portalElement: portalElementRef.current,
//   };
// };

// export default usePortal;
