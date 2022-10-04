import React, { useState } from "react";
import axios from "axios";
import "../asset/css/signin.css";

function SignIn() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const config = {
  //   headers: {
  //     "content-type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     "access-control-allow-credentials": "true",
  //   },
  // };
  // const data = {
  //   username: loginUsername,
  //   password: loginPassword,
  // };
  // const URL = "http://localhost:5500/api/login";

  const login = () => {
    axios({
      method: "POST",
      url: "api/login",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
    }).then((res) => console.log(res.data));
    // axios
    //   .post(URL, data, config)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };
  return (
    <div className="SignIn">
      <h1 className="heading">Sign In</h1>
      <div className="container">
        <div className="form">
          <form>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button id="submit-button" type="submit" onClick={login}>
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignIn;

{
  /*<div>
      <h1>Let's SignIn and get reward</h1>
      //create button for signup page
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Sign Up</h2>
            <a href="/signup" className="btn btn-primary">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
       <h1>Login</h1>
      <input
        placeholder="username"
        onChange={(e) => setLoginUsername(e.target.value)}
      />
      <input
        placeholder="password"
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={login}>Submit</button> */
}
