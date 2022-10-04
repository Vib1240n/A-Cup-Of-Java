import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "../views/home";
import About from "../views/about";
import Appointment from "../views/appointment";
import Services from "../views/services";
import login from "../views/login";
import SignUp from "../views/signup";
import Barber from "../views/barber";
import MyProfile from "../views/myprofile";

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
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/login" element={<login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
