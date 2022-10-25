import * as React from "react";
import { link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ListItemIcon from "@mui/material/ListItemIcon";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Grid } from "@mui/material";

const settings = ["Profile", "Sign Out", "Appointments"];
function ResponsiveAppBar() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const userSetting = () => {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Profile Settings">
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>

        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {settings.map((setting) => (
            <MenuItem
              key={setting}
              component="Link"
              onClick={(setting) => {
                if (setting === "Profile") {
                  useNavigate("/home");
                }
              }}
            >
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
  };

  const list = () => (
    <Box
      className="sidebar"
      sx={{
        background: "transparent",
        opacity: " 0.9",
        backdropFilter: "blur(40px)",
        height: "100%",
        border: "3px solid red",
      }}
      zIndex="-1"
    >
      <List>
        <ListItem>
          <ListItemButton
            onClick={(e) => {
              if (window.location.pathname === "/") {
                const anchor = document.querySelector("#home");
                anchor.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              } else {
                navigate("/");
              }
            }}
          >
            <ListItemIcon>
              <HomeIcon
                sx={{
                  color: "Black",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton href="/loginPage">
            <ListItemIcon>
              <LoginIcon
                sx={{
                  color: "Black",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton href="/appointment">
            <ListItemIcon>
              <AppRegistrationIcon
                sx={{
                  color: "Black",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Book Appointment" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            onClick={() => {
              if (window.location.pathname === "/") {
                const anchor = document.querySelector("#services-view");
                anchor.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              } else {
                navigate("/");
              }
              toggleDrawer("left", false);
            }}
          >
            <ListItemIcon>
              <CleaningServicesOutlinedIcon
                sx={{
                  color: "Black",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            onClick={() => {
              if (window.location.pathname === "/") {
                const anchor = document.querySelector("#contact-infomration");
                anchor.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              } else {
                navigate("/");
              }
            }}
          >
            <ListItemIcon>
              <ContactPhoneOutlinedIcon
                sx={{
                  color: "Black",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Contact Information" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            onClick={() => {
              if (window.location.pathname === "/") {
                const anchor = document.querySelector("#about-us");
                anchor.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              } else {
                navigate("/");
              }
            }}
          >
            <ListItemIcon>
              <InfoOutlinedIcon
                sx={{
                  color: "Black",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  const navigate = (page) => {
    window.location.href = page;
  };

  const checkLogin = () => {
    setLoggedIn(true);
  };

  const handleEvent = (event) => {
    console.log(event);
    if (event === "Profile") {
      navigate("/loginPage");
    }
  };

  return (
    <AppBar
      className="appbar"
      sx={{
        background: "transparent",
        boxShadow: "20",
        backdropFilter: "blur(40px)",
        position: "stactic",
        display: "flex",
      }}
    >
      <Container maxWidth="xl" className="appbar-container">
        <Toolbar variant="regular" className="appbar-toolbar">
          {/** Logo and home button */}
          <Grid
            container
            direction="row"
            display={{ md: "flex", xs: "flex", sm: "flex" }}
            justifyContent={{ md: "flex-start", xs: "flex-start" }}
            spacing={0}
            height="75px"
            alignItems={{ md: "center", xs: "center" }}
            sx={{
              width: { xs: "100%", md: "65%", lg: "50%" },
            }}
          >
            <Button
              elevation={1}
              size="small"
              // edge="end"
              aria-label="menu-button-sidebar"
              ml={-2}
              sx={{
                color: "white",
                border: "1px solid black",
                "&:hover": {
                  background: "black",
                  color: "white",
                },
              }}
              onClick={(e) => {
                setShow(!show);
              }}
              // onChange={toggleDrawer("left", false)}
            >
              <MenuIcon />
              <Drawer
                sx={{
                  background: "transparent",
                  backdropFilter: "blur(40px)",
                }}
                open={show}
                onClick={(e) => {
                  setShow(!show);
                }}
                // elevation={0}
              >
                {list()}
              </Drawer>
            </Button>
            {/** Shows when screen is maximum  */}
            <Button
              variant="h5"
              component="a"
              onClick={() => {
                if (window.location.pathname === "/") {
                  const anchor = document.querySelector("#home");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                } else {
                  navigate("/");
                }
              }}
              sx={{
                mr: 1,
                display: { xs: "none", md: "flex", lg: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".1rem",
                position: "sticky",
                width: "10vw",
                top: "0px",
                color: "white",
                "&:hover": {
                  color: "white",
                  backgroundColor: "black",
                },
              }}
            >
              Ace's BarberShop
            </Button>
            {/** Shows when screen is small or extra small  */}
            <Button
              variant="h7"
              component="a"
              onClick={() => {
                if (window.location.pathname === "/") {
                  const anchor = document.querySelector("#home");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                } else {
                  navigate("/");
                }
              }}
              sx={{
                display: { xs: "flex", sm: "flex", md: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: "1px",
                color: "white",
                textDecoration: "none",
                // border: "1px solid black",
                "&:hover": {
                  color: "white",
                  backgroundColor: "black",
                },
              }}
            >
              Ace's BarberShop
            </Button>
          </Grid>
          {/** Navigation buttons */}
          <Grid
            container
            direction="row"
            justifyContent={{ md: "flex-end", xs: "none" }}
            display={{ md: "flex", xs: "none" }}
            height="75px"
            width={{ md: "95%", xs: "none" }}
            alignItems="center"
            sx={{}}
          >
            <Button
              display={{ md: "flex", xs: "none" }}
              variant="h7"
              component="a"
              onClick={() => {
                if (window.location.pathname === "/") {
                  const anchor = document.querySelector("#services-view");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                } else {
                  navigate("/#services-view");
                  const anchor = document.querySelector("#services-view");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }}
              // href="#services"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "White",
                textDecoration: "none",
                "&:hover": {
                  color: "black",
                  backgroundColor: "White",
                },
              }}
            >
              Services
            </Button>
            <Button
              display={{ md: "flex", xs: "none" }}
              variant="h7"
              component="a"
              onClick={() => {
                const anchor = document.querySelector("#about-us");
                anchor.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "White",
                textDecoration: "none",
                "&:hover": {
                  color: "black !important",
                  backgroundColor: "White",
                },
              }}
            >
              About Us
            </Button>
            <Button
              display={{ md: "flex", xs: "none" }}
              variant="h7"
              component="a"
              href="/appointment"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "White",
                textDecoration: "none",
                "&:hover": {
                  color: "black !important",
                  backgroundColor: "White",
                },
              }}
            >
              Appointment
            </Button>
            <Box>
              <Menu>
                <Tooltip>{userSetting()}</Tooltip>
              </Menu>
            </Box>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
