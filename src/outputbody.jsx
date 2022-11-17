import React, { useState } from "react";
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

function OutputBody({images, clearAll}) {
  const [screenshot, setScreenshot] = useState(null);
  const [index, setIndex] = useState(5);
  const sendMessage = (image) => {
    //setIndex(i);
    //console.log(index);
    getCurrentTabUId((id) => {
      id &&
        chrome.tabs.sendMessage(id, {
          value: "openPopup",
          image: image,
        });
      window.close();
    });
  };

/*   const handleClick = (i) => {
    setIndex(i);
    sendMessage();
  }
 */
  if(!images) return null;

  return <div id="outputBody" /* className="row" */>
    <div>
      <button type="button" /* className="btn btn-danger" */ /* className="top_right" */ onClick={clearAll}>Clear All</button>
    </div>
    <div className="column">
      {images.map((image, i) => {
        return <div>
          <span>{i+1}</span>
          <img width="100" src={image} alt={"Screenshot"} onClick={() => sendMessage(image)} className="screenshot mar-l"/>
        </div>
      })}
    </div>
  </div>;
}

export default OutputBody;

//{image && <img width="100" src={image} alt={"Screenshot"} onClick={sendMessage} className="screenshot"/>}