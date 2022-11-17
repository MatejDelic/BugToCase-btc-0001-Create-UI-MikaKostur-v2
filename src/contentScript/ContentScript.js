import React from "react";
import ReactDOM from "react-dom";
import "./ContentScript.css";
import { useState } from "react";
import Popup from 'reactjs-popup';

function ContentScript() {
    //const { modal, overlay } = useStyles();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(false);
    const [image, setImage] = useState();
  
    chrome.runtime.onMessage.addListener((message) => {
        setMessage(message.value);
        //console.log(message.index)
        /* chrome.storage.local.get(['screenshots'], function(result) {
            if(result.screenshots){
              setImage(result.screenshots[message.index]);
            }
          }); */
          setImage(message.image);
        if (message.value === "openPopup") {
          setOpen(true);
        }
      });

    const closeModal = () => setOpen(false);
  
    if (!open) return null;
  
    return (
        <Popup open={open} closeOnDocumentClick onClose={closeModal} modal className="screenshot">
            {(close) => (
            <div>
              <button onClick={close}>
                &times;
              </button>
              <div><div><img width="1200" src={image} alt={"Screenshot"} className="screenshot"/></div></div>
            </div>
            )}
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