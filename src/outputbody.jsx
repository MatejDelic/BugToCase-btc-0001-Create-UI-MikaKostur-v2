import React from "react";
import "./css/bootstrap.min.css";
import "./css/style.css";
import Popup from 'reactjs-popup';

export const getCurrentTabUId = (callback) => {
  const queryInfo = { active: true, currentWindow: true };

  chrome.tabs &&
    chrome.tabs.query(queryInfo, (tabs) => {
      callback(tabs[0].id);
    });
};

function OutputBody({image}) {
  const sendMessage = () => {
    getCurrentTabUId((id) => {
      id &&
        chrome.tabs.sendMessage(id, {
          value: "openPopup",
        });
      window.close();
    });
  };

  return <div id="outputBody">
    {image && <img width="100" src={image} alt={"Screenshot"} onClick={sendMessage} className="screenshot"/>}
  </div>;
}

export default OutputBody;
