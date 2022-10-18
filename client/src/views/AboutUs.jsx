import React from "react";
import "../asset/css/style.css"
import acelogo from "../asset/images/AcesBarbershopLogo.jpg"
import barber3 from "../asset/images/barber104.png";
import barber4 from "../asset/images/barber103.png";
import instaIcon from "../asset/images/Instagram-Icon.png"
import fbIcon from "../asset/images/facebookicon1.png"

function AboutUs() {
    return ( 
        <div>
            <div class = "Aboutus-card" id = "Aboutus-card1" >
                <div>
                    <h1 id = "Aboutus-card1title1"> About Us</h1>
                    <h2 id = "Aboutus-card1title2"> Haircut && Grooming</h2>
                </div>
            </div>

            <div class = "Aboutus-card">
                <div class = "Aboutus-card2">
                    <div id = "Aboutus-card2left">
                        <p id = "Aboutus-card2text"> <strong id = "about-content1"> Welcome to our barbershop</strong><br/><br/>
                        Family owned and operated. Serving Yolo country and sourrounding areas for past 5 years.Over 25+ year of experience. Providing
                        premimum haircuit, beard trims and fades.
                        </p>
                        <br/><br/>
                        <a href='./Appointment' id = "about-booknow"> Book Now </a>
                    </div>
                    <div id = "Aboutus-card2right">
                        <img src = {barber3} id = "Aboutus-card2rightimage"></img>
                    </div>
                </div>
            </div>

            <div class = "Aboutus-card">
                <div class ="Aboutus-card3">
                    <div>
                        <img src = {barber4} id = "Aboutus-card3rightimage"></img>
                    </div>
                    <div>
                        <h1 id = "Aboutus-card3text"> Children Friendly </h1>
                        <h1 id = "Aboutus-card3textbot"> We offer the best services possible for children</h1>
                    </div>
                </div>
            </div>
            <div class = "Aboutus-card">
                    {/* <div class = "about-mid2">  */}
                    <div id = "Aboutus-mid2card">
                        <h2 id = "about-botcontenttitle"> Contact & Address </h2>
                        <p id = "about-address"> 1049 Jefferson Blvd, West Sacramento, CA 95691 <br/>
                            Tel: 123 456 789
                        </p>
                        <p id = "about-botcontenttitle"> Hours </p>
                        <p id = "about-address">  Mon-Fri: 10am - 6pm <br/> Saturday: 9am - 4pm </p>
                        <p id = "about-botcontenttitle"> Find Us </p>
                        <div >
                        <a href="https://www.instagram.com">
                            <img src= {instaIcon} alt="Instagram Icon" id ="about-igicon" />
                        </a>
                        <a href="https://www.facebook.com">
                            <img src= {fbIcon} alt="facebook Icon" id = "about-fbicon"/>
                        </a>
                        </div>
                    {/* </div> */}
                </div>          
            </div>

            <div>
                <h1 class = "Aboutus-findusonmap"> Here we are on the map</h1>
            </div>

            <div class = "Aboutus-cardbuttom">
                <div>        
                    <iframe src="https://maps.google.com/maps?q=1049%20Jefferson%20Blvd,%20West%20Sacramento%20,CA%2095691&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0"
                        class = "mainrouter">
                    </iframe>
                          
                </div>
            </div>
        </div>
     );
}

export default AboutUs;