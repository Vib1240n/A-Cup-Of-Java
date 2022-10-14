import React, { useState, useEffect } from "react";
import background from "../asset/images/BarbershopBackground.png";
import axios from "axios";
import { Component } from "react";
import "../asset/css/signin.css"
import instagramIcon from "../asset/images/instagramIcon.png"
import facebookIcon from "../asset/images/facebookIcon.jpg"

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    // this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    // this.onChangePasswordLogIn = this.onChangePasswordLogIn.bind(this);

    this.onChangePasswordSignUp = this.onChangePasswordSignUp.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
    // this.onSubmitLogIn = this.onSubmitLogIn.bind(this);
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
//   //onchange function for login page
// onChangeUserName(e) {
//   this.setState({
//     username: e.target.value,
//   });
// }
// onChangePasswordLogIn(e) {
//   this.setState({
//     passwordLogIn: e.target.value,
//   });
// }

// //onchange function for signup page
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

  render(){
    return(
      <div>
        <div class = "signin-wrapper2">
                <div>
                    <h1> Welcome to Ace's Barbershop</h1>
                </div>
                <div>
                    <h2> Sign Up</h2>
                </div>
            </div>

        <div class="signin-wrapper3">
              <form onSubmit={this.onSubmitSignUp}>
                <label id = "signin-label"> First Name </label>   
                <input
                  id="signin-info"
                  type="text"
                  placeholder=" "
                  value={this.state.firstName}
                  onChange={this.onChangeFirstName}
                ></input>
                <br />
                <label id = "signin-label"> Last Name </label>   
                <input
                  id="signin-info"
                  type="text"
                  placeholder=" "
                  value={this.state.lastName}
                  onChange={this.onChangeUserLastName}
                ></input>
                <br />
                <label id = "signin-label"> Email </label>
                <input
                  id="signin-info"
                  type="text"
                  placeholder=" "
                  value={this.state.email}
                  onChange={this.onChangeUserEmail}
                ></input>
                <br />
                <label id = "signin-label"> Passwords </label> 
                <input
                  id="signin-info"
                  type="password"
                  placeholder=" "
                  value={this.state.passwordSignUp}
                  onChange={this.onChangePasswordSignUp}
                ></input>
                <br />
                <label id = "signin-label"> Confirm Passwords </label> 
                <input
                  id="signin-info"
                  type="password"
                  placeholder=" "
                  value={this.state.confirmPassword}
                  onChange={this.onChangeConfirmPassword}
                ></input>
                <br />
                <div class = "signin-button">
                    <div>
                        <button class = "signin-submitbutton" type="submit">
                            SIGN UP
                        </button>
                    </div>
                </div>
              </form>
            </div>

            <div class = "signin-wrapper2">
                <h2 id = "signin-reminder"> Already have an account with us ?</h2>
                <a href="/SignUp" class= "home-booknow"> Click Here </a> 
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
                    <p id = "barber-footerinfo"> Contact Us: 123 456789</p>
                    <p id = "barber-footerinfo">  1049 Jefferson Blvd, West Sacramento, CA 95691 </p>
                </div>
            </div>
            <br/>
            <br/>
      </div>
    )
  }
}

// function signup() {
//   const [firstName, setfirstName] = useState("");
//   const [lastName, setlastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [data, setData] = useState(null);

//   const registerUser = () => {
//     useEffect(() => {
//       fetch("http://localhost:5500/api/signin", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify({
//           firstName: firstName,
//           lastName: lastName,
//           username: email,
//           password: password,
//           confirmPassword: confirmPassword,
//         }),
//       })
//         .then((response) => {
//           return response.json();
//         })
//         .then((json) => {
//           console.log(json);
//         });
//     });
//   };
//   return (
//     <div class="container">
//       <div class="row">
//         <div class="col-md-6">
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">Sign Up</h5>
//               <form>
//                 <div class="form-group">
//                   <label for="firstName">First Name</label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="firstName"
//                     placeholder="First Name"
//                     onChange={(e) => setfirstName(e.target.value)}
//                   />
//                   console.log(firstName);
//                   <label for="lastName">Last Name</label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="lastName"
//                     placeholder="Last Name"
//                     onChange={(e) => setlastName(e.target.value)}
//                   />
//                   <label for="email">Email</label>
//                   <input
//                     type="email"
//                     class="form-control"
//                     id="email"
//                     placeholder="Email"
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <label for="password">Password</label>
//                   <input
//                     type="password"
//                     class="form-control"
//                     id="password"
//                     placeholder="Password"
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <label for="password">Confirm Password</label>
//                   <input
//                     type="password"
//                     class="form-control"
//                     id="password"
//                     placeholder="Password"
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                   />
//                   <button onClick={registerUser}>Sign Up</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default signup;
