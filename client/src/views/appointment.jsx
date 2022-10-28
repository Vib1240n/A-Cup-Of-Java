import React from "react";
import "../asset/css/appointment.css";
import instagramIcon from "../asset/images/instagramIcon.png";
import yelpIcon from "../asset/images/yelpicon.png";

export default function Appointment() {
  return (
    <div className="Appointment">
      <h1 className="heading">Make an Appointment</h1>

      <form className="form" action="#">
        <div className="container">
          <input type="text" readOnly value={"Name: "} />
          <br />
          <input type="text" readOnly value={"Email: "} />
        </div>

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Please Enter Your Phone Number"
        />

        <div className="date-time">
          <p>Select Your Date</p>
          <input type="date" name="date" id="date" />
        </div>

        <div className="date-time">
          <p>Select Your Time</p>
          <input type="time" name="time" id="time" />
        </div>

        <textarea
          name="message"
          id="message"
          placeholder="Message Here"
        ></textarea>

        <button type="submit">SUBMIT</button>
      </form>

      <footer>
        <div class="barber-footerline"></div>
        <div class="barber-footer">
          <div id="barber-social">
            <a href="https://www.instagram.com/listoblendz">
              <img src={instagramIcon} alt="Instagram Icon" id="barber-ig" />
            </a>

            <a href="https://yelp.to/OGPIqL3Bcub">
              <img src={yelpIcon} alt="Yelp Icon" id="barber-fb" />
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
        {/* <div className="info">
                    <p>Contact: 1234566678</p>
                    <p>Email: helloworld@gmail.com</p>
                </div>

                <div className="social-icons">
                    <p>Follow Us On</p>
                    <div className="icons">
                        <img className="fb-img" src={facebookIcon} alt="facebook icon" />
                        <img className="insta-img" src={instagramIcon} alt="facebook icon" />
                    </div>
                </div> */}
      </footer>
    </div>
  );
}
