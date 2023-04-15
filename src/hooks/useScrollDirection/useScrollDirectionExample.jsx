import React from "react";
import useScrollDirection from "./useScrollDirection";

const ScrollDirectionExample = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div>
      <h1>
        Scroll Direction: <span>{scrollDirection}</span>
      </h1>
      <div style={{ height: "100vh" }}>
        <h1>lorem</h1>
        {/* Placeholder content to make the page scrollable */}
      </div>
    </div>
  );
};

export default ScrollDirectionExample;
