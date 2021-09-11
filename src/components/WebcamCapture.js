import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  height: 720,
  facingMode: "environment",
};

export const WebcamCapture = ({ onCapture, action }) => {
  const webcamRef = React.useRef(null);

  React.useEffect(() => {
    if (action === "processing") {
      const imageSrc = webcamRef.current.getScreenshot();
      onCapture(imageSrc);
    }
  }, [action, onCapture, webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={"100%"}
        videoConstraints={videoConstraints}
      />
    </>
  );
};
