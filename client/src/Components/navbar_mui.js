import React from "react";
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

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar
      sx={{
        background: "linear-gradient(45deg, #909090 30%, #151515 70%)",
        background: "transparent",
        boxShadow: "20",
        backdropFilter: "blur(40px)",
        height: "75px",
        position: "fixed",
        width: "100vw",
        display: "block",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar variant="regular">
          <Grid
            container
            direction="row"
            display={{ xs: "block", sm: "flex" }}
            justifyContent={{ md: "flex-start", xs: "flex-end" }}
            alignItems={{ md: "baseline", xs: "flex-end" }}
            sx={{
              width: { xs: "25%", md: "35%", lg: "20%" },
            }}
          >
            {/** Shows when screen is maximum  */}
            <Button
              variant="h5"
              component="a"
              href="/home"
              sx={{
                mr: 15,
                display: { xs: "none", md: "flex", lg: "flex" },
                color: "white",
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".3rem",
                position: "sticky",
                width: "100vw",
                top: "0px",
                color: "black",
                "&:hover": {
                  color: "white",
                  backgroundColor: "black",
                  width: "100vh",
                },
              }}
            >
              Ace's BarberShop
            </Button>
            {/** Shows when screen is small or extra small  */}
            <Button
              variant="h5"
              component="a"
              href="/home"
              sx={{
                display: { xs: "flex", sm: "flex", md: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "black",
                textDecoration: "none",
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
            width={{ md: "65%", xs: "none" }}
            border={"1px solid black"}
            alignItems="baseline"
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
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
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

/* Buttons for the navbar
<Button
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 15,
              border: "1px solid black",
              display: { xs: "none", md: "flex", lg: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              position: "sticky",
              top: "0px",
              color: "black",
              // right: "750px",
              // zIndex: "5",
              "&:hover": {
                color: "black",
                padding: "0.5rem",
              },
            }}
          >
            Ace's BarberShop
          </Button>
          <Button
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              border: "1px solid black",
              display: { xs: "flex", sm: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            Ace's BarberShop
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="h7"
              noWrap
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
              variant="h7"
              noWrap
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
              variant="h7"
              noWrap
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
          </Box>
*/
