import React, { Component } from "react";
import axios from "axios";
import "../asset/css/signin.css";
import googleIcon from "../asset/images/GoogleLogo.png";
import instagramIcon from "../asset/images/instagramIcon.png"
import facebookIcon from "../asset/images/facebookIcon.jpg"

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
      <div>
        <div class="inup-wrapper">
          <div class="inup-info">
            <div class="inup-signUp">
              <p id="inup-font"> SIGN UP </p>
              <form onSubmit={this.onSubmitSignUp}>
                <label id = "login-label"> First Name </label>   
                <input
                  id="inup-boxshadow"
                  type="text"
                  placeholder=" "
                  value={this.state.firstName}
                  onChange={this.onChangeFirstName}
                ></input>
                <br />
                <label id = "login-label"> Last Name </label>   
                <input
                  id="inup-boxshadow"
                  type="text"
                  placeholder=" "
                  value={this.state.lastName}
                  onChange={this.onChangeUserLastName}
                ></input>
                <br />
                <label id = "login-label"> Email </label> 
                <input
                  id="inup-boxshadow"
                  type="text"
                  placeholder=" "
                  value={this.state.email}
                  onChange={this.onChangeUserEmail}
                ></input>
                <br />
                <label id = "login-label"> Passwords </label> 
                <input
                  id="inup-boxshadow"
                  type="password"
                  placeholder=" "
                  value={this.state.passwordSignUp}
                  onChange={this.onChangePasswordSignUp}
                ></input>
                <br />
                <label id = "login-label"> Confirm Passwords </label> 
                <input
                  id="inup-boxshadow"
                  type="password"
                  placeholder=" "
                  value={this.state.confirmPassword}
                  onChange={this.onChangeConfirmPassword}
                ></input>
                <br />
                <button id="inup-submit-button" type="submit">
                  Sign Up
                </button>
              </form>
            </div>


            <div class="inup-signIn">
              <div class="input-signInUpper">
                <p id="inup-font"> SIGN IN</p>
                <form onSubmit={this.onSubmitLogIn}>
                <label id = "login-label"> Email </label> 
                  <input
                    id="inup-boxshadow"
                    type="text"
                    placeholder=" "
                    value={this.state.username}
                    onChange={this.onChangeUserName}
                  ></input>
                  <br />
                  <label id = "login-label"> Passwords </label> 
                  <input
                    id="inup-boxshadow"
                    type="password"
                    placeholder=" "
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
          <br/>
        </div>
        <br/>
        <br/>
        <div class = "barber-footer">
                <div id = "barber-social">
                    <a href="https://www.instagram.com">
                  <img src= {instagramIcon} alt="Instagram Icon" id ="barber-ig"/>
                </a>
                <a href="https://www.facebook.com">
                  <img src= {facebookIcon} alt="Instagram Icon" id ="barber-fb"/>
                </a>
                </div>
                <div>
                    <p id = "barber-footerinfo"> Contact Us: 123 456789</p>
                    <p id = "barber-footerinfo">  1049 Jefferson Blvd, West Sacramento, CA 95691 </p>
                </div>
        </div>
      </div>
    );
  }
}
