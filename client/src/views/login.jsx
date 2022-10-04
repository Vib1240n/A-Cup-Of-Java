import React, { Component } from "react";
import axios from "axios";
import "../asset/css/signin.css";
import googleIcon from "../asset/images/GoogleLogo.png";

export default class Login extends Component {
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
      password: this.state.password,
    };
    axios
      .post("http://localhost:5500/api/login", user)
      .then((res) => {
        console.log(res.data);
        if (res.data.redirect === "/MyProfile") {
          window.location = "/MyProfile";
        }
      })
      .catch((err) => console.log(err));
  }
  onSubmitSignUp(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.passwordSignUp,
    };
    axios
      .post("http://localhost:5500/api/signup", user)
      .then((res) => {
        console.log(res.data);
        if (res.data.redirect === "/home") {
          window.location = "/home";
        }
      })
      .catch((err) => console.log(err));
  }

  /*
  Render function for the login page
  */
  render() {
    return (
      <div class="inup-wrapper">
        <div class="inup-info">
          <div class="inup-signUp">
            <p id="inup-font"> SIGN UP </p>
            <form onSubmit={this.onSubmitSignUp}>
              <input
                id="inup-boxshadow"
                type="text"
                placeholder=" First Name"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
              ></input>
              <br />
              <input
                id="inup-boxshadow"
                type="text"
                placeholder=" Last Name"
                value={this.state.lastName}
                onChange={this.onChangeUserLastName}
              ></input>
              <br />
              <input
                id="inup-boxshadow"
                type="text"
                placeholder=" Email"
                value={this.state.email}
                onChange={this.onChangeUserEmail}
              ></input>
              <br />
              <input
                id="inup-boxshadow"
                type="text"
                placeholder=" Password"
                value={this.state.passwordSignUp}
                onChange={this.onChangePasswordSignUp}
              ></input>
              <br />
              <input
                id="inup-boxshadow"
                type="text"
                placeholder=" Confirm Password"
                value={this.state.confirmPassword}
                onChange={this.onChangeConfirmPassword}
              ></input>
              <br />
              <button id="inup-boxshadow" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <div class="inup-signIn">
            <div class="input-signInUpper">
              <p id="inup-font"> SIGN IN</p>
              <form onSubmit={this.onSubmitLogIn}>
                <input
                  id="inup-boxshadow"
                  type="text"
                  placeholder=" Email"
                  value={this.state.username}
                  onChange={this.onChangeUserName}
                ></input>
                <br />
                <input
                  id="inup-boxshadow"
                  type="text"
                  placeholder=" Passwords"
                  value={this.state.passwordLogIn}
                  onChange={this.onChangePasswordLogIn}
                ></input>
                <button id="inup-submit-button" type="submit">
                  SIGN IN
                </button>
              </form>
              <br />
            </div>
            <div class="inup-signInLower">
              <div class="inup-line"> OR </div>
              <a href="https://www.google.com">
                <img src={googleIcon} alt="Google Icon" id="inup-googleIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
