import React, { useEffect } from "react";
import useIntersection from "./useIntersection"; // Replace with the actual path to your useIntersection hook

const MyComponent = () => {
  const [ref, isIntersecting] = useIntersection();

  const handleIntersection = () => {
    if (isIntersecting) {
      // Execute code when element becomes visible
      console.log("Element is visible in viewport");
    }
  };

  useEffect(() => {
    handleIntersection(); // Call handleIntersection on component mount
  }, []);

  useEffect(() => {
    handleIntersection(); // Call handleIntersection whenever isIntersecting value changes
  }, [isIntersecting]);

  return (
    <div>
      <h1>Intersection Example</h1>
      <div ref={ref} style={{ height: "200px", background: "red" }}>
        {/* Element to be observed */}
      </div>
      {isIntersecting && <p>Element is currently visible in the viewport</p>}
    </div>
  );
};

export default MyComponent;
