import React, { Component } from "react";
import * as m from "@mui/material";
import axios from "axios";
import background from "../asset/images/background_cornerLong.jpg";

export default function loginPage() {
  /* 
  On change events for the login page & signup page
  */
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  /* default styles */
  const styles = {
    root: {
      backgroundImage: `url(${background})`,
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

  /*  
  on Submit function for the login page  
  */
  const onSubmitLogIn = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:5500/api/login", user)
      .then((res) => {
        console.log(res.data);
        if (res.data.redirect === "/MyProfile") {
          window.location = "/MyProfile";
        } else {
          window.location = "/home";
        }
      })
      .catch((err) => console.log(err));
  };
  const onSubmitSignUp = (e) => {
    e.preventDefault();
    const user = {
      username: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };
    axios
      .post("http://localhost:5500/api/signup", user)
      .then((res) => {
        console.log(res.data);
        if (res.data.redirect === "/MyProfile") {
          window.location = "/MyProfile";
        }
      })
      .catch((err) => console.log(err));
  };

  /*
  Render function for the login page
  */
  return (
    <div className="loginpage-basecontainer" style={styles.root}>
      <m.Box
        component="div"
        id="loginpage-box-outer"
        margin={"auto"}
        overflow="revert"
        sx={{
          height: { md: "80%", sm: "100%", lg: "50%", xs: "75%" },
          width: { md: "70%", sm: "100%", lg: "50%", xs: "100%" },
          // background:"black",
          backdropFilter: "blur(50px)",
          boxShadow: "0 0 20px 0 rgba(255, 255, 255, 0.9)",
          borderRadius: "100px",
        }}
      >
        <m.Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={5}
          height="100%"
        >
          <m.TextField
            id="loginpage-username"
            label="Username"
            type={"text"}
            variant="standard"
            onChange={(e) => setUsername(e.target.value)}
            required
            sx={{
              color: "white",
              height: "10%",
              width: "40%",
              fontSize: "1.5rem",
              // border: "4px solid white",
              borderRadius: "10px",
              padding: "0px",
              paddingLeft: "3px",
              paddingRight: "4px",
              "&:hover": {
                transition: "all 0.2s ease-out",
                boxShadow: "white 0px 0px 5px 0.1rem",
                // top: "-0.9rem",
              },
              "&:label": {
                color: "white",
                fontSize: "1.5rem",
              },
            }}
            inputProps={{
              style: {
                color: "white",
                fontSize: "1.5rem",
                borderRadius: "10px",
                // padding: "20px",
                paddingLeft: "0px",
              },
            }}
          ></m.TextField>
          <m.TextField
            id="loginpage-username"
            label="Password"
            type={"password"}
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              color: "white",
              height: "10%",
              width: "40%",
              fontSize: "1.5rem",
              // border: "4px solid white",
              borderRadius: "10px",
              // padding: "20px",
              paddingLeft: "3px",
              paddingRight: "4px",
              "&:hover": {
                boxShadow: "white 0px 0px 5px 0.1rem",
                transition: "all 0.2s ease-in",
              },
              "&:label": {
                color: "white",
                fontSize: "1.5rem",
              },
            }}
            inputProps={{
              style: {
                color: "white",
                fontSize: "1.5rem",
                borderRadius: "10px",
                padding: "20px",
                paddingLeft: "0px",
              },
            }}
          ></m.TextField>
          <m.Button
            sx={{
              height: "10%",
              width: "40%",
              borderRadius: "10px",
              padding: "20px",
              paddingLeft: "3px",
              paddingRight: "4px",
              color: "black",
              "&:hover": {
                boxShadow: "white 0px 0px 5px 0.1rem",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              },
            }}
          >
            <m.Typography
              sx={{
                fontSize: "1.5rem",
                height: "200%",
                width: "200%",
                padding: "20px",
                "&:hover": {
                  transform: "translateX(-40%)",
                  transition: "all 0.9s ease-in",
                },
              }}
            >
              Login
            </m.Typography>
          </m.Button>
          <m.Button
            sx={{
              height: "10%",
              width: "40%",
              fontSize: "1.2rem",
              borderRadius: "10px",
              padding: "20px",
              paddingLeft: "3px",
              paddingRight: "4px",
              color: "white",

              "&:hover": {
                boxShadow: "black 0px 0px 5px 0.1rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            Dont have an account? Sign Up
          </m.Button>
        </m.Stack>
      </m.Box>
    </div>
  );
}
