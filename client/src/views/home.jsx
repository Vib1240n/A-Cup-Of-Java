import React from "react";
import "../asset/css/style.css";
import Appointment from "./Appointment";
import Facebookicon from "../asset/images/facebookiconcolor1.png";
import instagramIcon from "./instagram.png";
import yelpIcon from "./yelp.png";

function Home() {
  return (
    <div class="home-background">
      <div class="home-title">Welcome To Ace's Barbershop</div>
      <div class="home-secondtitle">
        We provided all in one services including Haircute & Grooming
      </div>
      <br />
      {/* <button class= "home-button" onClick= "./Appointment"> Book Now </button> */}
      <button class="home-button" onClick={Appointment}>
        <a role href="/Appointment" class="home-booknow">
          {" "}
          Book Now{" "}
        </a>
      </button>

      <div class="home-middleblock">
        <div class="home-line-1"></div>
        <h1 id="home-font"> Find Us On </h1>
        <div class="home-twoicon">
          <a href="https://www.instagram.com/listoblendz">
            <img src={instagramIcon} alt="Instagram Icon" id="barber-ig" />
          </a>

          <a href="https://yelp.to/OGPIqL3Bcub">
            <img src={yelpIcon} alt="Yelp Icon" id="barber-fb" />
          </a>
        </div>
        <div class="home-line-2" />
        <div class="home-line22">
          <p id="home-contact"> Contact Us: 123 456789</p>
          <p id="home-address">
            {" "}
            1049 Jefferson Blvd, West Sacramento, CA 95691{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
