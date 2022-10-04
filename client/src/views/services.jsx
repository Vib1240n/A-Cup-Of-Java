import React from "react";
import "../asset/css/services.css";

function Services() {

  return (
    <div>
        
        <div class="servicesBackground">
            <div class="servicesTitle">
            Our Services
            </div>
            <div class="servicesTitleContent">
                The services we provide at our shop!
            </div>
            <br/>
        </div>

        

        <div class = "servicesSection">
            <div class = "servicesLine"></div>
            <h1 id = "servicesLineTitle"> Services and Pricing </h1>

            <br/><br/>

            <div class = "servicesList">

                <div class = "servicesFirstRow">
                        <div class = "classicHaircut">
                            <h2 id = "haircutTitle"> Classic Hair Cut - <span class = "servicesCost">$35</span></h2>
                            <p id = "haircutContent"> Our original classic haircut!</p>
                        </div>

                        <div class = "hairTrimming">
                            <h2 id = "hairtrimTitle"> Hair Trimming - <span class = "servicesCost">$15</span></h2>
                            <p id = "hairtrimContent"> Our hairtrimming service!</p>
                        </div>
                </div>

                <div class = "servicesSecondRow">
                    <div class = "hairWaxing">
                        <h2 id = "hairwaxingTitle"> Waxing - <span class = "servicesCost">$45</span></h2>
                        <p id = "hairwaxingContent"> Our waxing service!</p>
                    </div>

                    <div class = "hairGrooming">
                        <h2 id = "hairGroomingTitle"> Hair Grooming - <span class = "servicesCost">$55</span></h2>
                        <p id = "hairgroomingContent"> Our grooming service!</p>
                    </div>
                </div>
                <br/><br/>

                <div class = "bookAppointment">
                    <h2 id = "bookAppointmentTitle"> Need to schedule an appointment?</h2>
                    <p id = "bookAppointmentLink"> <a href = "/Appointment">Book Now!</a></p>
                </div>
                
                
            </div>
            <br/><br/>
        </div>
       
    </div>
  )
}

export default Services;

