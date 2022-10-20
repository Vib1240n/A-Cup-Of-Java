import React, { useEffect, useState } from "react";
import * as m from "@mui/material";
import axios from "axios";
import "../asset/css/myProfile.css";
import "../asset/css/barbers.css";
import ace from "../asset/images/grooming3.png";
import instagramIcon from "../asset/images/instagramIcon.png";
import facebookIcon from "../asset/images/facebookIcon.jpg";

const MyProfile = () => {
  const [userData, setUserData] = useState([]);
  let name = userData.firstname + " " + userData.lastname;
  let username = userData.username;

  const styles = {
    background: {
      background: `url(${ace})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
    },
  };

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

  const logout = () => {
    axios
      .post("http://localhost:5500/api/logout")
      .then((res) => {
        console.log(res.data);
        if (res.data.redirect === "/home") {
          window.location = "/home";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={styles.background}>
      <m.Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="myProfile-basecontainer"
        sx={{
          width: { xl: "40%", lg: "50%", md: "60%", sm: "70%", xs: "80%" },
          height: "60%",
          background: "black",
          opacity: 0.8,
          borderRadius: "10px",
        }}
      >
        <m.Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          className="myProfile-innercontainer"
          margin={"auto"}
          sx={{
            // borderRadius: "10px",
            borderBottom: "3px solid white",
            width: "100%",
            height: "30%",
            flex: "1 10px",
            order: 0,
          }}
        >
          <m.Typography
            variant="h3"
            sx={{
              color: "white",
            }}
          >
            Name
          </m.Typography>
        </m.Box>
        <m.Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          className="myProfile-innercontainer"
          margin={"auto"}
          sx={{
            borderRadius: "10px",
            border: "1px solid white",
            width: "100%",
            height: "30%",
            flex: 1,
            order: 1,
          }}
        >
          <m.Typography
            variant="h3"
            sx={{
              color: "white",
            }}
          >
            User Name
          </m.Typography>
        </m.Box>
        <m.Table
          sx={{
            display: "flex",
            width: "100%",
            border: "1px solid white",
            order: 2,
            flex: 1,
          }}
        >

        </m.Table>
      </m.Box>
    </div>
  );
};

export default MyProfile;
