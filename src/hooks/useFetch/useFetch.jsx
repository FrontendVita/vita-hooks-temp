import { useState, useEffect } from "react";

const useFetch = (
  url,
  method = "GET",
  body = null,
  headers = {},
  options = {}
) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const requestOptions = {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          ...options,
        };

        if (body) {
          requestOptions.body = JSON.stringify(body);
        }

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, headers, options]);

  return { data, isLoading, error };
};

export default useFetch;
