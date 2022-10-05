import React, { useEffect, useState } from "react";
import axios from "axios";
import "../asset/css/myProfile.css";
import { Component } from "react";

export class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5500/api/MyProfile").then((res) => {
      this.setState({
        email: res.data.email,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
      });
    });
  }

  render() {
    return (
      <div className="MyProfile">
        <h1 className="heading">Your Profile Information</h1>
        <div className="form" action="#">
          <div className="firstName">First Name: {this.firstName}</div>
          <div className="firstName">Last Name: {this.lastName}</div>
          <div className="firstName">Email: {this.email}</div>
          <button type="submit">Sign Out</button>
        </div>
      </div>
    );
  }
}

export default MyProfile;
