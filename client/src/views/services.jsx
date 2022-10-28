import React from "react";
import "../asset/css/services.css";

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
                Classic Hair Cut - <span class="servicesCost">$35</span>
              </h2>
              <p id="haircutContent"> Our original classic haircut!</p>
            </div>

            <div class="hairTrimming">
              <h2 id="hairtrimTitle">
                Hair Trimming - <span class="servicesCost">$15</span>
              </h2>
              <p id="hairtrimContent"> Our hairtrimming service!</p>
            </div>
          </div>

          <div class="servicesFirstRow">
            <div class="hairWaxing">
              <h2 id="hairwaxingTitle">
                Waxing - <span class="servicesCost">$45</span>
              </h2>
              <p id="hairwaxingContent"> Our waxing service!</p>
            </div>

            <div class="hairGrooming">
              <h2 id="hairGroomingTitle">
                Hair Grooming - <span class="servicesCost">$55</span>
              </h2>
              <p id="hairgroomingContent"> Our grooming service!</p>
            </div>
          </div>

          <div class="servicesFirstRow">
            <div class="hairWaxing">
              <h2 id="hairwaxingTitle">
                Shaving - <span class="servicesCost">$20</span>
              </h2>
              <p id="hairwaxingContent"> Our Shaving service!</p>
            </div>

            <div class="hairGrooming">
              <h2 id="hairGroomingTitle">
                Beard and line up - <span class="servicesCost">$40</span>
              </h2>
              <p id="hairgroomingContent"> Our Beard service!</p>
            </div>
          </div>

          <div class="servicesFirstRow">
            <div class="hairWaxing">
              <h2 id="hairwaxingTitle">
                Fades - <span class="servicesCost">$35</span>
              </h2>
              <p id="hairwaxingContent"> Our Fading service!</p>
            </div>

            <div class="hairGrooming">
              <h2 id="hairGroomingTitle">
                Black Mask - <span class="servicesCost">$15</span>
              </h2>
              <p id="hairgroomingContent"> Our Masking service!</p>
            </div>
          </div>

          <br />
          <br />
        </div>
        <div class="bookAppointment">
          <h2 id="bookAppointmentTitle"> Need to schedule an appointment?</h2>
          <p id="bookAppointmentLink">
            <a href="/Appointment">Book Now!</a>
          </p>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Services;
