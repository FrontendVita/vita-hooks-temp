import React from "react";
import useVideoRecorder from "./useScreenRecording";

const VideoRecorder = () => {
  const { recording, startRecording, stopRecording, downloadRecording } =
    useVideoRecorder();

  return (
    <>
      <h1>Video Recorder</h1>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? "Stop Recording" : "Start Recording"}
      </button>
      {/* {blob && ( */}
        <button onClick={() => downloadRecording("my-video.mp4")}>
          Download Video
        </button>
      {/* )} */}
    </>
  );
};

export default VideoRecorder;
