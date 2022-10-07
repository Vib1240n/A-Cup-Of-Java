import React, { Component } from "react";
import Box from "@mui/material/box";
import TextField from "@mui/material/TextField";
import axios from "axios";

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
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 5, width: "30ch" },
        }}
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    );
  }
}
