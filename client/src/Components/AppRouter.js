import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home";
import About from "../views/about";
import Appointment from "../views/appointment";
import Services from "../views/services";
import Login from "../views/login";
import Barber from "../views/barber";
import MyProfile from "../views/MyProfile";
import LoginPage from "../views/loginPage";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/barber" element={<Barber />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginPage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
