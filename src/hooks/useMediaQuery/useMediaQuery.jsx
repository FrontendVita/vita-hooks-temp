import { useState, useEffect } from "react";

const useMediaQuery = (queries) => {
  const [matches, setMatches] = useState(
    queries.map((query) => window.matchMedia(query).matches)
  );

  useEffect(() => {
    const mediaQueries = queries.map((query) => window.matchMedia(query));

    const handleMediaQueryChange = (event) => {
      setMatches(queries.map((query, index) => mediaQueries[index].matches));
    };

    mediaQueries.forEach((mediaQuery) =>
      mediaQuery.addListener(handleMediaQueryChange)
    );

    return () => {
      mediaQueries.forEach((mediaQuery) =>
        mediaQuery.removeListener(handleMediaQueryChange)
      );
    };
  }, [queries]);

  return matches;
};

export default useMediaQuery;
