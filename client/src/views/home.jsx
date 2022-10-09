import React from "react";
import "../asset/css/style.css";
import { useNavigate } from "react-router-dom";
import Appointment from "./appointment";
import InstagramIcon from "../asset/images/Instagram-Icon.png";
import Facebookicon from "../asset/images/facebookiconcolor1.png";

function Home() {
  let navigate = useNavigate();
  const handleChange = () => {
    navigate("/appointment");
  };
  return (
    <>
      <div className="home-background">
        <div className="home-title">Welcome To Ace's Barbershop</div>
        <div className="home-secondtitle">
          We provided all in one services including Haircute & Grooming
        </div>
        <br />
        <button className="home-button" onClick={handleChange}>
          <a>Book Now</a>
        </button>

        <div className="home-middleblock">
          <div className="home-line-1"></div>
          <h1 id="home-font"> Find Us On </h1>
          <div className="home-twoicon">
            <a href="https://www.instagram.com">
              <img src={InstagramIcon} alt="Instagram Icon" id="home-igicon" />
            </a>
            <a href="https://www.facebook.com">
              <img src={Facebookicon} alt="Instagram Icon" id="home-fbicon" />
            </a>
          </div>
          <div className="home-line-2" />
          <div className="home-line22" id="home-font">
            <p id="home-contact"> Contact Us: 123 456789</p>
            <p id="home-address">
              1049 Jefferson Blvd, West Sacramento, CA 95691
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
