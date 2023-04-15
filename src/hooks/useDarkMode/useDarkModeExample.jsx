import React from "react";
import useDarkMode from "./useDarkMode"; // Replace with the actual path to your useDarkMode hook

const App = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div>
      <h1>My App</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
      {/* Render the rest of your app */}
    </div>
  );
};

export default App;
