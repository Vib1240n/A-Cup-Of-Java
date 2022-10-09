import React from "react";
import AppRouter from "./AppRouter";
import "../asset/css/style.css";
import Sidebar from "./sidebar";
import threedot from "../asset/images/threedotblack.webp";

export default function navbar() {
  return (
    <div id="nav-App">
      {/* <img src = {threedot}/> */}
      <nav id="nav-firstNav">
        <a href="/login" id="nav-twonav">
          {" "}
          login{" "}
        </a>
        <a href="/appointment" id="nav-twonav">
          {" "}
          Appointment{" "}
        </a>
      </nav>
      <div clsss="navbar-gap"></div>
    </div>
  );
}
