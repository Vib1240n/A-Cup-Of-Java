import React from "react";
import * as mui from "@mui/material";
import Background from "../asset/images/ACOJ-Logo.jpg";

export default function Appointment() {
  const styles = {
    root: {
      backgroundImage: `url(${Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <div className="background-parent" style={styles.root}>
      <mui.Box>
        <mui.Paper
          elevation={5}
          sx={{
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
            padding: "20px",
            width: "50vw",
            height: "70vh",
            display: "block",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "auto",
            "&:hover": {
              backdropFilter: "blur(50px) brightness(0.9)",
            },
          }}
        >
          <mui.Typography
            variant="h3"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: "3rem",
              fontFamily: "Roboto",
              textAlign: "center",
              overflowWrap: "break-word",
              "@media (max-width: 1000px and 200px)": {
                fontSize: "2rem",
              },
              "@media (max-width: 100px)": {
                fontSize: "2rem",
              },
            }}
          >
            Let's make an Appointment
            <mui.TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{
                width: "100",
                marginTop: "20px",
                height: "50px",
                padding: "10px",
              }}
            />
          </mui.Typography>
        </mui.Paper>
      </mui.Box>
    </div>
  );
}
