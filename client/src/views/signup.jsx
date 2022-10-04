import React, { useState, useEffect } from "react";
import background from "../asset/images/BarbershopBackground.png";
import Axios from "axios";

function signup() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState(null);

  const registerUser = () => {
    useEffect(() => {
      fetch("http://localhost:5500/api/signin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          username: email,
          password: password,
          confirmPassword: confirmPassword,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    });
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Sign Up</h5>
              <form>
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder="First Name"
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                  console.log(firstName);
                  <label for="lastName">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={(e) => setlastName(e.target.value)}
                  />
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label for="password">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button onClick={registerUser}>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;
