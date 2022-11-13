import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/" component={<Home />} />
          <Route path="/home" component={<Home />} />
          <Route path="/about" component={<About />} />
          <Route path="/barber" component={<Barber />} />
          <Route path="/services" component={<Services />} />
          <Route path="/appointment" component={<Appointment />} />
          <Route path="/MyProfile" component={<MyProfile />} />
          <Route path="/login" component={<Login />} />
          <Route path="/loginPage" component={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
