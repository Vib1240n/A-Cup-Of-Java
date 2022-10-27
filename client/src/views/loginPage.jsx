import React from "react";
import * as m from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import background from "../asset/images/background_cornerLong.jpg";
import Alert from "@mui/material/Alert";

export default function loginPage() {
  React.useEffect(() => {
    isLoggedIn();
  }, []);
  /* 
  On change events for the login page & signup page
  */
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  let navigate = useNavigate();

  const handleChange = (prop) => {
    navigate(prop);
  };

  const isLoggedIn = () => {
    axios
      .get("http://localhost:5500/api/profile")
      .then((res) => {
        console.log("Is user logged in status: " + res.status);
        console.log(res.data);
        if (res.status === 200) {
          handleChange("/MyProfile");
        }
      })
      .catch((err) => {
        console.log("err" + err);
      });
  };

  /*  
  on Submit function for the login page  
  */
  const onSubmitLogIn = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
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
      .catch((err) => {
        return err;
      });
  };

  /* default styles */
  const styles = {
    root: {
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backdropFilter: "blur(10px)",
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    TextField: {
      color: "white",
      height: "10%",
      width: { xl: "40%" },
      fontSize: "1.5rem",
      borderRadius: "10px",
      paddingLeft: "3px",
      paddingRight: "4px",
      paddingBottom: "10px",
      "& .MuiInputBase-input": {
        color: "white",
        textAlign: "center",
      },
      "& .MuiInputLabel-root": {
        color: "white",
        fontSize: "1.5rem",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "green",
        textAlign: "center",
        fontSize: "1.2rem",
      },
      "& .MuiInput-underline:before": {
        borderBottom: "2px solid white",
      },
      "& .MuiInput-underline:after": {
        borderBottom: "2px solid black",
      },
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottom: "2px solid green",
      },
    },
    inputProps: {
      style: {
        color: "white",
        fontSize: "1.5rem",
        borderRadius: "10px",
        paddingLeft: "0px",
      },
    },
    button: {
      height: "10%",
      width: { xl: "40%" },

      borderRadius: "10px",
      border: "2px solid white",
      paddingLeft: "3px",
      paddingRight: "4px",
      color: "black",
      "&:hover": {
        boxShadow: "white 0px 0px 5px 0.1rem",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      },
    },
  };

  const logPage = () => {
    return (
      <m.Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        height="100%"
        width="100%"
        marginTop={"10%"}
      >
        <m.TextField
          id="loginpage-username"
          label="Username"
          type={"text"}
          variant="standard"
          onChange={(e) => setUsername(e.target.value)}
          required
          notched
          disableUnderline={true}
          sx={styles.TextField}
          inputProps={styles.inputProps}
        ></m.TextField>
        <m.TextField
          id="loginpage-password"
          label="Password"
          type={"password"}
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={styles.TextField}
          inputProps={styles.inputProps}
        ></m.TextField>
        <m.Button
          id="loginpage-button"
          onClick={onSubmitLogIn}
          sx={styles.button}
        >
          <m.Typography
            sx={{
              fontSize: "1.5rem",
              height: "auto",
              width: "200%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Login
          </m.Typography>
        </m.Button>
      </m.Stack>
    );
  };

  /*
  Return for the login page
  */
  return (
    <div className="loginpage-basecontainer" style={styles.root}>
      <m.Box
        component="div"
        id="loginpage-box-outer"
        margin={"auto"}
        overflow="revert"
        sx={{
          height: { md: "80%", sm: "100%", lg: "50%", xs: "75%" },
          width: { md: "70%", sm: "100%", lg: "50%", xs: "100%" },
          backdropFilter: "blur(50px)",
          boxShadow:
            "0 9px 10px 0px gray, 0 -9px 10px 0px rgba(255, 255, 255, 0.8), 12px 0 15px -4px rgba(255, 0, 0, 1), -12px 0 15px -4px rgba(3, 3, 3, 0.5)",
          borderRadius: "10px",
        }}
      >
        <m.Stack>{logPage()}</m.Stack>
        <m.Button
          elevation={5}
          onClick={(e) => {}}
          sx={{
            height: "10%",
            width: "40%",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            padding: "20px",
            paddingLeft: "3px",
            paddingRight: "4px",
            color: "black",
            border: "1px solid white",
            "&:hover": {
              boxShadow: "white 0px 0px 5px 0.1rem",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            },
          }}
        >
          Dont have an account?
        </m.Button>
      </m.Box>
    </div>
  );
}
