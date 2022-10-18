import React from "react";
import barber1 from "../asset/images/barber101.png";
import barber2 from "../asset/images/barber102.png";
import barber3 from "../asset/images/barber103.png";
import instagramIcon from "../asset/images/instagramIcon.png"
import yelpicon from "../asset/images/yelpicon.png"
import "../asset/css/barbers.css";
import barber102 from "../asset/images/barber101.png"
import barber101 from "../asset/images/barber102.png"
import barber103 from "../asset/images/barber103.png"

function Barber() {
    return (
      <div class="barber-wrapper">
        <div id="barber-title">
          <h1> Our Barbers</h1>
          <p> Learn more about our family of barbers and their expertise </p>
        </div>
        <iframe
          title="SDS"
          id="barber-gif"
          src="https://giphy.com/embed/1dH0xIDSToAtZYwf8D"
          width="40"
          height="48"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/stickers/kelleybakerbeauty-scissors-kbb-kelleybakerbrows-1dH0xIDSToAtZYwf8D"></a>
        </p>
  
        <div class="barbertop">
          <img src={barber102} alt="barberimage102" id="barberimage" />
          <div id="barber-title">
            <h2> Marco aka Li$to </h2>
            <a href="https://www.instagram.com/listoblendz">
              <img
                src={instagramIcon}
                alt="Instagram Icon"
                id="barber-ig"
                style={{ height: "40px", width: "40px" }}
              />
            </a>
            <h6 className="barber-information"> Expert in modern contemporary haircuts and beard fades. </h6>
            <h6 className="barber-information">Please visit my Social media for the latest updates and designs. </h6>
            <h6 className="barber-information">Email: marco.h99@hotmail.com</h6>
            <h6 className="barber-information"> Cell: 916-752-8381 </h6>
            <h6 className="barber-information"> Tues-Sat (Appointments only) 10am - 6pm</h6>
            <h6 className="barber-information">
              For custom prices please call or make an appointment today.
            </h6>
                        
          </div>
        </div>
        <div class="barbertop">
          <img src={barber101} alt="barberimage101" id="barberimage" />
          <div id="barber-title">
            <h2> Elena aka Shorty</h2>
            <a href="https://www.instagram.com/@misshortyblendz">
              <img
                src={instagramIcon}
                alt="Instagram Icon"
                id="barber-ig"
                style={{ height: "40px", width: "40px" }}
              />
            </a>
            <h6 className="barber-information"> Over 20 years of experiance. Expert in Kids and adult haircuts and fades. </h6>
            <h6 className="barber-information">Please visit my Social media for the latest updates and pictures </h6>
            <h6 className="barber-information">Email: latinqween57@gmail.com</h6>
            <h6 className="barber-information">Cell: 916-956-0670 </h6>
            <h6 className="barber-information"> Tues-Sat (Appointments only) 10am - 6pm</h6>
            <h6 className="barber-information">
            For custom prices please call or make an appointment today.
            </h6>
            
          </div>
        </div>
        <div class="barbertop">
          <img src={barber103} alt="barberimage103" id="barberimage" />
          <div id="barber-title">
            <h2>Jimmy</h2>
            <a href="https://www.instagram.com/@jgonzo-916">
              <img
                src={instagramIcon}
                alt="Instagram Icon"
                id="barber-ig"
                style={{ height: "40px", width: "40px" }}
              />
            </a>
            <h6 className="barber-information"> Expert in fades, hair designs and beard trimming. </h6>
            <h6 className="barber-information">Email: jqonsales@gmail.com</h6>
            <h6 className="barber-information">Cell: 916-271-4339 </h6>
            <h6 className="barber-information">Time: Tuesday-Saturday (Appointments only 10am - 6pm) </h6>
            <h6 className="barber-information">
            For custom prices please call or make an appointment today.
            </h6>
        
          </div>
        </div>
        <div class="barber-footerline"></div>
        <div class="barber-footer">
          <div id="barber-social">
            <a href="https://www.instagram.com/listoblendz">
              <img src={instagramIcon} alt="Instagram Icon" id="barber-ig" />
            </a>
            <a href="https://yelp.to/OGPIqL3Bcub">
              <img src={yelpicon} alt="Yelp Icon" id="barber-fb" />
            </a>
          </div>
          <div>
            <p id="barber-footerinfo"> Contact Us: 916-956-0670</p>
            <p id="barber-footerinfo">
              1049 Jefferson Blvd, West Sacramento, CA 95691
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
  export default Barber;
  