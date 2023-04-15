import { useState, useRef, useEffect } from "react";

type VideoRecorderOptions = {
  mimeType?: string;
  videoBitsPerSecond?: number;
};

const useVideoRecorder = (options: VideoRecorderOptions = {}) => {
  const { mimeType = "video/webm", videoBitsPerSecond = 2500000 } = options;
  const [recording, setRecording] = useState(false);
  const [blob, setBlob] = useState<Blob | null>(null);
  const mediaStream = useRef<MediaStream | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);

  const startRecording = async () => {
    setRecording(true);
    mediaStream.current = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
      const recorder = new MediaRecorder(mediaStream.current, {
        mimeType,
        videoBitsPerSecond,
      });
      mediaRecorder.current = recorder;
      const chunks: Blob[] = [];
      recorder.ondataavailable = (e: any) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: mimeType });
        setBlob(blob);
      };
      recorder.start();
  };

  const stopRecording =async () => {
    setRecording(false);
    await mediaRecorder.current?.stop();
    await mediaStream.current?.getTracks().forEach((track) => track.stop());
  };

  useEffect(() => {
    return () => {
      mediaRecorder.current?.stop();
      mediaStream.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const downloadRecording = (filename: string) => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return {
    recording,
    startRecording,
    stopRecording,
    downloadRecording,
  };
};

export default useVideoRecorder;
