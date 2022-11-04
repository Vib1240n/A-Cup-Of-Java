import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar_mui from "./Components/navbar_mui";
import Footer from "./Components/footer";
import Home from "./views/home";
import Appointment from "./views/appointment";
import SignUp from "./views/signUpPage";
import MyProfile from "./views/MyProfile";
import LoginPage from "./views/loginPage";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar_mui />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/signUpPage" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
