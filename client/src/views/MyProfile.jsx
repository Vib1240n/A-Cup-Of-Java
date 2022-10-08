import React, { useEffect, useState } from "react";
import axios from "axios";
import "../asset/css/myProfile.css";

const MyProfile = () => {

  const [userData, setUserData] = useState([]);

useEffect(() => {
  fetchUserData();
}, []);

const fetchUserData = () => {
  axios
    .get("http://localhost:5500/api/profile")
    .then((res) => {
      console.log(res);
      setUserData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
  return (
    <div className="MyProfile">
        <h1 className="heading">Your Profile Information</h1>
        <div className="form" action="#">
          <div className="firstName">First Name: {userData.firstname}</div>
          <div className="firstName">Last Name: {userData.lastname}</div>
          <div className="firstName">Email: {userData.username}</div>
          <button type="submit">Sign Out</button>
        </div>
      </div>
   );
  };
          
export default MyProfile;