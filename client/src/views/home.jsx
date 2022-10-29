import React from "react";
import { useRef } from "react";
import * as m from "@mui/material";
import * as i from "@mui/icons-material";
//import "../asset/css/style.css";
import { useNavigate } from "react-router-dom";
import Background from "../asset/images/BarbershopBackground.png";
import servicesbg from "../asset/images/servicesbackground.jpg";
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
      justifyContent: "flex-start",
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
      color: "white",
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
          WebkitFilter: "blur(10px)",
          display: "flex",
          width: "95%",
          height: "95%",
        }}
      ></m.Box>
    );
  };

  const list = () => (
    <m.List>
      <m.ListItem id="home" style={styles.listItem} className="listItem">
        <m.Box style={styles.listItemBox} className="listItemBox">
          <m.Typography
            style={styles.typography}
            variant="h2"
            className="Typography"
          >
            Welcome to Ace's Barbershop
          </m.Typography>
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
                width: "100%",
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
                      align="left"
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
                      Service
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
                        "&:last-child td, &:last-child th": { border: 5 },
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
          <m.Grid
            container
            margin="auto"
            className="gridLayoutBarber"
            direction={{ xl: "row", xs: "column" }}
            justifyContent={{ xl: "center", xs: "flex-start" }}
            alignItems={{ xl: "center", xs: "flex-start" }}
            sx={{
              height: { xl: "100% ", xs: "100%", lg: "100%" },
              width: { xl: "100%", xs: "33%", lg: "100%" },
              display: { xl: "flex", xs: "flex" },
              marginLeft: { xl: "1px", xs: "0px" },
            }}
          >
            <m.Grid
              item
              xs={12}
              xl={3}
              margin="auto"
              sx={{
                height: { xl: "100%" },
                width: { xl: "100%" },
                justifyContent: { xl: "flex-start", xs: "flex-start" },
                display: { xl: "flex", xs: "flex" },
              }}
            >
              <m.Card
                sx={{
                  background:
                    "linear-gradient(90deg, #FE8D52 30%, #FE8D8C 90%)",
                  maxHeight: { xl: "100%" },
                  maxWidth: { xl: "100%", xs: "100%" },
                  height: { xl: "auto", xs: "auto" },
                  width: { xl: "auto", xs: "auto" },
                  boxShadow: { xl: "0 0 20px 0 rgba(0, 0, 0, 1.9)" },
                }}
              >
                <m.CardHeader title="Marco" component="h2" />
                <m.CardMedia
                  component="img"
                  height={{ xl: "300px", xs: "10px" }}
                  width={{ xl: "300px", xs: "10px" }}
                  image={marco}
                  alt="Barber-Marco"
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
                  orientation={{ xl: "vertical", xs: "horizontal" }}
                >
                  <m.CardContent>
                    <m.Typography paragraph color={"white"}>
                      Better known in the community as Li$to, is the owner of
                      Ace’s Barbershop alongside Elena. Marco is an expert in
                      modern contemporary haircuts and beard fades. For custom
                      haircuts, please contact via phone or instagram.
                    </m.Typography>
                  </m.CardContent>
                  <m.Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexDirection: "row",
                      margin: "auto",
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
                          fontSize: "50px",
                          margin: "auto",
                          width: "50px",
                          height: "50px",
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
                          fontSize: "50px",
                          margin: "auto",
                          width: "50px",
                          height: "50px",
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
                          fontSize: "50px",
                          margin: "auto",
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </m.IconButton>
                  </m.Box>
                </m.Collapse>
              </m.Card>
            </m.Grid>
            <m.Grid
              item
              xs={12}
              xl={3}
              margin="auto"
              sx={{
                height: { xl: "100%" },
                width: { xl: "100%" },
                justifyContent: { xl: "flex-start", xs: "center" },
                display: "flex",
              }}
            >
              <m.Card
                sx={{
                  background:
                    "linear-gradient(90deg, #FE8D52 30%, #FE8D8C 90%)",
                  height: { xl: "auto", xs: "auto" },
                  width: { xl: "auto", xs: "auto" },
                  boxShadow: { xl: "0 0 20px 0 rgba(0, 0, 0, 1.9)" },
                }}
              >
                <m.CardHeader title="Elena" />
                <m.CardMedia
                  component="img"
                  height={{ xl: "300px", xs: "10px" }}
                  width={{ xl: "300px", xs: "10px" }}
                  image={barber2}
                  alt="Barber-Elena"
                />
                <m.CardActions disableSpacing>
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
                    <m.Typography paragraph>
                      Better known in the community as Shorty, is the owner of
                      Ace’s Barbershop alongside Marco. With over twenty years
                      of experience, Elena is excellent with customers that
                      range from children to adults. For custom haircuts, please
                      contact via phone or instagram.
                    </m.Typography>
                  </m.CardContent>
                  <m.Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexDirection: "row",
                      margin: "auto",
                      width: "50%",
                      height: "100px",
                    }}
                  >
                    <m.IconButton
                      aria-label="instagram"
                      href="https://www.instagram.com/
