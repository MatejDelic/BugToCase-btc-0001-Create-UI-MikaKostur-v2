import React from "react";
import "./css/bootstrap.min.css";
import "./css/style.css";

import ScreenshotButton from "./screenshotbutton.jsx";
import RecordButton from "./recordbutton.jsx";
import OptionsButton from "./optionsbutton.jsx";
import PremiumButton from "./premiumbutton.jsx";

function NavbarContent({sendScreenshot}) {
  let isRecording = false;
  const handleRecording = (e) => {
    if (isRecording === false) {
      isRecording = true;
      e.target.src = "../img/rec-buttonred.png";
    } else {
      isRecording = false;
      e.target.src = "../img/rec-button.png";
    }
  };
  const onCaptured = (imageUri) => {
    console.log(imageUri);
    sendScreenshot(imageUri);
  };
  const onError = (error) => {
    console.log(`Error: ${error}`);
  };
  const handleScreenshot = () => {
    let capturing = chrome.tabs.captureVisibleTab();
    capturing.then(onCaptured, onError);
  };
  
  return (
    <div class="container-fluid" id="navbarNav">
      <ul class="navbar-nav">
        <ScreenshotButton handleScreenshot={handleScreenshot}></ScreenshotButton>
        <RecordButton handleRecording={handleRecording}></RecordButton>
        <OptionsButton></OptionsButton>
        <PremiumButton></PremiumButton>
      </ul>
    </div>
  );
}

export default NavbarContent;
