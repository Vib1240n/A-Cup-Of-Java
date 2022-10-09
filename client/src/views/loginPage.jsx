import React, { Component } from "react";
import { Box, TextField, Button, FormControl, Step } from "@mui/material";
import axios from "axios";
import background from "../asset/images/grooming1.png";
// import "../asset/css/loginPage.css";

export default class loginPage extends Component {
  /*
  Constructor for the login page
  Initialize the state of the login page
  */
  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangePasswordLogIn = this.onChangePasswordLogIn.bind(this);
    this.onChangePasswordSignUp = this.onChangePasswordSignUp.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
    this.onSubmitLogIn = this.onSubmitLogIn.bind(this);
    this.onSubmitSignUp = this.onSubmitSignUp.bind(this);
    this.state = {
      username: "",
      passwordLogIn: "",
      email: "",
      firstName: "",
      lastName: "",
      passwordSignUp: "",
      confirmPassword: "",
    };
  }
  /* 
  On change function events for the login page
  */

  //onchange function for login page
  onChangeUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePasswordLogIn(e) {
    this.setState({
      passwordLogIn: e.target.value,
    });
  }

  //onchange function for signup page
  onChangeUserEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  onChangeUserLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  onChangePasswordSignUp(e) {
    this.setState({
      passwordSignUp: e.target.value,
    });
  }
  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }

  /*  
  on Submit function for the login page  
  */
  onSubmitLogIn(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.passwordLogIn,
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
  }
  onSubmitSignUp(e) {
    e.preventDefault();
    const user = {
      username: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.passwordSignUp,
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
  }

  /*
  Render function for the login page
  */
  render() {
    return (
      <div
        style={{
          backgroundColor: "gray",
          backgroundRepeat: "repeat",
        }}
      >
        <Box
          component="div"
          sx={{
            width: 700,
            height: 700,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "50px",
            //backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "10px",
            borderRadius: 5,
            boxShadow: 5,
            display: "-ms-grid",
            flexDirection: "inherit",
            justifyContent: "center",
            position: "unset",
            location: "center",
            backfaceVisibility: "hidden",
            "&:hover": {
              boxShadow: 19,
              backfaceVisibility: "revert",
              blur: 10,
              backgroundColor: "#909090",
            },
          }}
          autoComplete="on"
        >
          <FormControl required={true}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              component="div"
              required={true}
              sx={{
                width: 300,
                height: 50,
                marginTop: 7,
                marginLeft: 20,
                marginRight: 20,
                fontStyle: "italic",
                padding: 1,
                borderRadius: 1,
                borderStyle: "solid",
                color: "white",
                boxShadow: 7,
                "& label": {
                  color: "primary.secondary",
                  border: "white",
                  margenLeft: 1,
                  margenRight: 1,
                },
                "& label.Mui-focused": {
                  color: "Black",
                  display: "block",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "& fieldset.Mui-focused": {
                    borderColor: "black",
                  },
                },
              }}
              inputMode="text"
              inputProps={{
                style: { color: "white", fontSize: 22, fontStyle: "normal" },
              }}
            />
            <TextField
              id="filled-basic"
              label="Email"
              variant="outlined"
              component="div"
              required={true}
              sx={{
                width: 300,
                height: 50,
                marginTop: 25,
                marginLeft: 20,
                marginRight: 20,
                fontStyle: "italic",
                padding: 1,
                borderRadius: 1,
                borderStyle: "solid",
                color: "white",
                boxShadow: 7,
                "& label": {
                  color: "primary.secondary",
                  border: "white",
                  margenLeft: 1,
                  margenRight: 1,
                },
                "& label.Mui-focused": {
                  color: "Black",
                  display: "block",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "& fieldset.Mui-focused": {
                    borderColor: "black",
                  },
                },
              }}
              inputProps={{
                style: { color: "white", fontSize: 22, fontStyle: "normal" },
              }}
            />
            <div>
              <TextField
                sx={{
                  width: 300,
                  height: 50,
                  marginTop: 25,
                  marginLeft: 20,
                  marginRight: 20,
                  fontStyle: "italic",
                  padding: 1,
                  borderRadius: 1,
                  borderStyle: "solid",
                  color: "white",
                  boxShadow: 7,
                  "& label": {
                    color: "primary.secondary",
                    border: "white",
                    margenLeft: 1,
                    margenRight: 1,
                  },
                  "& label.Mui-focused": {
                    color: "Black",
                    display: "block",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                    "& fieldset.Mui-focused": {
                      borderColor: "black",
                    },
                  },
                }}
                id="standard-basic"
                label="Password"
                variant="outlined"
                type="password"
                required={true}
                component="div"
                inputProps={{
                  style: { color: "white", fontSize: 22, fontStyle: "normal" },
                }}
              />
            </div>
          </FormControl>
        </Box>
      </div>
    );
  }
}
