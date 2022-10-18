import React from "react";
import instagramIcon from "../asset/images/instagramIcon.png"
import facebookIcon from "../asset/images/facebookIcon.jpg"
import "../asset/css/barbers.css";
import barber102 from "../asset/images/bbremoval102.png"
import barber101 from "../asset/images/bbremoval101.png"
import barber103 from "../asset/images/bbremoval103.png"

function Barber() {
    return(
        <div class = "barber-wrapper"> 
            <div id = "barber-title">
                <h1> Our Barbers</h1>
                <p> Learn more about our barbers.</p>
            </div>
            <iframe id = "barber-gif" src="https://giphy.com/embed/1dH0xIDSToAtZYwf8D" width="40" height="48" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/kelleybakerbeauty-scissors-kbb-kelleybakerbrows-1dH0xIDSToAtZYwf8D"></a></p>
            
            <div class = "barbertop">
                <img src = {barber102} alt = "barberimage102" id = "barberimage" />
                <div id = "barber-title">
                    <h2> Barber 1</h2>
                    <p> Expert in haircut and grooming</p>
                </div>
            </div >
            <div class = "barbertop">
                <img src = {barber101} alt = "barberimage101" id = "barberimage" />
                <div id = "barber-title">
                    <h2> Barber 2</h2>
                    <p> Expert in haircut and grooming</p>
                </div>
            </div>
            <div class = "barbertop">
                <img src = {barber103} alt = "barberimage103" id = "barberimage"/>
                <div id = "barber-title">
                    <h2> Barber 3</h2>
                    <p> Expert in haircut and grooming</p>
                </div>
            </div>
            <div class="barber-footerline" ></div>
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
            <br/>
            <br/>

        </div>
    );
}
export default Barber;