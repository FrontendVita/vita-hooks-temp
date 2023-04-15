import React from "react";
import useMediaQuery from "./useMediaQuery"; // Replace with the actual path to your useMediaQuery hook

const MyComponent = () => {
  const isMobile = useMediaQuery(["(max-width: 768px)"]);
  const isTablet = useMediaQuery(["(min-width: 769px)", "(max-width: 1024px)"]);
  const isDesktop = useMediaQuery(["(min-width: 1025px)"]);

  return (
    <div>
      <h1>Media Query Example</h1>
      {isMobile[0] && <p>Mobile Screen</p>}
      {isTablet[0] && <p>Tablet Screen</p>}
      {isDesktop[0] && <p>Desktop Screen</p>}
    </div>
  );
};

export default MyComponent;
