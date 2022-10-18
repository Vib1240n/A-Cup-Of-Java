import React from "react";
import "../asset/css/signin.css"
import instagramIcon from "../asset/images/instagramIcon.png"
import facebookIcon from "../asset/images/facebookIcon.jpg"
import { Component } from "react";
import axios from "axios";
import "../asset/css/barbers.css"


export default class SignIn extends Component {
    /*
    Constructor for the login page
    Initialize the state of the login page
    */
    constructor(props) {
      super(props);
      this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
      this.onChangePasswordLogIn = this.onChangePasswordLogIn.bind(this);
    //   this.onChangePasswordSignUp = this.onChangePasswordSignUp.bind(this);
    //   this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    //   this.onChangeFirstName = this.onChangeFirstName.bind(this);
    //   this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
      this.onSubmitLogIn = this.onSubmitLogIn.bind(this);
    //   this.onSubmitSignUp = this.onSubmitSignUp.bind(this);
      this.onSubmitEmptyFieldVerification = this.onSubmitEmptyFieldVerification.bind(this);
      this.onSubmitEmailVerification = this.onSubmitEmailVerification.bind(this);
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

  onSubmitEmptyFieldVerification(e) {
    e.preventDefault();
    if(this.state.username === "" || this.state.passwordLogIn === "") {
      this.setState({
        passwordLogIn: "",
      })
      document.getElementById("errorMessage").textContent = 
      "There are fields that are empty, please fill out all fields!"; 
    }
      
    else {
      this.onSubmitEmailVerification(e);
    }
      
  }

  onSubmitEmailVerification(e) {
    e.preventDefault();
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(validEmail.test(this.state.username) == true) {
      this.onSubmitLogIn(e);
    }
    else {
      this.setState({
        passwordLogIn: "",
      })
      document.getElementById("errorMessage").textContent = 
      "Invaild email address, please confirm that your email address is vaild!";
    }
    
  }
//   onChangeFirstName(e) {
//     this.setState({
//       firstName: e.target.value,
//     });
//   }
//   onChangeUserLastName(e) {
//     this.setState({
//       lastName: e.target.value,
//     });
//   }
//   onChangePasswordSignUp(e) {
//     this.setState({
//       passwordSignUp: e.target.value,
//     });
//   }
//   onChangeConfirmPassword(e) {
//     this.setState({
//       confirmPassword: e.target.value,
//     });
//   }

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
      .catch((err) => console.log(err),
       document.getElementById("errorMessage").textContent =
       "Invaild username/password, please check and resubmit your login information!",
       this.setState({
        passwordLogIn: "",
       })
       ) 
      
  }
//   onSubmitSignUp(e) {
//     e.preventDefault();
//     const user = {
//       username: this.state.email,
//       firstName: this.state.firstName,
//       lastName: this.state.lastName,
//       password: this.state.passwordSignUp,
//     };
//     axios
//       .post("http://localhost:5500/api/signup", user)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.redirect === "/MyProfile") {
//           window.location = "/MyProfile";
//         }
//       })
//       .catch((err) => console.log(err));
//   }
render(){
    return ( 
        <div>
            <div class = "signin-wrapper2">
                <div>
                    <h1> Welcome to Ace's Barbershop</h1>
                </div>
                <div>
                    <h2> Sign In</h2>
                </div>
            </div>

            <div class="signin-wrapper3">
              <div>
                <form onSubmit={this.onSubmitEmptyFieldVerification}>
                <label id = "signin-label"> Email </label> 
                  <input
                    id ="signin-info"
                    type="text"
                    placeholder=" "
                    value={this.state.username}
                    onChange={this.onChangeUserName}
                  ></input>
                  <br />
                  <label id = "signin-label"> Passwords </label> 
                  <input
                    id = "signin-info"
                    type="password"
                    placeholder=" "
                    value={this.state.passwordLogIn}
                    onChange={this.onChangePasswordLogIn}
                  ></input>
                  <br/><br/>
                  <p id = "errorMessage"></p>
                  <div class = "signin-button">
                    <div>
                        <button class = "signin-submitbutton" type="submit">
                            SIGN IN
                        </button>
                        <div>
                            <h2 id = "signin-reminder"> Don't have an account yet? </h2>
                            <a href="/SignUp" class= "home-booknow"> Click Here </a> 
                        </div>
                    </div>
                  </div>
                </form>
                <br />
              </div>
            </div>

            <br/><br/><br/>
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
                    <p id = "barber-footerinfo">Contact Us: 123 456789</p>
                    <p id = "barber-footerinfo">1049 Jefferson Blvd, West Sacramento, CA 95691</p>
                </div>
            </div>
            <br/>
            <br/>
        </div>
     );
}}