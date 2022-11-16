import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Popup from 'reactjs-popup';

function ContentScript() {
    //const { modal, overlay } = useStyles();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(false);
  
    chrome.runtime.onMessage.addListener((message) => {
        console.log(message);
        setMessage(message.value);
        if (message.value === "openPopup") {
          setOpen(true);
        }
      });

    const closeModal = () => setOpen(false);
  
    if (!open) return null;
  
    return (
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div>Hello from popup!</div>
        </Popup>
    );
  }
  
  export default ContentScript;

  /*<Popup
          trigger={image && <img width="100" src={image} alt={"Screenshot"} className="screenshot"/>}
          modal
        >
          {(close) => (
            <div>
              <button onClick={close}>
                &times;
              </button>
              <div><img width="450" src={image} alt={"Screenshot"} className="screenshot"/></div>
            </div>
          )}
        </Popup> */