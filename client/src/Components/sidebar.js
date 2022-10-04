import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../asset/css/style.css";

export default (sidebar) => {
  return (
    <Menu>
      <a className="Home" href="/home">
        Home
      </a>

      <a className="About" href="/about">
        About
      </a>
      <a className="Barber" href="/barber">
        Barber Profile
      </a>

      <a className="Services" href="/services">
        Services
      </a>

      <a className="Appointment" href="/appointment">
        Appointment
      </a>

      <a className="SignUp" href="/signup">
        Sign Up
      </a>

      <a className="MyProfile" href="/myprofile">
        My Profile
      </a>
      {/* <AppRouter/> */}
    </Menu>
  );
};
