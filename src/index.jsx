import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import "./css/bootstrap.min.css";

import NavbarMain from "./navbarmain.jsx";
import OutputBody from "./outputbody.jsx";
function Popup() {
  const [images, setImages] = useState([]);

  chrome.storage.local.get(['screenshots'], function(result) {
    if(result.screenshots){
      setImages(result.screenshots);
    }
  });

  const sendScreenshot = (imageUri) => {
    let tempArray = [...images, imageUri];
    chrome.storage.local.set({screenshots: tempArray}, function() {
      console.log("Image is added!");
    });
  };

/*   const clearAll = () => {
    console.log("Hello from clear");
    chrome.storage.local.set({screenshots: null}, function() {
      console.log("All images deleted!");
    });
    chrome.storage.local.get(['screenshots'], function(result) {
        setImages(result.screenshots);
    });
  }; */

  const clearAll = () => {
    chrome.storage.local.set({screenshots: []}, function() {
      console.log("All images deleted!");
    });
  };

  chrome.storage.onChanged.addListener((changes, areaName) => {
    setImages(changes.newValue);
  });

  return (
    <div>
      <NavbarMain sendScreenshot={sendScreenshot}></NavbarMain>

      <OutputBody images={images} clearAll={clearAll} ></OutputBody>
    </div>
  );
}
ReactDOM.render(<Popup />, document.getElementById("react-target"));
