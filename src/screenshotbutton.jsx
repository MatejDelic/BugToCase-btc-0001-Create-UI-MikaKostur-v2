import "./css/bootstrap.min.css";
import "./css/style.css";

import React from "react";

function ScreenshotButton({handleScreenshot}) {
  
  return (
    <li class="nav-item">
      <button class="btn" id="screenshotbutton" onClick={handleScreenshot}>
        <img src="img/screenshot.png" class="nav-link" id="screenshoticon" />
      </button>
    </li>
  );
}

export default ScreenshotButton;
