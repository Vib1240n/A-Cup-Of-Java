import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { color } from "@mui/system";
import Login from "@mui/icons-material/Login";
export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

  // const toggle = { props, query };
  // React.useEffect(() => {
  //   setState({ ...state, [toggle]: bool });
  // }, [toggle, bool]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        background: "linear-gradient(180deg, #909090 30%, #151515 70%)",
        color: "white",
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemButton href="/loginPage">
            <ListItemIcon>
              <LoginIcon
                sx={{
                  color: "white",
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
                  color: "white",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Book Appointment" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div
      style={{
        background: "transparent",
        boxShadow: "10",
        backdropFilter: "blur(30px)",
        height: "10%",
        width: "1",
      }}
    >
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            elevation={5}
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              position: "absolute",
              zIndex: "5000",
              top: 15,
            }}
          >
            <MenuIcon
              sx={{
                display: "inline-block",
              }}
             />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
