import { useState, useEffect } from "react";

const useDebounce = (func, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(func);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [func, delay]);

  return debouncedValue;
};

export default useDebounce;
