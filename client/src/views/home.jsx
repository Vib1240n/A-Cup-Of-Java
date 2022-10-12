import React from "react";
import * as mui from "@mui/material";
//import "../asset/css/style.css";
import { useNavigate } from "react-router-dom";
import Appointment from "./appointment";
import InstagramIcon from "../asset/images/Instagram-Icon.png";
import Facebookicon from "../asset/images/facebookiconcolor1.png";
import Background from "../asset/images/BarbershopBackground.png";

function Home() {
  let navigate = useNavigate();
  const handleChange = () => {
    navigate("/appointment");
  };
  return (
    <mui.Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <mui.Button
        variant="contained"
        href="/appointment"
        sx={{
          backgroundColor: "#000000",
          backdropFilter: "blur(10px)",
          color: "#ffffff",
          width: "200px",
          height: "50px",
          fontSize: "10px",
          fontWeight: "bold",
          borderRadius: "10px",
          marginTop: "20px",
          position: "fixed",
          top: "195px",
          "&:hover": {
            backgroundColor: "gray",
            color: "#ffffff",
            backdropFilter: "blur(10px)",
            padding: "10px",
            shadow: "10px",
          },
        }}
      >
        Book Appointment
      </mui.Button>
    </mui.Box>
  );
}

export default Home;
