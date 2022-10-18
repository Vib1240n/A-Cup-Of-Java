import React from "react";
import barber1 from "../asset/images/barber1.jpg";
import barber2 from "../asset/images/barber2.jpg";
import barber3 from "../asset/images/barber104.png";
import barber4 from "../asset/images/barber103.png";
import instaIcon from "../asset/images/Instagram-Icon.png";
import fbIcon from "../asset/images/facebookicon1.png";
import grooming3 from "../asset/images/grooming3.png";
import "../asset/css/style.css";
import instagramIcon from "./instagram.png";
import yelpIcon from "./yelp.png";

function About() {
  return (
    <div>
      {/* <div class= "about-background">
          <div class = "about-title"> Haircut && Grooming </div>
      </div> */}
      <div class="about-background1">
        <div class="about-title"> Haircut && Grooming </div>
      </div>
      <h1 id="about-subtitle"> ABOUT US </h1>
      <div class="about-middleelement">
        <div class="about-mid1">
          <div>
            <p id="about-textundercontent1">
              {" "}
              <strong id="about-content1"> Welcome to our barbershop</strong>
              <br />
              <br />
              Family owned and operated. Serving Yolo country and sourrounding
              areas for past 5 years.Over 25+ year of experience. Providing
              premimum haircuit, beard trims and fades.
            </p>
            <br />
            <br />
            <a href="./Appointment" id="about-booknow">
              {" "}
              Book Now{" "}
            </a>
          </div>
          <div class="about-content2">
            <img
              src={barber3}
              id="about-barberimage1"
              alt="barber image 1"
            ></img>
            <img
              src={barber4}
              id="about-barberimage1"
              alt="barber image 2"
            ></img>
          </div>
        </div>

        <div class="about-mid2">
          <div id="about-mid2card">
            <h2 id="about-botcontenttitle"> Contact & Address </h2>
            <p id="about-address">
              {" "}
              1049 Jefferson Blvd, West Sacramento, CA 95691 <br />
              Tel: 123 456 789
            </p>
            <p id="about-botcontenttitle"> Hours </p>
            <p id="about-address">
              {" "}
              Mon-Fri: 10am - 6pm <br /> Saturday: 9am - 4pm{" "}
            </p>
            <p id="about-botcontenttitle"> Find Us </p>
            <div>
              <a href="https://www.instagram.com/listoblendz">
                <img src={instagramIcon} alt="Instagram Icon" id="barber-ig" />
              </a>

              <a href="https://yelp.to/OGPIqL3Bcub">
                <img src={yelpIcon} alt="Yelp Icon" id="barber-fb" />
              </a>
            </div>
          </div>
          <div id="about-mid2image">
            <div class="maprouter">
              <div>
                <iframe
                  width="600"
                  height="350"
                  src="https://maps.google.com/maps?q=1049%20Jefferson%20Blvd,%20West%20Sacramento%20,CA%2095691&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default About;
