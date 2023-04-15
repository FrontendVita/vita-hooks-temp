import React from "react";
import useDynamicProgramming from "./useDynamicProgramming";

const fibonacci = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const App: React.FC = () => {
  const memoizedFibonacci = useDynamicProgramming(fibonacci);

  const handleButtonClick = () => {
    const result = memoizedFibonacci(10);
    console.log(result);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Calculate Fibonacci</button>
    </div>
  );
};
