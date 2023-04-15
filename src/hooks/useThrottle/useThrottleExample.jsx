import React from "react";
import useThrottle from "./useThrottle"; // Replace with the actual path to your useThrottle hook

const MyComponent = () => {
  const handleClick = useThrottle(() => {
    // Function to be throttled
    console.log("Clicked!");
  }, 1000); // Call the useThrottle hook with the desired callback and delay

  return (
    <div>
      <h1>Throttle Example</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default MyComponent;
