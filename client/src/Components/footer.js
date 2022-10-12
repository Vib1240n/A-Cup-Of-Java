import React from "react";
import * as m from "@mui/material";

export default function footer() {
  return (
    <m.Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(45deg, #909090 30%, #151515 70%)",
        alignItems: "center",
        top: "500",
        bottom: "0",
        bgcolor: "background.paper",
        position: "fixed",
        width: "100%",
        height: "100px",
      }}
    >
      <m.Card
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          bgcolor: "background.paper",
          boxShadow: 1,
          padding: 1,
          width: "200px",
          height: "100px",
        }}
      >
        Card
      </m.Card>
    </m.Box>
  );
}
