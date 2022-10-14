import React, { useEffect, useState } from "react";
import axios from "axios";
import "../asset/css/myProfile.css";
import "../asset/css/barbers.css";
import ace from "../asset/images/AcesBarbershopLogo.jpg"
import instagramIcon from "../asset/images/instagramIcon.png"
import facebookIcon from "../asset/images/facebookIcon.jpg"
import navbar from "../Components/Navbar";
import object from "./object";

const MyProfile = () => {

  const [userData, setUserData] = useState([]);
  let obj = new object();

useEffect(() => {
  fetchUserData();
}, []);

const fetchUserData = () => {
  axios
    .get("http://localhost:5500/api/profile")
    .then((res) => {
      console.log(res);
      setUserData(res.data);
      obj.setData(res.data);
      
    })
    .catch((err) => {
      console.log(err);
    });
};

const logout = () => {
  axios.post("http://localhost:5500/api/logout").then((res) => {
    console.log(res.data);
    if (res.data.redirect === "/home") {
      window.location = "/home";
    }
  })
  .catch((err) => console.log(err));
};

  return (
    <div class="MyProfile">
    
      <h1 class = "MyProfile-title"> Your Profile Information</h1>
      <div class = "barbertop">
                <img src = {ace} alt = "ace lgo" id = "barberimage" />
                <br/>
                <br/>
                <div id = "barber-title">
                    <div class="firstName">Name: {userData.firstname} {userData.lastname}</div>
                    <div class="firstName">Email: {userData.username}</div>
                </div>
                <br/>
                <button class = "MyProfile-button" onClick={logout} >Sign Out</button>
      </div >

      <div class = "barber-footer">
                    <div id = "barber-social">
                            <a href="https://www.instagram.com">
                        <img src= {instagramIcon} alt="Instagram Icon" id ="barber-ig"/>
                        </a>
                        <a href="https://www.facebook.com">
                        <img src= {facebookIcon} alt="Instagram Icon" id ="barber-fb"/>
                        </a>
                        </div>
                        <div>
                            <p id = "barber-footerinfo"> Contact Us: 123 456789</p>
                            <p id = "barber-footerinfo">  1049 Jefferson Blvd, West Sacramento, CA 95691 </p>
                    </div>
                </div>
    </div>
   );
  };
          
export default MyProfile;