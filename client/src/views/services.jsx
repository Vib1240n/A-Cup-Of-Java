import React from "react";
import "../asset/css/services.css";
import instagramIcon from "../asset/images/instagramIcon.png";
import facebookIcon from "../asset/images/facebookIcon.jpg";

function Services() {
  return (
    <div>
      <div class="servicesBackground">
        <div class="servicesTitle">OUR SERVICES</div>
        <div class="servicesTitleContent">
          The services we provide at our shop!
        </div>
        <br />
      </div>

      <div class="servicesSection">
        <h1 id="servicesLineTitle"> Services and Pricing </h1>
        <div class="servicesLine"></div>

        <br />
        <br />

        <div class="servicesList">
          <div class="servicesFirstRow">
            <div class="classicHaircut">
              <h2 id="haircutTitle">
                {" "}
                Classic Hair Cut - <span class="servicesCost">$35</span>
              </h2>
              <p id="haircutContent"> Our original classic haircut!</p>
            </div>

            <div class="hairTrimming">
              <h2 id="hairtrimTitle">
                {" "}
                Hair Trimming - <span class="servicesCost">$15</span>
              </h2>
              <p id="hairtrimContent"> Our hairtrimming service!</p>
            </div>
          </div>

          <div class="servicesFirstRow">
            <div class="hairWaxing">
              <h2 id="hairwaxingTitle">
                {" "}
                Waxing - <span class="servicesCost">$45</span>
              </h2>
              <p id="hairwaxingContent"> Our waxing service!</p>
            </div>

            <div class="hairGrooming">
              <h2 id="hairGroomingTitle">
                {" "}
                Hair Grooming - <span class="servicesCost">$55</span>
              </h2>
              <p id="hairgroomingContent"> Our grooming service!</p>
            </div>
          </div>
          <br />
          <br />
        </div>
        <div class="bookAppointment">
          <h2 id="bookAppointmentTitle"> Need to schedule an appointment?</h2>
          <p id="bookAppointmentLink">
            {" "}
            <a href="/Appointment">Book Now!</a>
          </p>
        </div>
        <br />
        <br />
      </div>

      <div class="barber-footer">
        <div id="barber-social">
          <a href="https://www.instagram.com">
            <img src={instagramIcon} alt="Instagram Icon" id="barber-ig" />
          </a>
          <a href="https://www.facebook.com">
            <img src={facebookIcon} alt="Instagram Icon" id="barber-fb" />
          </a>
        </div>
        <div>
          <p id="barber-footerinfo"> Contact Us: 123 456789</p>
          <p id="barber-footerinfo">
            {" "}
            1049 Jefferson Blvd, West Sacramento, CA 95691{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
