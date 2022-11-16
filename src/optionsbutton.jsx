import "./css/bootstrap.min.css";
import "./css/style.css";

import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

function OptionsButton() {
  return (
    <li class="nav-item">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          <img src="img/settings.png" class="nav-link" id="settingsicon" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
}

export default OptionsButton;
