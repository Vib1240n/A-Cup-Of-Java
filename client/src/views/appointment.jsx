import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as mui from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import Background from "../asset/images/ACOJ-Logo.jpg";

export default function Appointment() {
  let navigate = useNavigate();
  const [date, setDate] = React.useState(dayjs(new Date()));
  const [time, setTime] = React.useState(dayjs(new Date()));
  const [userData, setUserData] = React.useState([]);
  const [errorMessage, setErrormessage] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState(false);

  const errorBox = errorMessage ? (
    <Alert severity="error" varient="Filled">
      Incorrect Password or Email
    </Alert>
  ) : (
    ""
  );
  const successBox = successMessage ? (
    <Alert severity="Success" varient="Filled">
      Appointment Booked
    </Alert>
  ) : (
    ""
  );

  React.useEffect(() => {
    isLoggedIn();
  }, []);

  const isLoggedIn = () => {
    axios
      .get("http://localhost:5500/api/profile")
      .then((res) => {
        console.log("Is user logged in status: " + res.status);
        if (res.status === 200) {
          fetchUserData();
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/loginPage");
      });
  };

  const fetchUserData = () => {
    axios
      .get("http://localhost:5500/api/profile")
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onAppointment = (e) => {
    e.preventDefault();
    console.log(
      "Date: " +
        date.toDate().getMonth() +
        "/" +
        date.toDate().getDate() +
        "/" +
        date.toDate().getFullYear()
    );
    console.log(
      "Time: " +
        (time.toDate().getHours()) +
        ":" +
        time.toDate().getMinutes()
    );
    let message =
      "Hello " +
      userData.firstname +
      " " +
      userData.lastname +
      ", thank you for scheduling an appointment with us at Ace’s Barbershop. Your appointment is scheduled for [DATE] at [TIME]. We are located at 1049 Jefferson Blvd West Sacramento, CA 95691. For any questions please contact us at (916) 956-0670. We look forward to seeing you!";
    axios
      .post("http://localhost:5500/api/appointment", {
        date: date,
        time: time.toDate().getHours() + ":" + time.toDate().getMinutes(),
        username: userData.username,
        message: message,
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccessMessage(true);
        }
      })
      .catch((err) => {
        setErrormessage(true);
      });
  };

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
          border: "3px solid black",
          width: { md: "70%", sm: "60%", lg: "70%", xs: "75%", xl: "35%" },
          height: { md: "80%", sm: "70%", lg: "50%", xs: "75%", xl: "65%" },
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "auto",
          "&:hover": {
            transition: "all 0.8s ease-in",
            backdropFilter: "blur(70px) brightness(0.9)",
            boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.5)",
            borderRadius: "30px",
          },
        }}
      >
        <mui.Paper
          id="appointment-Paper-inner"
          component="div"
          elevation={0}
          //   margin={"auto"}
          overflow="revert"
          sx={{
            height: "100%",
            // width: "100%",
            display: "inline-flex",
            background: "transparent",
          }}
        >
          <mui.Stack
            id="appointment-stack"
            direction="column"
            spacing={12}
            elevation={0}
          >
            <mui.Typography
              variant="h4"
              sx={{
                position: "relative",
                fontWeight: "bold",
                fontSize: "2rem",
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
              placeholder={userData.firstname + " " + userData.lastname}
              value={userData.firstname + " " + userData.lastname}
              required={true}
              sx={{
                width: "inherit",
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
              <DatePicker
                label="Pick Date"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <mui.TextField {...params} />}
              />
              <TimePicker
                renderInput={(params) => <mui.TextField {...params} />}
                value={time}
                label="Pick Time"
                onChange={(newValue) => {
                  setTime(newValue);
                }}
                minTime={dayjs("T06:00PM")}
                maxTime={dayjs("T10:00AM")}
              />
            </LocalizationProvider>
            <mui.Button
              variant="contained"
              onClick={onAppointment}
              sx={{
                width: "inherit",
                height: "50px",
                fontStyle: "italic",
                textAlign: "center",
                padding: "10px",
                display: "flex",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Book Appointment
            </mui.Button>
            {successBox}
            {errorBox}
          </mui.Stack>
        </mui.Paper>
      </mui.Box>
    </div>
  );
}
