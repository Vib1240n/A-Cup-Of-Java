import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as mui from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import Background from "../asset/images/appointment_background.jpg";
import Alert from "@mui/material/Alert";

export default function Appointment() {
  let navigate = useNavigate();
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());
  const [userData, setUserData] = React.useState([]);
  const [errorMessage, setErrormessage] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState(false);

  const errorBox = errorMessage ? (
    <Alert severity="error" variant="filled">
      Appointment Booking Failed, Please try again.
    </Alert>
  ) : (
    ""
  );
  const successBox = successMessage ? (
    <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
      Appointment Booked!
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
        navigate("/loginPage");
      });
  };

  const fetchUserData = () => {
    axios
      .get("http://localhost:5500/api/profile")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {});
  };

  const onAppointment = (e) => {
    e.preventDefault();
    let message = `Hello ${userData.firstname} ${
      userData.lastname
    },\n\nThank you for requesting an appointment with us at Ace’s Barbershop. Your appointment is requested for ${date.toLocaleDateString()} at 
    ${time.toLocaleTimeString()}.\nWe are located at 1049 Jefferson Blvd West Sacramento, CA 95691. For any questions please contact us at  (916) 956-0670. We look forward to seeing you!`;
    axios 
      .post("http://localhost:5500/api/appointment", {
        date: date.toLocaleDateString(),
        time: time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        username: userData.username,
        message: message,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("response" + res.status);
          setSuccessMessage(true);
          setTimeout(() => {
            navigate("/MyProfile");
          }, 500);
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
      backgroundSize: "cover",
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
          border: "3px solid rgba(255,255,255,0.5)",
          boxShadow: "0px 0px 10px 10px rgba(255,255,255,0.5)",
          width: { md: "70%", sm: "60%", lg: "70%", xs: "75%", xl: "35%" },
          height: { md: "80%", sm: "70%", lg: "80%", xs: "75%", xl: "85%" },
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
          "@media (max-height: 675px)": {
            height: "50%",
            width: "80%",
            // display: "grid",
            // gridTemplateRows: "100%",
            // gridTemplateColumns: "100% 50% 50% 100%",
          },
        }}
      >
        <mui.Paper
          id="appointment-Paper-inner"
          component="div"
          elevation={0}
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            background: "transparent",
          }}
        >
          <mui.Stack
            id="appointment-stack"
            direction="column"
            spacing={12}
            elevation={1}
            zIndex={4}
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
                color: "white",
                "@media (max-width: 1000px)": {
                  fontSize: "2rem",
                },
              }}
            >
              Request an Appointment with us!
            </mui.Typography>
            <mui.Typography
              sx={{
                position: "relative",
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "Roboto",
                textAlign: "center",
                overflow: "hidden",
                color: "white",
                "@media (max-width: 1000px)": {
                  fontSize: "2rem",
                },
              }}
            >
              Once you requested your appointment, we will call or email you to
              confirm this appointment.
            </mui.Typography>
            <mui.TextField
              id="outlined-basic"
              type="text"
              label="Name"
              variant="outlined"
              placeholder={userData.firstname + " " + userData.lastname}
              value={userData.firstname + " " + userData.lastname}
              required={true}
              inputProps={{ readOnly: true }}
              sx={{
                width: "inherit",
                height: "50px",
                fontStyle: "italic",
                textAlign: "center",
                padding: "10px",
                display: "flex",
                ".MuiInputLabel-root": {
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  margin: "-15px",
                },
                ".MuiOutlinedInput-root": {
                  color: "white",
                  fontSize: "1.5rem",
                  font: "Roboto",
                  borderColor: "white",
                  "& fieldset": {
                    border: "2px solid white",
                  },
                  "&:hover fieldset": {
                    border: "2px solid white",
                  },
                  "&.MuiInputBase-readOnly": {
                    border: "2px solid white",
                    color: "white",
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
                renderInput={(params) => (
                  <mui.TextField
                    {...params}
                    sx={{
                      ".MuiInputLabel-root": {
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                        margin: "-15px",
                      },
                      ".MuiOutlinedInput-root": {
                        color: "white",
                        fontSize: "1.5rem",
                        font: "Roboto",
                        borderColor: "white",
                        "& fieldset": {
                          border: "2px solid white",
                        },
                      },
                    }}
                  />
                )}
              />
              <TimePicker
                renderInput={(params) => (
                  <mui.TextField
                    {...params}
                    sx={{
                      ".MuiInputLabel-root": {
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                        margin: "-15px",
                      },
                      ".MuiOutlinedInput-root": {
                        color: "white",
                        fontSize: "1.5rem",
                        font: "Roboto",
                        borderColor: "white",
                        "& fieldset": {
                          border: "2px solid white",
                        },
                      },
                    }}
                  />
                )}
                value={time}
                label="Pick Time"
                onChange={(time) => {
                  setTime(time);
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
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Request an Appointment
            </mui.Button>
            <mui.Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "10px",
                height: "50px",
                width: "100%",
              }}
            >
              {successBox}
              {errorBox}
            </mui.Box>
          </mui.Stack>
        </mui.Paper>
      </mui.Box>
    </div>
  );
}
