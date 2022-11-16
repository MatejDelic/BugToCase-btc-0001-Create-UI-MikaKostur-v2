import React from "react";
import "./css/bootstrap.min.css";
import "./css/style.css";

function NavbarLogo() {
  return (
    <div class="container-fluid navbar-brand" id="logoDiv">
      <a class="navbar-brand">
        <img
          src="img/bee.png"
          id="logoimage"
          class="d-inline-block align-text-top"
        />
      </a>
    </div>
  );
}

export default NavbarLogo;
