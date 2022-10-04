import React from "react";
import Home from "../views/Home";
import About from "../views/about"
import Appointment from "../views/Appointment";
import Services from "../views/Services";
import SignIn from "../views/SignIn";
import Barber from "../views/Barber";
import MyProfile from "../views/MyProfile";
export default function Section({ title, subtitle, dark, id, props }) {
  if(props === "Home"){
    return(
      <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <Home/>
    </div>
    );
  }
  if(props === "About"){
    return(
      <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <About/>
    </div>
    );
  }
  if(props === "Appointment"){
    return(
      <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <Appointment/>
    </div>
    );
  }
  if(props === "Services"){
    return(
      <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <Services/>
    </div>
    );
  }
  if(props === "Barber"){
    return(
      <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <Barber/>
    </div>
    );
  }
  if(props === "MyProfile"){
    return(
      <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <MyProfile/>
    </div>
    );
  }
  if(props === "SignIn"){
    return(
      <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <SignIn/>
    </div>
    );
  }
}