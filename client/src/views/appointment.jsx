import React from "react";
import * as mui from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Background from "../asset/images/ACOJ-Logo.jpg";

export default function Appointment() {
  const [value, setValue] = React.useState(dayjs(Date.now()));
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
      <mui.Box
        component="div"
        id="appointment-box-outer"
        margin={"auto"}
        overflow="revert"
        sx={{
          backdropFilter: "blur(10px)",
          padding: "20px",
          width: {md: "70%", sm: "100%", lg: "50%"},
          height: {md: "80%", sm: "100%", lg: "50%"},
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "auto",
          "&:hover": {
            transition: "all 0.8s ease-in",
            backdropFilter: "blur(70px) brightness(0.9)",
            borderRadius: "100px",
            height: { xl: "45%", lg: "50%", md: "65%", sm: "70%", xs: "75%" },
            width: { xl: "60%", lg: "65%", md: "85%", sm: "90", xs: "95%" },
            marginBottom: "40px",
          },
        }}
      >
        <mui.Paper
          id="appointment-Paper-inner"
          component="div"
          margin={"auto"}
          overflow="revert"
          sx={{
            background: "transparent",
          }}
        >
          <mui.Stack
            id="appointment-stack"
            direction="column"
            spacing={15}
            elevation={0}
          >
            <mui.Typography
              variant="h3"
              sx={{
                position: "relative",
                fontWeight: "bold",
                fontSize: "3rem",
                fontFamily: "Roboto",
                textAlign: "center",
                overflow: "hidden",
                "@media (max-width: 1000px)": {
                  fontSize: "2rem",
                },
              }}
            >
              Let's make an Appointment
            </mui.Typography>
            <mui.TextField
              id="outlined-basic"
              type="text"
              label="Name"
              variant="outlined"
              placeholder="Enter your name"
              required={true}
              sx={{
                width: "500px",
                height: "50px",
                fontStyle: "italic",
                textAlign: "center",
                padding: "10px",
                display: "flex",
                "& label.Mui-focused": {
                  color: "Black",
                  textAlign: "center",
                },
                "& label.Mui": {
                  textAlign: "center",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "& fieldset.Mui": {
                    borderColor: "black",
                  },
                  "& fieldset.Mui-focused": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                disableIgnoringDatePartForTimeValidation={true}
                renderInput={(props) => <mui.TextField {...props} />}
                label="Date and Time"
                value={value || Date.now()}
                // maxTime={new Date( AdapterDayjs.date(value).setHours(17, 0, 0, 0) )}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
          </mui.Stack>
        </mui.Paper>
      </mui.Box>
    </div>
  );
}
