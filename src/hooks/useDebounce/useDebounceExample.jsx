import React, { useState } from "react";
import useDebounce from "./useDebounce";

const DebounceExample = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedSearch = useDebounce(() => {
    // Perform search logic here
    console.log("Searching for:", inputValue);
  }, 500);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    debouncedSearch(); // Call the debounced function
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default DebounceExample;
