import React from "react";
import * as mui from "@mui/material";
import Background from "../asset/images/ACOJ-Logo.jpg";

export default function Appointment() {
  return (
    <mui.Container
      sx={{
        display: "block inline",
        position: "fixed",
        width: "100%",
        top: "70px",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // backdropFilter: "blur(10px)",
      }}
    >
      <mui.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          background: "transparent",
          backdropFilter: "blur(5px)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <mui.Typography
          variant="h1"
          sx={{
            color: "#Black",
            fontSize: "50px",
            fontWeight: "bold",
            marginTop: "20px",
            position: "fixed",
            top: "195px",
          }}
        >
          Book Appointment
        </mui.Typography>
        <mui.TextField>
          <mui.Input
            aria-label="First Name"
            sx={{
              width: "200px",
              height: "50px",
              top: "1px",
              bottom: "1px",
              fontSize: "10px",
              fontWeight: "bold",
              borderRadius: "10px",
            }}
          />
        </mui.TextField>
        <mui.Button
          variant="contained"
          href="/appointment"
          sx={{
            backgroundColor: "#000000",
            backdropFilter: "blur(10px)",
            color: "#ffffff",
            width: "100px",
            height: "50px",
            fontSize: "10px",
            fontWeight: "bold",
            borderRadius: "10px",
            position: "fixed",
            top: "300px",
            top: "alignItems",
            "&:hover": {
              backgroundColor: "gray",
              color: "#ffffff",
              backdropFilter: "blur(10px)",
              padding: "10px",
              shadow: "10px",
            },
          }}
        >
          Submit
        </mui.Button>
      </mui.Box>
    </mui.Container>
  );
}
// import * as React from "react";

// import TextField from "@mui/material/TextField";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// export default function BasicDatePicker() {
//   const [value, setValue] = React.useState(null);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         label="Basic example"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// }
