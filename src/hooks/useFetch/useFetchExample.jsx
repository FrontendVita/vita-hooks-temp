import React, { useState } from "react";
import useFetch from "./useFetch"; // Replace with the actual path to your useFetch hook

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchGet = () => {
    setIsLoading(true);
    setError(null);

    // Fetch data from the API using GET method
    useFetch("https://jsonplaceholder.typicode.com/posts/1", "GET")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  const fetchPost = () => {
    setIsLoading(true);
    setError(null);

    // Fetch data from the API using POST method with request body
    const postBody = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    useFetch("https://jsonplaceholder.typicode.com/posts", "POST", postBody)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  const fetchPut = () => {
    setIsLoading(true);
    setError(null);

    // Fetch data from the API using PUT method with request body
    const putBody = {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    };
    useFetch("https://jsonplaceholder.typicode.com/posts/1", "PUT", putBody)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  const fetchDelete = () => {
    setIsLoading(true);
    setError(null);

    // Fetch data from the API using DELETE method
    useFetch("https://jsonplaceholder.typicode.com/posts/1", "DELETE")
      .then(() => {
        setData(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data ? (
            <div>
              <h1>Data:</h1>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ) : (
            <div>No data available</div>
          )}
          {error && <div>Error: {error.message}</div>}
        </div>
      )}
      <button onClick={fetchGet}>Fetch GET</button>
      <button onClick={fetchPost}>Fetch POST</button>
      <button onClick={fetchPut}>Fetch PUT</button>
      <button onClick={fetchDelete}>Fetch DELETE</button>
    </div>
  );
};

export default App;
