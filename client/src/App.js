import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar_mui from "./Components/navbar_mui";
import Sidebar from "./Components/sidebar_mui";
import Footer from "./Components/footer";
import Home from "./views/home";
import About from "./views/about";
import Appointment from "./views/appointment";
import Services from "./views/services";
import Login from "./views/login";
import Barber from "./views/barber";
import MyProfile from "./views/MyProfile";
import LoginPage from "./views/loginPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar_mui />
      <Router>
        <Sidebar />
        {/* <Footer /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/barber" element={<Barber />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginPage" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
