import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import "./css/bootstrap.min.css";

import NavbarMain from "./navbarmain.jsx";
import OutputBody from "./outputbody.jsx";
function Popup() {
  const [image, setImage] = useState(null);
  const sendScreenshot = (imageUri) => {
    setImage(imageUri);
  };  

  return (
    <div>
      <NavbarMain sendScreenshot={sendScreenshot}></NavbarMain>

      <OutputBody image={image}></OutputBody>
    </div>
  );
}
ReactDOM.render(<Popup />, document.getElementById("react-target"));
