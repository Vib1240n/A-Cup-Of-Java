import React from "react";
import * as m from "@mui/material";

export default function footer() {
  return (
    <m.Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        backdropFilter: "blur(50px) brightness(0.7)",
        color: "white",
        position: "sticky",
        bottom: 0,
        paddingTop: "5rem",
        width: "100%",
      }}
    >
      this is a footer
    </m.Box>
  );
}
