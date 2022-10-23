import React from "react";
import * as m from "@mui/material";
import * as t from "@mui/material/styles";
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
  const [state, setState] = React.useState({
    show: false,
  });

  /* default styles */
  const styles = {
    root: {
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backdropFilter: "blur(10px)",
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
          /* ***offset-x | offset-y | blur-radius | spread-radius | color*** */
          // boxShadow: "0 10px 20px 0 rgba(255, 255, 255, 0.9), 10px 0 20px 10px rgba(0, 0, 0, 0.9)",
          boxShadow:
            "0 9px 10px 0px gray, 0 -9px 10px 0px rgba(255, 255, 255, 0.8), 12px 0 15px -4px rgba(255, 0, 0, 1), -12px 0 15px -4px rgba(3, 3, 3, 0.5)",
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
            notched
            disableUnderline={true}
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
              "& .MuiInputBase-input": {
                color: "white",
                textAlign: "center",
              },
              "& .MuiInputLabel-root": {
                color: "white",
                fontSize: "1.5rem",
                textAlign: "center",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
                textAlign: "center",
                fontSize: "1.2rem",
              },
              "& .MuiInput-underline:before": {
                borderBottom: "2px solid white",
              },
              "& .MuiInput-underline:after": {
                borderBottom: "2px solid black",
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "2px solid green",
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
              paddingBottom: "10px",
              "& .MuiInputBase-input": {
                color: "white",
                textAlign: "center",
              },
              "& .MuiInputLabel-root": {
                color: "white",
                fontSize: "1.5rem",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
                textAlign: "center",
                fontSize: "1.2rem",
              },
              "& .MuiInput-underline:before": {
                borderBottom: "2px solid white",
              },
              "& .MuiInput-underline:after": {
                borderBottom: "2px solid red",
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "2px solid green",
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
            id="loginpage-button"
            onClick={onSubmitLogIn}
            sx={{
              height: "10%",
              width: "40%",
              borderRadius: "10px",
              border: "2px solid white",
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
                height: "auto",
                width: "200%",
                justifyContent: "center",
                alignItems: "center",
                // padding: "20px",
                "&:hover": {
                  transform: "translateX(-20%)",
                  transition: "all 0.9s ease-in",
                },
              }}
            >
              Login
            </m.Typography>
          </m.Button>
          <m.Button
            // onClick={toggleBox(visibility, true)}
            elevation={5}
            sx={{
              height: "10%",
              width: "40%",
              borderRadius: "10px",
              padding: "20px",
              paddingLeft: "3px",
              paddingRight: "4px",
              color: "black",
              border: "1px solid white",
              "&:hover": {
                boxShadow: "white 0px 0px 5px 0.1rem",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              },
            }}
          >
            Dont have an account?
          </m.Button>
        </m.Stack>
      </m.Box>
    </div>
  );
}
