import { useState, useCallback } from "react";

type DPFunction<T> = (n: number) => T;

const useDynamicProgramming = <T,>(
  dpFunction: DPFunction<T>
): DPFunction<T> => {
  const [cache, setCache] = useState<{ [key: number]: T }>({});

  const memoizedDpFunction = useCallback(
    (n: number) => {
      if (cache[n] !== undefined) {
        return cache[n];
      }

      const result = dpFunction(n);
      setCache((prevCache) => ({ ...prevCache, [n]: result }));

      return result;
    },
    [cache, dpFunction]
  );

  return memoizedDpFunction;
};

export default useDynamicProgramming;
