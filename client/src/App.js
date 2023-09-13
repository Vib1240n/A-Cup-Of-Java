import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar_mui from "./Components/navbar_mui";
import MyProfile from "./views/MyProfile";
import Appointment from "./views/appointment";
import Home from "./views/home";
import Landingpage from "./views/landingpage";
import LoginPage from "./views/loginPage";
import SignUp from "./views/signUpPage";

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar_mui />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Landingpage />} />
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
