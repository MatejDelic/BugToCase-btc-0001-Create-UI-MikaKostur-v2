import React from "react";
import "./css/bootstrap.min.css";
import "./css/style.css";

import NavbarLogo from "./navbarlogo.jsx";
import NavbarContent from "./navbarcontent.jsx";

function NavbarMain({sendScreenshot}) {
  return (
    <nav class="navbar navbar-expand">
      <NavbarLogo></NavbarLogo>
      <NavbarContent sendScreenshot={sendScreenshot}></NavbarContent>
    </nav>
  );
}

export default NavbarMain;