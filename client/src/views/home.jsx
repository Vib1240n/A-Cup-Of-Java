import React from "react";
import "../asset/css/style.css";
import Appointment from "./Appointment"
import InstagramIcon from "../asset/images/Instagram-Icon.png"
import Facebookicon from "../asset/images/facebookiconcolor1.png"


function Home() {

  return (
    <div class="home-background">
        <div class="home-title">
          Welcome To Ace's Barbershop
        </div>
        <div class="home-secondtitle">
              We provided all in one services including Haircute & Grooming
        </div>
        <br/>
        {/* <button class= "home-button" onClick= "./Appointment"> Book Now </button> */}
        <button class= "home-button" onClick = {Appointment}>
              <a href="/Appointment" class= "home-booknow"> Book Now </a> 
        </button>

        <div class = "home-middleblock">
              <div class="home-line-1"></div>
              <h1 id = "home-font"> Find Us On </h1>
              <div class = "home-twoicon">
                <a href="https://www.instagram.com">
                  <img src= {InstagramIcon} alt="Instagram Icon" id ="home-igicon"/>
                </a>
                <a href="https://www.facebook.com">
                  <img src= {Facebookicon} alt="Instagram Icon" id ="home-fbicon"/>
                </a>
              </div>
              <div class="home-line-2"/>
                  <div class = "home-line22">
                    <p id = "home-contact"> Contact Us: 123 456789</p>
                    <p id = "home-address">  1049 Jefferson Blvd, West Sacramento, CA 95691 </p>
                  </div>
                 
        </div>
       
    </div>
  )
}

export default Home;