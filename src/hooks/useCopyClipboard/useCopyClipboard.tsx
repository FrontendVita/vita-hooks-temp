import { useState } from "react";

type ClipboardStatus = "idle" | "success" | "error";

const useCopyClipboard = () => {
  const [clipboardStatus, setClipboardStatus] =
    useState<ClipboardStatus>("idle");

  const copyToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      setClipboardStatus("success");
    } catch (error) {
      setClipboardStatus("error");
    }

    document.body.removeChild(textArea);
  };

  return {
    clipboardStatus,
    copyToClipboard,
  };
};

export default useCopyClipboard;
