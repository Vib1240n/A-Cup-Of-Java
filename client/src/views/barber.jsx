import React from "react";
import barber1 from "../asset/images/barber101.png";
import barber2 from "../asset/images/barber102.png";
import barber3 from "../asset/images/barber103.png";
import instagramIcon from "../asset/images/Instagram-Icon.png"
import facebookIcon from "../asset/images/facebookiconcolor1.png"
import "../asset/css/barbers.css";

function Barber() {

    return(
        <div>

            <div class = "barberBackground">
                <div class = "barbersTitle">Our Barbers</div>
                <div class = "barbersTitleContent">Learn more about our staff! </div>

            </div>  
            <br/>

            <h1 id = "barbersLineTitle">Our Staff</h1>  
            <div class ="barbersLine"></div>
            <br/>

            <div class = "barberSection">

                <div class = "barberProfile">
                    <img src = {barber1} id = "barberProfileImage" alt = "Barber Image 1"></img>

                    <a href="https://www.instagram.com">
                        <img src = {instagramIcon} id = "instagramIconImage" alt = "Instagram Icon"></img>
                    </a>
                    <a href="https://www.facebook.com">
                        <img src = {facebookIcon} id = "facebookIconImage" alt = "Facebook Icon"></img>
                    </a>

                    <p id = "barberProfileContent"> 
                     Hello my name is Barber1!
                     I specialize in hair cuts! 
                     It is my passion!
                     More words!
                     More words!
                     More words!
                     More words!
                    </p> 
                    
                </div>

                <div class = "barberProfile">
                    <img src = {barber2} id = "barberProfileImage" alt = "Barber Image 2"></img>

                    <a href="https://www.instagram.com">
                        <img src = {instagramIcon} id = "instagramIconImage" alt = "Instagram Icon"></img>
                    </a>
                    <a href="https://www.facebook.com">
                        <img src = {facebookIcon} id = "facebookIconImage" alt = "Facebook Icon"></img>
                    </a>

                    <p id = "barberProfileContent"> 
                     Hello my name is Barber2!
                     I specialize in waxing! 
                     It is my passion!
                     More words!
                     More words!
                     More words!
                     More words!
                    </p> 
                    
                </div>

                <div class = "barberProfile">
                    <img src = {barber3} id = "barberProfileImage" alt = "Barber Image 3"></img>

                    <a href="https://www.instagram.com">
                        <img src = {instagramIcon} id = "instagramIconImage" alt = "Instagram Icon"></img>
                    </a>
                    <a href="https://www.facebook.com">
                        <img src = {facebookIcon} id = "facebookIconImage" alt = "Facebook Icon"></img>
                    </a>

                    <p id = "barberProfileContent"> 
                     Hello my name is Barber3!
                     I specialize in grooming! 
                     It is my passion!
                     More words!
                     More words!
                     More words!
                    </p> 

                </div>

                

                  
            </div> 

        </div>
    );
}
export default Barber;