import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar_mui from "./Components/navbar_mui";
import Footer from "./Components/footer";
import Home from "./views/home";
import About from "./views/about";
import AboutUs from "./views/AboutUs";
import Appointment from "./views/appointment";
import Services from "./views/services";
import SignUp from "./views/signUpPage";
import Barber from "./views/barber";
import MyProfile from "./views/MyProfile";
import LoginPage from "./views/loginPage";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Navbar_mui />
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/barber" element={<Barber />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/signUpPage" element={<SignUp />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
