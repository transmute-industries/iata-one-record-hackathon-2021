import React from "react";
import Webcam from "react-webcam";
// import { Button } from "@material-ui/core";
const videoConstraints = {
  height: 720,
  facingMode: "user",
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
      {/* <Button onClick={capture}>Capture photo</Button> */}
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
