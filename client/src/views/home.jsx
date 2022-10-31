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
const ExpandMore = m.styled((props) => {
  const { expand, ...other } = props;
  return <m.IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
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

  var red = "AA3832";
  var lightRed = "C43832";
  var blue = "293678";
  var lightBlue = "295DA5";
  var white = "FBF9FB";

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
      height: "100vh",
      width: "100vw",
      top: "0",
      marginBottom: "0",
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
          alignItems: { xl: "center", xs: "center" },
          justifyContent: { xl: "center", xs: "center" },
          display: { xl: "flex", xs: "grid" },
          gridArea: "1/1",
          gridAutoFlow: "Row",
          gridTemplateColumns: "1fr",
          border: "1px solid black",
          width: "98%",
          height: "98%",
        }}
      >
        <m.Card
          sx={{
            background: "transparent",
            backdropFilter: "blur(50px)",
            height: { xl: "70%", xs: "50%" },
            width: { xl: "20%", xs: "100%" },
            justifyContent: { xl: "center", xs: "center" },
            alignItems: { xl: "center", xs: "center" },
            margin: { xl: "auto", xs: "auto" },
            marginBottom: { xs: "120%" },
          }}
        >
          <m.CardHeader
            title="Hours"
            justifyContent="center"
            alignItems="center"
            sx={{ fontSize: { xl: "2rem", xs: "1rem" } }}
          />
          <m.Typography
            sx={{
              padding: { xl: "20px" },
              justifyContent: "center",
              color: "white",
              alignItems: "center",
              margin: "auto",
              fontSize: {
                xl: "1.5rem",
                lg: "1.2rem",
                md: "1.1rem",
                sm: "1rem",
                xs: "0.9rem",
              },
            }}
          >
            Monday-Friday: 10:00am-6:00pm
          </m.Typography>
          <m.Typography
            sx={{
              padding: { xl: "20px" },
              justifyContent: "center",
              color: "white",
              alignItems: "center",
              margin: "auto",
              fontSize: {
                xl: "1.5rem",
                lg: "1.2rem",
                md: "1.1rem",
                sm: "1rem",
                xs: "0.9rem",
              },
            }}
          >
            Saturday: 9:00am-4:00pm
          </m.Typography>
          <m.Typography
            sx={{
              padding: { xl: "20px" },
              justifyContent: "center",
              color: "white",
              alignItems: "center",
              margin: "auto",
              fontSize: {
                xl: "1.5rem",
                lg: "1.2rem",
                md: "1.1rem",
                sm: "1rem",
                xs: "0.9rem",
              },
            }}
          >
            Sunday: Closed
          </m.Typography>
        </m.Card>
        <m.Card
          sx={{
            background: "transparent",
            backdropFilter: "blur(50px)",
            height: { xl: "50%", xs: "70%" },
            width: { xl: "20%", xs: "100vw" },
            border: "2px solid white",
          }}
        ></m.Card>
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
          <m.Typography style={styles.typography} variant="h3">
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
          <m.Card
            sx={{
              margin: "auto",
              marginTop: "0px",
              background: "linear-gradient(90deg, #AA3832 30%, #D05432 90%)",
              maxWidth: { xl: 500, xs: 150 },
              boxShadow:
                "10px 0px 10px 0px #D05432, 0 10px 10px 0px #AA3832, -10px 1px 10px 0px #D05432",
            }}
          >
            <m.CardHeader title="Marco" />
            <m.CardMedia component="img" image={marco} alt="Barber-Marco" />
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
              orientation={{ xl: "vertical", xs: "horizontal" }}
            >
              <m.CardContent>
                <m.Typography
                  paragraph
                  sx={{
                    fontSize: {
                      xl: "1.5rem",
                      lg: "1.2rem",
                      md: "1.1rem",
                      sm: "1rem",
                      xs: "0.7rem",
                    },
                  }}
                >
                  Better known in the community as Li$to, is the owner of Ace’s
                  Barbershop alongside Elena. Marco is an expert in modern
                  contemporary haircuts and beard fades. For custom haircuts,
                  please contact via phone or instagram.
                </m.Typography>
              </m.CardContent>
              <m.Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                  margin: "auto",
                  marginLeft: { xs: "0px" },
                  width: "50%",
                  height: "100px",
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
                    }}
                  />
                </m.IconButton>
              </m.Box>
            </m.Collapse>
          </m.Card>
          <m.Card
            sx={{
              margin: "auto",
              marginTop: { xl: "0px" },
              background: "linear-gradient(90deg, #D05432 30%, #1E70A5 90%)",
              maxWidth: { xl: 500, xs: 150 },
              boxShadow:
                "10px -10px 10px 0px #1E70A5, 0 10px 10px 0px #AA3832, -10px 1px 10px 0px #D05432",
            }}
          >
            <m.CardHeader title="Jimmy" />
            <m.CardMedia component="img" image={barber3} alt="Barber-jimmy" />
            <m.CardActions disableSpacing>
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
              orientation={{ xl: "vertical", xs: "horizontal" }}
            >
              <m.CardContent>
                <m.Typography
                  paragraph
                  sx={{
                    fontSize: {
                      xl: "1.5rem",
                      lg: "1.2rem",
                      md: "1.1rem",
                      sm: "1rem",
                      xs: "0.7rem",
                    },
                  }}
                >
                  A long time employee of Ace’s Barbershop, Jimmy is well known
                  by customers for his artistic styles in haircuts. Jimmy shows
                  off his expertise in fades, hair designs, and beard trimming.
                  For custom haircuts, please contact via phone or instagram.
                </m.Typography>
              </m.CardContent>
              <m.Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                  margin: "auto",
                  marginLeft: { xs: "0px" },
                  width: "50%",
                  height: "100px",
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
              background: "linear-gradient(90deg, #1E70A5 30%, #FBF9FB 90%)",
              maxWidth: { xl: 500, xs: 150 },
              margin: "auto",
              marginTop: "0px",
              boxShadow:
                "10px -10px 10px 0px #FBF9FB, 0 10px 10px 0px #AA3832, -10px 1px 10px 0px #1E70A5",
            }}
          >
            <m.CardHeader title="Elena" />
            <m.CardMedia component="img" image={barber2} alt="Barber-Elena" />
            <m.CardActions>
              <ExpandMore
                expand={expandedBarber2}
                onClick={handleBarber2}
                aria-expanded={expandedBarber2}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </m.CardActions>
            <m.Collapse
              in={expandedBarber2}
              timeout="auto"
              unmountOnExit
              orientation={{ xl: "vertical", xs: "horizontal" }}
            >
              <m.CardContent>
                <m.Typography
                  paragraph
                  sx={{
                    fontSize: {
                      xl: "1.5rem",
                      lg: "1.2rem",
                      md: "1.1rem",
                      sm: "1rem",
                      xs: "0.7rem",
                    },
                  }}
                >
                  Better known in the community as Shorty, is the owner of Ace’s
                  Barbershop alongside Marco. With over twenty years of
                  experience, Elena is excellent with customers that range from
                  children to adults. For custom haircuts, please contact via
                  phone or instagram.
                </m.Typography>
              </m.CardContent>
              <m.Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                  margin: "auto",
                  marginLeft: { xs: "0px" },
                  width: "50%",
                  height: "100px",
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
      </m.ListItem>
      <m.ListItem ref={ref} id="contact-information" style={styles.listItem}>
        <m.Box style={styles.listItemBox}>{contactInfo()}</m.Box>
      </m.ListItem>
      <m.ListItem id="about-us" style={styles.listItem}>
        <m.Box style={styles.listItemBox}>
          <m.Card
            sx={{
              background: "linear-gradient(90deg, #AA3832 30%, #295DA5 90%)",
              height: { xl: "50%" },
              width: "70%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <m.CardHeader
              title="About Us"
              justifyContent="center"
              alignItems="center"
              sx={{ fontSize: { xl: "2rem", xs: "1rem" } }}
            />
            <m.Typography
              sx={{
                padding: "20px",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                fontSize: {
                  xl: "1.5rem",
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