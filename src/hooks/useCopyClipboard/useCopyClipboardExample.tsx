import useClipboard from "./useClipboard";

const MyComponent = () => {
  const { clipboardStatus, copyToClipboard } = useClipboard();

  const handleCopy = () => {
    copyToClipboard("Hello, world!");
  };

  return (
    <div>
      {clipboardStatus === "success" && <p>Text copied to clipboard!</p>}
      {clipboardStatus === "error" && <p>Error copying text to clipboard.</p>}
      <button onClick={handleCopy}>Copy text to clipboard</button>
    </div>
  );
};
