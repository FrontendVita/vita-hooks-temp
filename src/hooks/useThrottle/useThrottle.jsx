import { useState, useEffect } from "react";

const useThrottle = (callback, delay) => {
  const [isThrottled, setIsThrottled] = useState(false);

  useEffect(() => {
    let timeoutId;

    const throttledCallback = (...args) => {
      if (!isThrottled) {
        callback(...args);
        setIsThrottled(true);
        timeoutId = setTimeout(() => {
          setIsThrottled(false);
        }, delay);
      }
    };

    return () => {
      clearTimeout(timeoutId);
    };
  }, [callback, delay, isThrottled]);

  return throttledCallback; // Return the throttled callback instead of isThrottled
};

export default useThrottle;
