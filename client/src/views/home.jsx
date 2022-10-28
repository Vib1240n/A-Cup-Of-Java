import React from "react";
import {useRef} from "react";
import * as m from "@mui/material";
//import "../asset/css/style.css";
import {useNavigate} from "react-router-dom";
import Background from "../asset/images/BarbershopBackground.png";
import servicesbg from "../asset/images/servicesbackground.jpg";
import wallBg from "../asset/images/wall-bg-up.jpg";

function Home() {
    const [open, setOpen] = React.useState(false);
    const ref = useRef(null);
    let navigate = useNavigate();

    const handleChange = () => {
        navigate("/appointment");
    };

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
            border: "1px solid white",
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
    };

    const contactInfo = () => {
        return (<m.Box
            sx={{
                backgroundImage: `url(${wallBg})`,
                backgroundPosition: "center",
                WebkitFilter: "blur(10px)",
                display: "flex",
                width: "95%",
                height: "95%",
            }}
        >

        </m.Box>);
    };

    const list = () => (
        <m.List>
            <m.ListItem id="home" style={styles.listItem} className="listItem">
                <m.Box style={styles.listItemBox} className="listItemBox">
                    <m.Typography style={styles.typography} variant="h2" className="Typography">
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
                    <m.Typography style={styles.typography} variant="h3">Services</m.Typography>
                    <m.Box
                        style={styles.servicesBackgroundbox}
                        className="servicesBackgroundbox"
                    >
                        <m.Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                height: "60%",
                                width: "50%",
                                margin: "auto",
                                border: "1px solid white",
                                backgroundColor: "rgba(255, 0, 0)",
                            }}
                        ></m.Box>
                    </m.Box>
                </m.Box>
            </m.ListItem>
            <m.ListItem ref={ref} id="barber-information" style={styles.listItem}>
                <m.Box style={styles.listItemBox}>Barbers</m.Box>
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
