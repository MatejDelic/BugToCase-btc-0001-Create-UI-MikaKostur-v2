import "./css/bootstrap.min.css";
import "./css/style.css";

import React from "react";

function PremiumButton() {
  const handlePremium = () => {
    //code here
  };

  return (
    <li class="nav-item">
      <button class="btn" id="premiumbutton" onClick={handlePremium}>
        <img src="img/premium.png" class="nav-link" id="premiumicon" />
      </button>
    </li>
  );
}

export default PremiumButton;

