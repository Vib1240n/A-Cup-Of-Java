import React from "react";
import axios from "axios";
import * as mui from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import Background from "../asset/images/ACOJ-Logo.jpg";

export default function Appointment() {
  const [date, setDate] = React.useState(null);
  const [time, setTime] = React.useState(null);
  const [userData, setUserData] = React.useState([]);

  React.useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios
      .get("http://localhost:5500/api/profile")
      .then((res) => {
        console.log(res);
        setUserData(res.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onAppointment = (e) => {
    console.log(date);
    console.log(JSON.stringify(time));
    console.log(userData);
    axios.post("http://localhost:5500/api/appointment", {
      date: date,
      time: time,
      username: userData,
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
  return(
          <div className="background-parent" style={styles.root}>
              <mui.Box
                  component="div"
                  id="appointment-box-outer"
                  margin={"auto"}
                  overflow="revert"
                  sx={{
                      backdropFilter: "blur(10px)",
                      padding: "20px",
                      width: {md: "70%", sm: "100%", lg: "50%" , xs: "75%"},
                      height: {md: "80%", sm: "100%", lg: "50%" , xs: "75%"},
                      display: "inline-flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "auto",
                      "&:hover": {
                          transition: "all 0.8s ease-in",
                          backdropFilter: "blur(70px) brightness(0.9)",
                          boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.5)",
                          borderRadius: "100px",
                          height: {xl: "45%", lg: "50%", md: "65%", sm: "70%", xs: "75%"},
                          width: {xl: "60%", lg: "65%", md: "85%", sm: "90", xs: "95%"},
                        //   marginBottom: "40px",
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
                          <mui.Button variant="contained" onClick={onAppointment} sx={{}}>
                              Book Appointment
                          </mui.Button>
                      </mui.Stack>
                  </mui.Paper>
              </mui.Box>
          </div>
          );
}
