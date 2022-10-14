import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../views/about";
import Home from "../views/Home";
import MyProfile from "../views/MyProfile";
import Barber from "../views/Barber";
import Services from "../views/Services"
import Login from "../views/login";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp"
import Appointment from "../views/Appointment";
import AboutUs from "../views/AboutUs";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/barber" element={<Barber />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
