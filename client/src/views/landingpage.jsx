import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as m from "@mui/material";
import React from "react";
import background from "../asset/images/background_landingpage.jpeg";
function LandingPage() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backdropFilter: "blur(100px)",
      background: `url(${background})`,
    },
    Button: {
      color: "black",
      height: "10%",
      width: { xl: "40%" },
      fontSize: "1.5rem",
      borderRadius: "10px",
      paddingLeft: "3px",
      paddingRight: "4px",
      paddingBottom: "10px",
      marginTop: "0px",
      animation: "pulsate 3s infinite linear",
      "@keyframes pulsate": {
        "0%": {
          color: "black",
          background: "white",
        },
        "50%": {
          color: "white",
          background: "black",
        },
        "100%": {
          color: "black",
          background: "white",
        },
      },
    },
  };
  return (
    <m.Box sx={styles.container}>
      <m.Typography variant="h1" color={"white"}>
        Welcome to my Senior Project
      </m.Typography>
      <m.Button
        sx={styles.Button}
        onClick={(e) => {
          window.location.href = "/home";
        }}
      >
        Continue to Project
        <ArrowForwardIcon
          sx={{
            marginRight: "10px",
            fontSize: "5rem",
          }}
        />
      </m.Button>
    </m.Box>
  );
}

export default LandingPage;
