import "./css/bootstrap.min.css";
import "./css/style.css";

import React from "react";

function RecordButton({handleRecording}) {  
  return (
    <li class="nav-item">
      <button class="btn" id="recordingbutton" onClick={e => handleRecording(e)}>
        <img
          src="img/rec-button.png"
          class="nav-link"
          id="videorecordingicon"
        />
      </button>
    </li>
  );
}

export default RecordButton;
