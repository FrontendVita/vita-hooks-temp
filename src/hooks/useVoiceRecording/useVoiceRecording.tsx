import { useState, useEffect } from "react";

interface VoiceRecorderHook {
  recording: boolean;
  startRecording: () => void;
  stopRecording: () => void;
  downloadRecording: (fileName: string) => void;
}

const useVoiceRecorder = (): VoiceRecorderHook => {
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

  let mediaRecorder: MediaRecorder | null = null;
  let audioContext: AudioContext | null = null;
  let mediaStream: MediaStream | null = null;
  let sourceNode: MediaStreamAudioSourceNode | null = null;

  useEffect(() => {
    audioContext = new AudioContext();
  }, []);

  const handleDataAvailable = (event: BlobEvent) => {
    if (event.data && event.data.size > 0) {
      setAudioChunks((audioChunks) => [...audioChunks, event.data]);
    }
  };

  const startRecording = async () => {
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      sourceNode = audioContext.createMediaStreamSource(mediaStream);
      const dest = audioContext.createMediaStreamDestination();
      sourceNode.connect(dest);
      mediaRecorder = new MediaRecorder(dest.stream, {
        mimeType: "audio/webm",
      });
      mediaRecorder.addEventListener("dataavailable", handleDataAvailable);
      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      sourceNode?.disconnect();
      mediaStream?.getTracks().forEach((track) => track.stop());
      setRecording(false);
    }
  };

  const downloadRecording = (fileName: string) => {
    if (audioChunks.length > 0) {
      const blob = new Blob(audioChunks, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return { recording, startRecording, stopRecording, downloadRecording };
};

export default useVoiceRecorder;