@misshortyblendz"
                      target="_blank"
                      rel="noopener"
                    >
                      <InstagramIcon
                        sx={{
                          color: "white",
                          fontSize: "50px",
                          margin: "auto",
                          width: "50px",
                          height: "50px",
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
                          fontSize: "50px",
                          margin: "auto",
                          width: "50px",
                          height: "50px",
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
                          fontSize: "50px",
                          margin: "auto",
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </m.IconButton>
                  </m.Box>
                </m.Collapse>
              </m.Card>
            </m.Grid>
            <m.Grid
              item
              xs={12}
              xl={3}
              margin="auto"
              sx={{
                height: { xl: "100%" },
                width: { xl: "100%" },
                justifyContent: { xl: "flex-start", xs: "flex-start" },
                display: "flex",
              }}
            >
              <m.Card
                sx={{
                  background:
                    "linear-gradient(90deg, #FE8D52 30%, #FE8D8C 90%)",
                  maxHeight: { xl: "100%" },
                  maxWidth: { xl: "100%", xs: "100%" },
                  height: { xl: "auto", xs: "auto" },
                  width: { xl: "auto", xs: "auto" },
                  boxShadow: { xl: "0 0 20px 0 rgba(0, 0, 0, 1.9)" },
                }}
              >
                <m.CardHeader title="Jimmy" />
                <m.CardMedia
                  component="img"
                  height={{ xl: "300px", xs: "100px" }}
                  width={{ xl: "300px", xs: "100px" }}
                  image={barber3}
                  alt="Barber-jimmy"
                />
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
                    <m.Typography paragraph>
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
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexDirection: "row",
                      margin: "auto",
                      width: "50%",
                      height: "100px",
                    }}
                  >
                    <m.IconButton
                      aria-label="instagram"
                      href="https://www.instagram.com/
@jgonzo-916"
                      target="_blank"
                      rel="noopener"
                    >
                      <InstagramIcon
                        sx={{
                          color: "white",
                          fontSize: "50px",
                          margin: "auto",
                          width: "50px",
                          height: "50px",
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
                          fontSize: "50px",
                          margin: "auto",
                          width: "50px",
                          height: "50px",
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
                          fontSize: "50px",
                          margin: "auto",
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </m.IconButton>
                  </m.Box>
                </m.Collapse>
              </m.Card>
            </m.Grid>
          </m.Grid>
        </m.Box>
      </m.ListItem>
      <m.ListItem ref={ref} id="contact-information" style={styles.listItem}>
        <m.Box style={styles.listItemBox}>{contactInfo()}</m.Box>
      </m.ListItem>
      <m.ListItem id="about-us" style={styles.listItem}>
        <m.Box style={styles.listItemBox}>About Us</m.Box>
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
