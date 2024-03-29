import React from "react";
import * as m from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import background from "../asset/images/background_cornerLong.jpg";
import Alert from "@mui/material/Alert";
import valid from "validator";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";

function isValidNumber(value) {
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

export default function loginPage() {
  let navigate = useNavigate();
  React.useEffect(() => {
    isLoggedIn();
  }, []);

  /*
    On change events for the login page & signup page
    */

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errorMessage, setErrormessage] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorEmailInvalid, setErrorEmailInvalid] = React.useState(false);
  const [errorServer, setErrorServer] = React.useState(false);
  const [errorInput, setErrorInput] = React.useState(false);
  const [errorGen, setError] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState(false);
  const [allFalse, setAllFalse] = React.useState({
    errorEmail: false,
    errorEmailInvalid: false,
    errorServer: false,
    errorInput: false,
    errorGen: false,
  });

  const timeout = () => {
    setTimeout(() => {
      setAllFalse({
        errorEmail: false,
        errorEmailInvalid: false,
        errorServer: false,
        errorInput: false,
        errorGen: false,
      });
    }, 3000);
  };

  const errorboxes = (prop) => {
    if (prop === errorEmail && prop === true) {
      return (
        <Alert severity="error" variant="filled">
          Email is already registered
        </Alert>
      );
    }
    if (prop === errorMessage && prop === true) {
      return (
        <Alert severity="error" variant="filled">
          Please check passwords
        </Alert>
      );
    }
    if (prop === errorInput && prop === true) {
      return (
        <Alert severity="warning" variant="filled">
          Please fill in all fields
        </Alert>
      );
    }
    if (prop === errorEmailInvalid && prop === true) {
      return (
        <Alert severity="error" variant="filled">
          Email is not a valid Email
        </Alert>
      );
    }
    if (prop === errorServer && prop === true) {
      return (
        <Alert severity="error" variant="filled">
          Internal Server error, please try back later!
        </Alert>
      );
    }
    if (prop === errorGen && prop === true) {
      return (
        <Alert severity="warning" variant="filled">
          General Error please figure it out
        </Alert>
      );
    }
    timeout();
  };

  const isValidEmail = (_prop) => {
    console.log(_prop);
    _prop = _prop.toString();
    console.log(_prop);
    if (!_prop) {
      setErrorEmail(true);
    } else if (valid.isEmail(_prop)) {
      setEmail(_prop);
    } else {
      setErrorEmail(true);
    }
  };

  const isNumber = (e) => {
    const phoneNumber = isValidNumber(e.target.value);
    setPhoneNumber(phoneNumber);
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
      fontSize: { xl: "1.5rem", xs: "0.5rem" },
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
        fontSize: { xl: "1.5rem" },
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
  };

  const isLoggedIn = () => {
    axios
      .get("http://localhost:5500/api/profile",config)
      .then((res) => {
        console.log("Is user logged in status: " + res.status);
        if (res.status === 200) {
          navigate("/MyProfile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logPage = () => {
    return (
      <m.Stack
        direction="column"
        margin={"auto"}
        marginTop={{xs: 10, xl: 4}}
        justifyContent="center"
        alignItems="center"
        spacing={{ xl: 3, xs: 1 }}
        height="100%"
        width="100%"
      >
        <m.TextField
          id="loginpage-username"
          label="First Name"
          type={"text"}
          variant="standard"
          onChange={(e) =>
            setFirstName(e.target.value.toString().toLowerCase())
          }
          required
          disableUnderline={true}
          sx={styles.TextField}
          inputProps={styles.inputProps}
        ></m.TextField>
        <m.TextField
          id="loginpage-password"
          label="Last Name"
          type={"text"}
          variant="standard"
          onChange={(e) => setLastName(e.target.value.toString().toLowerCase())}
          required
          sx={styles.TextField}
          inputProps={styles.inputProps}
        ></m.TextField>
        <m.TextField
          id="loginpage-username"
          label="Email"
          type={"email"}
          variant="standard"
          onChange={(e) => setEmail(e.target.value.toString().toLowerCase())}
          required
          sx={styles.TextField}
          inputProps={styles.inputProps}
        ></m.TextField>
        <m.TextField
          id="loginpage-username"
          label="Phone Number"
          type="tel"
          value={phoneNumber}
          variant="standard"
          onChange={(e) => isNumber(e)}
          required
          sx={styles.TextField}
          inputProps={styles.inputProps}
        ></m.TextField>
        <m.TextField
          id="loginpage-username"
          label="Password"
          type={"password"}
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={styles.TextField}
          inputProps={styles.inputProps}
        ></m.TextField>
        <m.TextField
          id="loginpage-username"
          label="Confirm Password"
          type={"password"}
          variant="standard"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          sx={styles.TextField}
          inputProps={styles.inputProps}
        ></m.TextField>

        <m.Button
          id="loginpage-button"
          onClick={onSubmitSignUp}
          sx={{
            height: "10%",
            width: { xl: "40%", xs: "70%" },
            borderRadius: "10px",
            border: "2px solid white",
            paddingLeft: "3px",
            paddingRight: "4px",
            color: "black",
            "&:hover": {
              boxShadow: "white 0px 0px 5px 0.1rem",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            },
          }}
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
            Sign Up
          </m.Typography>
        </m.Button>
        {errorboxes(
          errorMessage ||
            errorEmail ||
            errorEmailInvalid ||
            errorInput ||
            errorServer
        )}
      </m.Stack>
    );
  };

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Credentials": "true",
    },
    withCredentials: true,
  };
  /*
    on Submit function for the login page
    */
  const onSubmitSignUp = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phoneNumber === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrorInput(true);
      setTimeout(() => {
        window.location.reload(true);
      }, 3000);
    } else if (password === confirmPassword) {
      const user = {
        username: email.toString().toLowerCase(),
        firstName: firstName,
        lastName: lastName,
        password: password,
        phoneNumber: phoneNumber,
      };
      axios
        .post("http://localhost:5500/api/signup", user, config)
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            window.location = "/MyProfile";
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            setErrorEmailInvalid(true);
          } else if (err.response.status === 400) {
            setErrorEmail(true);
          } else if (err.code === "ERR_NETWORK") {
            setErrorServer(true);
          }
          setTimeout(() => {
            window.location.reload(true);
          }, 3000);
        });
    } else {
      setErrormessage(true);
    }
  };

  /*
    Return for the login page
    */
  return (
    <div className="loginpage-basecontainer" style={styles.root}>
      <m.Box
        component="div"
        id="loginpage-box-outer"
        margin="auto"
        overflow="revert"
        sx={{
          height: { md: "80%", sm: "90%", lg: "70%", xs: "75%" },
          width: { md: "70%", sm: "100%", lg: "50%", xs: "100%" },
          backdropFilter: "blur(50px)",
          boxShadow:
            "0 9px 10px 0px gray, 0 -9px 10px 0px rgba(255, 255, 255, 0.8), 12px 0 15px -4px rgba(255, 0, 0, 1), -12px 0 15px -4px rgba(3, 3, 3, 0.5)",
          borderRadius: "10px",
        }}
      >
        <m.Stack>{logPage()}</m.Stack>
      </m.Box>
    </div>
  );
}
