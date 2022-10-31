import React, {useEffect, useState} from "react"
import AppRouter from "./AppRouter"
import "../asset/css/style.css"
import Sidebar from "./sidebar"
import axios from "axios";
import object from "../views/object";
import { Link } from "react-router-dom";
import Appointment from "../views/appointment";



// export default function navbar(){
  const navbar = () =>{

  const [userData, setUserData] = useState([]);
  const [toggle, setToggle] = useState();
  const [toggleNavbar, setToggler] = useState();
  var test = "hi";
  // let obj = new object();
  
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
      setToggle("My Profile")
      setToggler("/MyProfile")
      document.getElementById("nav-firstNav").childNodes[1].href = "/appointment";
    }
    else{
      setToggle("Login")
      setToggler("/login")
      document.getElementById("nav-firstNav").childNodes[1].href = "/login";
    }
  })

  return(
      <div id ="nav-App">
          <Sidebar/>
          <nav id="nav-firstNav">
            <a href={toggleNavbar}id="nav-twonav" className ="toggle"> {toggle} </a>
            <a href="/appointment" id="nav-twonav" className = "navbar-appintment"> Appointment </a>
          </nav> 
          <div clsss = "navbar-gap">
            <AppRouter/>
          </div>
      </div>
  )
};
export default navbar;