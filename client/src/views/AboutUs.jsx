import React from "react";
import * as m from "@mui/material";
import "../asset/css/style.css";
import background from "../asset/images/servicesbackground.jpg";
import acelogo from "../asset/images/AcesBarbershopLogo.jpg";
import barber3 from "../asset/images/barber104.png";
import barber4 from "../asset/images/barber103.png";
import instaIcon from "../asset/images/Instagram-Icon.png";
import fbIcon from "../asset/images/facebookicon1.png";

function AboutUs() {
  const styles = {
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    img2: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
    },
    img3: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
      border: "2px solid #000",
    },
    img4: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
    },
    root: {
      backgroundColor: "white",
      color: "#fff",
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <div className="Main-cardContainer" style={styles.root}>
      <m.Box
        className="Maps-card"
        margin={"auto"}
        sx={{
          background: "transparent",
          backdropFilter: "blur(10px)",
          width: "100%",
          height: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          position: "fixed",
          justifyContent: "flex-end",
          top: "5%",
          zIndex: "1",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12477.345366437845!2d-121.53283779107666!3d38.57210181797086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37ef97b56ad0a0f8!2sAce&#39;s%20Barber%20Shop!5e0!3m2!1sen!2sus!4v1666401084462!5m2!1sen!2sus"
          frameborder="1"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          style={{
            default: "none",
            padding: "5",
          }}
        ></iframe>
      </m.Box>
      <m.Box
        className="AboutUs-card"
        sx={{
          background: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backdropFilter: "blur(10px)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          top: "25%",
          position: "relative",
        }}
      >
        <m.Box
          className="AboutUs-card"
          sx={{
            background: "transparent",
            backdropFilter: "blur(20px)",
            width: "90%",
            height: "78%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "absolute",
            top: "5%",
          }}
        >
          <m.Typography
            variant="h2"
            sx={{
              display: "flex",
              color: "black",
              fontFamily: "Roboto",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: "4.5rem",
              textAlign: "center",
              flex: "1",
            }}
          >
            About Us
          </m.Typography>
        </m.Box>
      </m.Box>
    </div>
  );
}

export default AboutUs;

/**
 * Family owned and operated. Serving Yolo country and sourrounding areas for past 5 years.Over 25+ year of experience. Providing premimum haircuit, beard trims and fades.
 * 
 * Hours

Mon-Fri: 10am - 6pm
Saturday: 9am - 4pm

Tel: (916) 956-0670 

"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12477.345366437845!2d-121.53283779107666!3d38.57210181797086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37ef97b56ad0a0f8!2sAce&#39;s%20Barber%20Shop!5e0!3m2!1sen!2sus!4v1666401084462!5m2!1sen!2sus" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 * 
 */
