import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
import Sidebar from "./sidebar_mui";
import { MultiSelectUnstyled } from "@mui/base";
import { Grid } from "@mui/material";
import { keys } from "@mui/system";

const settings = ["Profile", "Sign Out", "Appointments"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = (page) => {
    window.location.href = page;
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    // <Sidebar setState={({ ...this.state, [this.anchor]: this.open })} /> ;
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleEvent = (event) => {
    console.log(event);
    if (event === "Profile") {
      navigate("/loginPage");
    }
  };

  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "20",
        backdropFilter: "blur(40px)",
        // height: "75px",
        position: "stactic",
        // width: "100%",
        display: "inline-block",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar variant="regular">
          <Grid
            container
            direction="row"
            display={{ md: "inline-flex", xs: "block", sm: "flex" }}
            justifyContent={{ md: "flex-start", xs: "center" }}
            spacing={0}
            height="75px"
            alignItems={{ md: "center", xs: "center" }}
            sx={{
              border: "1px solid black",
              width: { xs: "100%", md: "65%", lg: "50%" },
            }}
          >
            <Button
              size="small"
              edge="end"
              aria-label="menu"
              sx={{
                color: "black",
                mr: 2,
                border: "1px solid black",
                "&:hover": {
                  background: "black",
                  color: "white",
                },
              }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </Button>
            {/** Shows when screen is maximum  */}
            <Button
              variant="h5"
              component="a"
              href="/home"
              sx={{
                mr: 1,
                display: { xs: "none", md: "flex", lg: "flex" },
                color: "white",
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".1rem",
                position: "sticky",
                width: "10vw",
                top: "0px",
                color: "black",
                border: "1px solid black",
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
              href="/home"
              sx={{
                display: { xs: "flex", sm: "flex", md: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: "1px",
                color: "black",
                textDecoration: "none",
                border: "1px solid black",
                "&:hover": {
                  color: "white",
                  backgroundColor: "black",
                },
              }}
            >
              Ace's BarberShop
            </Button>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent={{ md: "flex-end", xs: "none" }}
            display={{ md: "flex", xs: "none" }}
            height="75px"
            width={{ md: "95%", xs: "none", border: "1px solid black" }}
            alignItems="center"
            sx={{}}
          >
            <Button
              display={{ md: "flex", xs: "none" }}
              variant="h7"
              component="a"
              href="/Services"
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
              Services
            </Button>
            <Button
              display={{ md: "flex", xs: "none" }}
              variant="h7"
              component="a"
              href="/about"
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
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
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
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

/*{

  <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box> 

             <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> 

}*/
