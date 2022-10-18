import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import "../asset/css/style.css";
import axios from "axios";

<<<<<<< HEAD
export default () => {
  return (
    <Menu>
      <a className="Home" href="/home">
        Home
      </a>
=======
export default (sidebar) => {
>>>>>>> main_temp

  const [userData, setUserData] = useState([]);
  const [removePartOfSideBar, setRemovePartOfSideBar] = useState();
  
  useEffect(() =>{
    axios
    .get("http://localhost:5500/api/profile")
    .then((res) => {
      // console.log(res);
      setUserData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() =>{
    if(userData.firstname != null){
      setRemovePartOfSideBar("true")
    }
    else{
      setRemovePartOfSideBar("false")
    }
  })

<<<<<<< HEAD
      <a className="Appointment" href="/appointment">
        Appointment
      </a>
      <a className="MyProfile" href="/myprofile">
        My Profile
      </a>
      <a className="LoginPage" href="/loginPage">
        Login Page
      </a>
      {/* <AppRouter/> */}
    </Menu>
  );
=======
  if(removePartOfSideBar == "true"){
    return(
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
      </Menu>
    )
  }
  else{
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
      </Menu>
    );
    }
>>>>>>> main_temp
};
