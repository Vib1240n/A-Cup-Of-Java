import React from "react";
import * as mui from "@mui/material";
//import "../asset/css/style.css";
import { useNavigate } from "react-router-dom";
import Appointment from "./appointment";
import InstagramIcon from "../asset/images/Instagram-Icon.png";
import Facebookicon from "../asset/images/facebookiconcolor1.png";
import Background from "../asset/images/BarbershopBackground.png";

function Home() {
  const [open, setOpen] = React.useState(false);
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
      <mui.Box
        sx={{
          top: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          position: "static",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(10px) brightness(0.9)",
        }}
      >
        <mui.Typography
          variant="h1"
          sx={{
            color: "white",
            fontFamily: "comic sans ms",
            fontWeight: "bold",
            fontSize: "5rem",
            textAlign: "center",
          }}
        >
          A Cut Above the Rest
        </mui.Typography>
        <mui.Button
          variant="contained"
          href="/LoginPage"
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
            position: "sticky",
            top: "195px",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
              backdropFilter: "blur(10px)",
              padding: "10px",
              shadow: "10px",
            },
          }}
        >
          login
        </mui.Button>
      </mui.Box>
    </mui.Box>
  );
}

export default Home;
