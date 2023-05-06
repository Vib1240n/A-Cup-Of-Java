import * as m from "@mui/material";
import React from "react";

export default function footer() {
  return (
    <m.Box
      container
      sx={{
        display: "flex",
        backgroundColor: "transparent",
        backdropFilter: "blur(80px) brightness(0.7)",
        color: "white",
        position: "static",
        bottom: 0,
        paddingTop: "7rem",
        width: "100%",
        height: "inherit",
      }}
    >
      <m.Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid red",
          width: "20%",
          height: "100%",
        }}
      >
        {/**
        TODO: Re-write footer for website
        TODO: Add social media links
        TODO: Add contact information
         */}
        <m.Typography
          variant="h7"
          component="a"
          href="/"
          sx={{
            mr: 1,
            m: 1,
            display: "flex",
            justifyContent: "flex-start",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "White",
            textDecoration: "none",
            "&:hover": {
              color: "black",
              backgroundColor: "White",
            },
          }}
        >
          Ace's BarberShop
        </m.Typography>
      </m.Grid>
    </m.Box>
  );
}
