import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import instagramIcon from "./asset/images/instagramIcon.png"
import facebookIcon from "./asset/images/facebookIcon.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <Navbar />
        </div>
      </header>
    </div>
  );
}

export default App;

/*
{/* <Section
          title="Home"
          subtitle={dummyText}
          dark={true}
          id="section1"
          props="Home"
        />
        <Section
          title="About Ace's"
          // subtitle={dummyText}
          dark={false}
          id="section2"
          props = "About"
        />
        <Section
          title="Appointment"
          subtitle={dummyText}
          dark={true}
          id="section3"
          props = "Appointment"
        />
        <Section
          title="Services"
          subtitle={dummyText}
          dark={false}
          id="section4"
          props = "Services"
        />
        <Section
          title="Barbers"
          subtitle={dummyText}
          dark={true}
          id="section5"
          props = "Barber"
        />
        <Section
          title="MyProfile"
          subtitle={dummyText}
          dark={false}
          id="section6"
          props = "MyProfile"
        /> }*/
