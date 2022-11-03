import React from "react";
import { useRef } from "react";
import * as m from "@mui/material";
import * as i from "@mui/icons-material";
//import "../asset/css/style.css";
import { useNavigate } from "react-router-dom";
import Background from "../asset/images/BarbershopBackground.png";
import logo from "../asset/images/AcesBarbershopLogo-removebg-preview.png";
import servicesbg from "../asset/images/servicesbackground1.jpg";
import wallBg from "../asset/images/wall-bg-up.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import marco from "../asset/images/barber102.png";
import barber2 from "../asset/images/barber101.png";
import barber3 from "../asset/images/barber103.png";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function createData(service, price, time) {
  return { service, price, time };
}

function createTimeData(days, hours) {
  return { days, hours };
}

const ExpandMore = m.styled((props) => {
  const { expand, ...other } = props;
  return <m.IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(270deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Home() {
  const [open, setOpen] = React.useState(false);
  const ref = useRef(null);
  let navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [expandedBarber2, setExpandedBarber2] = React.useState(false);
  const [expandedBarber3, setExpandedBarber3] = React.useState(false);

  const handleBarber1 = () => {
    setExpanded(!expanded);
  };

  const handleBarber2 = () => {
    setExpandedBarber2(!expandedBarber2);
  };

  const handleBarber3 = () => {
    setExpandedBarber3(!expandedBarber3);
  };

  const handleChange = () => {
    navigate("/appointment");
  };

  const rows = [
    createData("Haircut", "$35", "30 min"),
    createData("Line Up", "$25", "30 min"),
    createData("Shave", "$20", "30 min"),
    createData("Beard & Lineup", "$40", "30 min"),
    createData("Fades", "$35", "30 min"),
    createData("Facial Service", "$15", "30 min"),
  ];

  const rows_time = [
    createTimeData("Monday - Friday", "10am - 6pm"),
    createTimeData("Saturday", "9am - 4pm"),
    createTimeData("Sunday", "Closed"),
  ];

  const styles = {
    background: {
      background: `url(${Background})`,
      position: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      zIndex: "-1",
    },
    listItem: {
      display: "flex",
      backgroundColor: "transparent",
      backdropFilter: "blur(20px) brightness(0.2)",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      top: "0",
    },
    listItemBox: {
      background: "rgba(255, 255, 255, 0.1)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      height: "100%",
      width: "100%",
      //            top: "10px",
    },
    servicesBackground: {
      background: `url(${servicesbg})`,
      borderRadius: "20px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "top",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      fontSize: "2rem",
      color: "white",
    },
    servicesBackgroundbox: {
      backgroundColor: "transparent",
      backdropFilter: "blur(70px)",
      boxShadow: "0 0 20px 0 rgba(0, 0, 0, 1.9)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      height: "75%",
      width: "100%",
      borderRadius: "10px",
    },
    typography: {
      fontFamily: "Roboto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "55px",
      margin: "auto",
      fontSize: {
        xl: "5rem",
        lg: "3rem",
        md: "2rem",
        sm: "1.5rem",
        xs: "1.5rem",
      },
      color: "black",
    },
    gridLayout: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
      height: "90%",
      width: "100%",
    },
    barberCard: {
      maxHeight: { xl: "100%" },
      maxWidth: { xl: "100%", xs: "100%" },
      height: { xl: "40%", xs: "auto" },
      width: { xl: "100%", xs: "auto" },
      boxShadow: { xl: "0 0 20px 0 rgba(0, 0, 0, 1.9)" },
    },
  };

  const contactInfo = () => {
    return (
      <m.Box
        sx={{
          backgroundImage: `url(${wallBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "25px",
          alignItems: { xl: "center", xs: "center" },
          justifyContent: { xl: "center", xs: "center" },
          display: { xl: "grid", xs: "grid" },
          gridTemplateColumns: { xs: "100%", xl: "100%" },
          width: "100%",
          height: "100%",
        }}
      >
        <m.Card
          elevation={0}
          sx={{
            border: "5px solid white",
            display: "grid",
            gridTemplateRows: "20% 80%",
            gridTemplateColumns: "100%",
            background: "transparent",
            backdropFilter: "blur(50px)",
            height: { xl: "100%", xs: "80%" },
            width: { xl: "100%", xs: "100%" },
            justifyContent: { xl: "center", xs: "center" },
            alignItems: { xl: "center", xs: "flex-start" },
            alignContent: "center",
            marginTop: { xs: "0px" },
          }}
        >
          <m.CardHeader
            title="Contact Us"
            component="h3"
            sx={{
              display: "flex",
              width: "40%",
              background: "rgba(255, 255, 255, 0.2)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "auto",
              border: "4mm ridge rgba(255, 255, 255, .9)",
              borderRadius: "10px",
              ".MuiCardHeader-title": {
                justifyContent: "center",
                fontFamily: "Roboto",
                fontWeight: "500",
                alignItems: "center",
                alignContent: "center",
                color: "black",
                fontSize: {
                  xl: "2rem",
                  lg: "1.5rem",
                  md: "1.7rem",
                  sm: " 1.7rem",
                  xs: "1rem",
                },
              },
            }}
          />
          <m.TableContainer
            component={m.Paper}
            elevation={0}
            sx={{
              overflow: "revert",
              backgroundColor: "transparent",
              marginTop: "0px",
            }}
          >
            <m.Table
              id="hours-table"
              sx={{
                backgroundColor: "rgba(255,255,255, 0.2)",
                margin: "auto",
                marginTop: "0%",
                width: "50%",
                borderRadius: "10px",
              }}
            >
              <m.TableHead
                sx={{
                  borderBottom: "2px solid Black",
                  boxShadow: "0 0 50px 0 rgba(0, 0, 0, 1.9)",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <m.TableCell align="center">Days</m.TableCell>
                <m.TableCell align="center">Hours</m.TableCell>
              </m.TableHead>
              <m.TableBody>
                {rows_time.map((row) => (
                  <m.TableRow
                    component="th"
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(90px) brightness(0.2)",
                        transition: "all 0.2s ease",
                      },
                    }}
                  >
                    <m.TableCell
                      scope="row"
                      align="left"
                      sx={{
                        fontSize: {
                          xl: "1.5rem",
                          lg: "1.2rem",
                          md: "1.1rem",
                          sm: "1rem",
                          xs: "0.7rem",
                        },
                        fontWeight: 500,
                        fontFamily: "Roboto",
                        color: "black",
                        borderBottom: "4px solid transparent",
                      }}
                    >
                      {row.days}
                    </m.TableCell>
                    <m.TableCell
                      scope="row"
                      align="right"
                      sx={{
                        fontSize: {
                          xl: "1.5rem",
                          lg: "1.2rem",
                          md: "1.1rem",
                          sm: "1rem",
                          xs: "0.7rem",
                        },
                        fontWeight: 500,
                        fontFamily: "Roboto",
                        color: "black",
                        borderBottom: "4px solid transparent",
                      }}
                    >
                      {row.hours}
                    </m.TableCell>
                  </m.TableRow>
                ))}
              </m.TableBody>
            </m.Table>
          </m.TableContainer>
        </m.Card>
        <m.Card
          elevation={0}
          sx={{
            background: "transparent",
            backdropFilter: "blur(50px)",
            display: "flex",
            flexDirection: "column",
            height: { xl: "100%", xs: "100%", md: "100%", lg: "100%" },
            width: { xl: "100%", xs: "100%", md: "100%", lg: "100%" },
            marginTop: { xs: "0px" },
            margin: "auto",
            marginRight: "0px",
          }}
        >
          <m.CardHeader
            title="1049 Jefferson Blvd, West Sacramento, CA 95691"
            subheader={"contact: (916) 956-0670"}
            sx={{
              ".MuiCardHeader-title": {
                color: "white",
                fontFamily: "Roboto",
                fontWeight: "900",
                textShadow: "3px 1px 5px rgba(0, 0, 0, 0.9)",
              },
              ".MuiCardHeader-subheader": {
                color: "white",
                fontFamily: "Roboto",
                fontWeight: "900",
                textShadow: "3px 1px 5px rgba(0, 0, 0, 0.9)",
              },
            }}
          />
          <m.CardMedia
            component={"iframe"}
            src={
              "https://maps.google.com/maps?q=1049%20Jefferson%20Blvd,%20West%20Sacramento%20,CA%2095691&t=&z=13&ie=UTF8&iwloc=&output=embed"
            }
            sx={{
              height: "100%",
              width: "100%",
            }}
          />
        </m.Card>
      </m.Box>
    );
  };

  const list = () => (
    <m.List>
      <m.ListItem id="home" style={styles.listItem} className="listItem">
        <m.Box style={styles.listItemBox} className="listItemBox">
          <m.Box
            sx={{
              backgroundImage: `url(${logo})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "50%",
              width: "50%",
              top: "0",
              marginBottom: "0",
            }}
          ></m.Box>
        </m.Box>
      </m.ListItem>
      <m.ListItem
        id="services-view"
        style={styles.listItem}
        className="listItem"
      >
        <m.Box style={styles.servicesBackground} className="servicesBackground">
          <m.Typography
            sx={{
              fontFamily: "Roboto",
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              border: "4mm ridge rgba(75, 75, 75, 1.9)",
              background: "rgba(255, 255, 255, 0.2)",
              margin: "auto",
              marginTop: "15px",
              fontSize: {
                xl: "2rem",
                lg: "1.5rem",
                md: "1.7rem",
                sm: " 1.7rem",
                xs: "1rem",
              },
              color: "black",
            }}
            variant="h3"
          >
            Services
          </m.Typography>
          <m.Box
            style={styles.servicesBackgroundbox}
            className="servicesBackgroundbox"
          >
            <m.TableContainer
              component={m.Paper}
              sx={{
                width: { xl: "70%" },
                height: "100%",
                overflow: "revert",
                backgroundColor: "transparent",
                backdropFilter: "blur(10px)",
              }}
            >
              <m.Table height="100%" aria-label="simple m.Table">
                <m.TableHead>
                  <m.TableRow
                    sx={{
                      borderBottom: "5px solid Black",
                      boxShadow: "0 0 50px 0 rgba(0, 0, 0, 1.9)",
                    }}
                  >
                    <m.TableCell
                      align="center"
                      sx={{
                        width: "20%",
                        fontSize: {
                          xl: "2rem",
                          lg: "2rem",
                          md: "1.5rem",
                          sm: "1rem",
                          xs: "1rem",
                        },
                        fontFamily: "Roboto",
                      }}
                    >
                      Service
                    </m.TableCell>
                    <m.TableCell
                      align="center"
                      sx={{
                        width: "60%",
                        fontSize: {
                          xl: "2rem",
                          lg: "2rem",
                          md: "1.5rem",
                          sm: "1rem",
                          xs: "1rem",
                        },
                        fontFamily: "Roboto",
                      }}
                    >
                      Price
                    </m.TableCell>
                    <m.TableCell
                      align="right"
                      sx={{
                        width: "100%",
                        fontSize: {
                          xl: "2rem",
                          lg: "2rem",
                          md: "1.5rem",
                          sm: "1rem",
                          xs: "1rem",
                        },
                        fontFamily: "Roboto",
                      }}
                    >
                      Time
                    </m.TableCell>
                  </m.TableRow>
                </m.TableHead>
                <m.TableBody>
                  {rows.map((row) => (
                    <m.TableRow
                      component="th"
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          backdropFilter: "blur(90px) brightness(0.2)",
                          transition: "all 0.2s ease",
                        },
                      }}
                    >
                      <m.TableCell
                        scope="row"
                        align="left"
                        sx={{
                          fontSize: {
                            xl: "1.5rem",
                            lg: "1.2rem",
                            md: "1.1rem",
                            sm: "1rem",
                            xs: "0.7rem",
                          },
                          fontWeight: 500,
                          fontFamily: "Roboto",
                          color: "black",
                          borderBottom: "4px solid transparent",
                        }}
                      >
                        {row.service}
                      </m.TableCell>
                      <m.TableCell
                        align="center"
                        sx={{
                          fontSize: {
                            xl: "1.5rem",
                            lg: "1.2rem",
                            md: "1.1rem",
                            sm: "1rem",
                            xs: "0.7rem",
                          },
                          fontWeight: 500,
                          fontFamily: "Roboto",
                          color: "black",
                          borderBottom: "4px solid transparent",
                        }}
                      >
                        {row.price}
                      </m.TableCell>
                      <m.TableCell
                        align="right"
                        sx={{
                          fontSize: {
                            xl: "1.5rem",
                            lg: "1.2rem",
                            md: "1.1rem",
                            sm: "1rem",
                            xs: "0.7rem",
                          },
                          fontWeight: 500,
                          fontFamily: "Roboto",
                          color: "black",
                          borderBottom: "4px solid transparent",
                        }}
                      >
                        {row.time}
                      </m.TableCell>
                    </m.TableRow>
                  ))}
                </m.TableBody>
              </m.Table>
            </m.TableContainer>
          </m.Box>
        </m.Box>
      </m.ListItem>
      <m.ListItem id="barber-information" style={styles.listItem}>
        <m.Box style={styles.listItemBox}>
          <m.Box
            sx={{
              height: "80%",
              width: "100vw",
              display: "grid",
              gridTemplateColumns: {
                xs: "50%",
                xl: "repeat(3, 1fr)",
                md: "50%",
              },
              gridTemplateRows: { md: "50% 50% 50% 10%" },
              gridGap: "20px",
              margin: "auto",
            }}
          >
            <m.Card
              sx={{
                zIndex: "99",
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                gridColumn: {
                  md: expandedBarber2 ? "3" : "1",
                  xl: "1",
                  lg: "1",
                },
                gridRow: { md: expandedBarber2 ? "2" : "1", xl: "1", lg: "1" },
                background: "transparent",
                backdropFilter: "blur(50px)",
                maxWidth: { xl: 500, xs: 150, md: 300 },
                boxShadow: "5px 5px 5px 5px black",
                border: "3mm ridge rgba(255, 255, 255, 0.9)",
              }}
            >
              <m.CardHeader
                title="Marco"
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                }}
              />
              <m.CardMedia
                component="img"
                image={marco}
                alt="Barber-Marco"
                sx={{
                  display: "flex",
                  margin: "auto",
                  height: "90%",
                  width: "90%",
                  boxShadow: "12px 12px 2px 1px rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                }}
              />
              <m.CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleBarber1}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </m.CardActions>
              <m.Collapse
                in={expanded}
                timeout="auto"
                unmountOnExit
                orientation="vertical"
              >
                <m.CardContent
                  sx={{
                    margin: "auto",
                  }}
                >
                  <m.Typography
                    sx={{
                      color: "white",
                      maginTop: "0px",
                      fontSize: {
                        xl: "1.2rem",
                        lg: "1.2rem",
                        md: "1.1rem",
                        sm: "1rem",
                        xs: "0.7rem",
                      },
                    }}
                  >
                    Better known in the community as Li$to, is the owner of
                    Ace’s Barbershop alongside Elena. Marco is an expert in
                    modern contemporary haircuts and beard fades. For custom
                    haircuts, please contact via phone or instagram.
                  </m.Typography>
                </m.CardContent>
                <m.Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", xl: "center" },
                    alignItems: "center",
                    flexDirection: "row",
                    marginLeft: { xs: "0px" },
                    width: "100%",
                    height: "55px",
                  }}
                >
                  <m.IconButton
                    aria-label="instagram"
                    href="https://www.instagram.com/listoblendz"
                    target="_blank"
                    rel="noopener"
                  >
                    <InstagramIcon
                      sx={{
                        color: "white",
                        margin: "auto",
                        fontSize: { xl: "50px", xs: "30px" },
                        "&:hover": {
                          color: "black",
                          background: "white",
                          borderRadius: "15px",
                        },
                      }}
                    />
                  </m.IconButton>
                  <m.IconButton
                    aria-label="phone"
                    href="tel:1-916-752-8381"
                    target="_blank"
                    rel="noopener"
                  >
                    <ContactPhoneIcon
                      sx={{
                        color: "white",
                        margin: "auto",
                        fontSize: { xl: "50px", xs: "30px" },
                        "&:hover": {
                          color: "black",
                          background: "white",
                          width: "115%",
                          borderRadius: "5px",
                        },
                      }}
                    />
                  </m.IconButton>
                  <m.IconButton
                    aria-label="email"
                    href="mailto:marco.h99@hotmail.com"
                    target="_blank"
                    rel="noopener"
                  >
                    <AlternateEmailIcon
                      sx={{
                        color: "white",
                        margin: "auto",
                        fontSize: { xl: "50px", xs: "30px" },
                        "&:hover": {
                          color: "black",
                          background: "white",
                          borderRadius: "15px",
                        },
                      }}
                    />
                  </m.IconButton>
                </m.Box>
              </m.Collapse>
            </m.Card>
            <m.Card
              sx={{
                gridColumn: { xl: "2", xs: "3" },
                margin: "auto",
                marginTop: "0px",
                //                                marginRight: {xs: "0px"},
                background: "transparent",
                backdropFilter: "blur(50px)",
                maxWidth: { xl: 500, xs: 150, md: 300 },
                boxShadow: "5px 5px 5px 5px black",
                border: "3mm ridge rgba(255, 255, 255, 0.9)",
              }}
            >
              <m.CardHeader
                title="Jimmy"
                sx={{
                  color: "white",
                  height: "10%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  marginTop: "0px",
                  ".MuiCardHeader-title": {
                    fontFamily: "Roboto",
                  },
                }}
              />
              <m.CardMedia
                component="img"
                image={barber3}
                alt="Barber-jimmy"
                sx={{
                  display: "flex",
                  margin: "auto",
                  height: "90%",
                  width: "90%",
                  boxShadow: "12px 12px 2px 1px rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                }}
              />
              <m.CardActions>
                <ExpandMore
                  expand={expandedBarber3}
                  onClick={handleBarber3}
                  aria-expanded={expandedBarber3}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </m.CardActions>
              <m.Collapse
                in={expandedBarber3}
                timeout="auto"
                unmountOnExit
                orientation="vertical"
              >
                <m.CardContent>
                  <m.Typography
                    sx={{
                      color: "white",
                      maginTop: "0px",
                      fontSize: {
                        xl: "1.2rem",
                        lg: "1.2rem",
                        md: "1.1rem",
                        sm: "1rem",
                        xs: "0.7rem",
                      },
                    }}
                  >
                    A long time employee of Ace’s Barbershop, Jimmy is well
                    known by customers for his artistic styles in haircuts.
                    Jimmy shows off his expertise in fades, hair designs, and
                    beard trimming. For custom haircuts, please contact via
                    phone or instagram.
                  </m.Typography>
                </m.CardContent>
                <m.Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", xl: "center" },
                    alignItems: "center",
                    flexDirection: "row",
                    marginLeft: { xs: "0px" },
                    width: "100%",
                    height: "55px",
                  }}
                >
                  <m.IconButton
                    aria-label="instagram"
                    href="https://www.instagram.com/jgonzo_916"
                    target="_blank"
                    rel="noopener"
                  >
                    <InstagramIcon
                      sx={{
                        color: "white",
                        margin: "auto",
                        fontSize: { xl: "50px", xs: "30px" },
                      }}
                    />
                  </m.IconButton>
                  <m.IconButton
                    aria-label="phone"
                    href="tel:1-916-271-4339"
                    target="_blank"
                    rel="noopener"
                  >
                    <ContactPhoneIcon
                      sx={{
                        color: "white",
                        margin: "auto",
                        fontSize: { xl: "50px", xs: "30px" },
                        "&:hover": {
                          color: "black",
                          background: "white",
                          width: "115%",
                          borderRadius: "5px",
                        },
                      }}
                    />
                  </m.IconButton>
                  <m.IconButton
                    aria-label="email"
                    href="mailto:jqonsales@gmail.com"
                    target="_blank"
                    rel="noopener"
                  >
                    <AlternateEmailIcon
                      sx={{
                        color: "white",
                        margin: "auto",
                        fontSize: { xl: "50px", xs: "30px" },
                      }}
                    />
                  </m.IconButton>
                </m.Box>
              </m.Collapse>
            </m.Card>
            <m.Card
              sx={{
                gridColumn: { xl: "3", xs: expanded ? "3" : "1" },
                margin: "auto",
                marginTop: { xl: "0px" },
                background: "transparent",
                backdropFilter: "blur(50px)",
                maxWidth: { xl: 500, xs: 150, md: 300 },
                boxShadow: "5px 5px 5px 5px black",
                border: "3mm ridge rgba(255, 255, 255, 0.9)",
              }}
            >
              <m.CardHeader
                title="Elena"
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                }}
              />
              <m.CardMedia
                component="img"
                image={barber2}
                alt="Barber-Elena"
                sx={{
                  display: "flex",
                  margin: "auto",
                  height: "90%",
                  width: "90%",
                  boxShadow: "12px 12px 2px 1px rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                }}
              />
              <m.CardActions>
                <ExpandMore
                  expand={expandedBarber2}
                  onClick={handleBarber2}
                  aria-expanded={expandedBarber2}
                  aria-label="show more"
                >
                  <ExpandMoreIcon
                    sx={{
                      color: "white",
                      margin: "auto",
                    }}
                  />
                </ExpandMore>
              </m.CardActions>
              <m.Collapse
                in={expandedBarber2}
                timeout="auto"
                unmountOnExit
                orientation="vertical"
              >
                <m.CardContent>
                  <m.Typography
                    wrap
                    sx={{
                      color: "white",
                      fontSize: {
                        xl: "1.15rem",
                        lg: "1.2rem",
                        md: "1.1rem",
                        sm: "1rem",
                        xs: "0.7rem",
                      },
                    }}
                  >
                    Better known in the community as Shorty, is the owner of
                    Ace’s Barbershop alongside Marco. With over twenty years of
                    experience, Elena is excellent with customers that range
                    from children to adults. For custom haircuts, please contact
                    via phone or instagram.
                  </m.Typography>
                </m.CardContent>
                <m.Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", xl: "center" },
                    alignItems: "center",
                    flexDirection: "row",
                    marginLeft: { xs: "0px" },
                    width: "100%",
                    height: "55px",
                  }}
                >
                  <m.IconButton
                    aria-label="instagram"
                    href="https://www.instagram.com/mizzshortyblendz"
                    target="_blank"
                    rel="noopener"
                  >
                    <InstagramIcon
                      sx={{
                        color: "white",
                        fontSize: { xl: "50px", xs: "30px" },
                        margin: "auto",
                      }}
                    />
                  </m.IconButton>
                  <m.IconButton
                    aria-label="phone"
                    href="tel:1-916-956-067"
                    target="_blank"
                    rel="noopener"
                  >
                    <ContactPhoneIcon
                      sx={{
                        color: "white",
                        fontSize: { xl: "50px", xs: "30px" },
                        margin: "auto",
                        "&:hover": {
                          color: "black",
                          background: "white",
                          width: "115%",
                          borderRadius: "5px",
                        },
                      }}
                    />
                  </m.IconButton>
                  <m.IconButton
                    aria-label="email"
                    href="mailto:latinqween57@gmail.com"
                    target="_blank"
                    rel="noopener"
                  >
                    <AlternateEmailIcon
                      sx={{
                        color: "white",
                        fontSize: { xl: "50px", xs: "30px" },
                        margin: "auto",
                      }}
                    />
                  </m.IconButton>
                </m.Box>
              </m.Collapse>
            </m.Card>
          </m.Box>
        </m.Box>
      </m.ListItem>
      <m.ListItem ref={ref} id="contact-information" style={styles.listItem}>
        <m.Box style={styles.listItemBox}>{contactInfo()}</m.Box>
      </m.ListItem>
      <m.ListItem id="about-us" style={styles.listItem}>
        <m.Box
          sx={{
            background: "rgba(255, 255, 255, 0.1)",
            display: "grid",
            gridTemplateColumns: "100%",
            gridTemplateRows: "20% 75%",
            gridGap: "20px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            height: "100%",
            width: "100%",
          }}
        >
          <m.Box
            sx={{
              height: "30%",
              display: "flex",
              width: { sm: "50%", xl: "35%", lg: "30%" },
              borderRadius: "5px",
              background: "rgba(255, 255, 255, 0.2)",
              border: "4mm ridge rgba(255, 255, 255, .6)",
              top: "0px",
              margin: "auto",
              marginTop: "0px",
              justifyContent: "center",
              alignItem: "center",
              alignContent: "center",
              fontSize: "2rem",
            }}
          >
            About us
          </m.Box>
          <m.Card
            sx={{
              background: "rgba(255, 255, 255, 0.2)",
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <m.Typography
              sx={{
                padding: "50px",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: {
                  xl: "2.5rem",
                  lg: "1.2rem",
                  md: "1.1rem",
                  sm: "1rem",
                  xs: "0.9rem",
                },
              }}
            >
              Ace’s Barbershop is a family owned and operating barber shop
              serving Yolo county and surrounding areas. We offer a complete
              haircut service that includes premium haircuts, line ups, fades,
              bread trims, and facial services. With over 25+ years of
              experience, our services are best for everyone including children,
              teens, adults, and seniors! Our goal is to continue providing for
              our loyal customers in Yolo county while also building
              relationships with new customers. Interested to learn more? Please
              take a look at our website for information regarding our store
              information, our barbers, and prices for our services. Want to
              schedule an appointment with us? Please sign up to create an
              account to schedule your appointment with us! We look forward to
              seeing you soon.
            </m.Typography>
          </m.Card>
        </m.Box>
      </m.ListItem>
    </m.List>
  );

  return (
    <div id="base-page">
      <img style={styles.background} id="base-page"></img>
      <m.Box>{list()}</m.Box>
    </div>
  );
}

export default Home;

//center text and pop border in about us
//book appointment - change bg to make navbar visible
