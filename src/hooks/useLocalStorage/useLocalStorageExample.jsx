import React from "react";
import useLocalStorage from "./useLocalStorage";

const LocalStorageExample = () => {
  const [count, setCount] = useLocalStorage("count", 0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default LocalStorageExample;
