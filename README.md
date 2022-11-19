<p align="center">
  <img src="/Assets/images/WhiteBackgroundLogo.png" />
</p>

---

---

CSC-190/191 Project

- [Team Members](#team-members)
- [Background](#background)
- [Solution](#solution)
- [Prototype](#prototype)
- [Timeline](#timeline)
- [Developer Instructions](#developer-instructions)
  - [**Terminal**](#terminal)
  - [**Command Prompt**](#command-prompt)
  - [**Run Server**](#run-server)
    - [To run using Nodemon and have Developer control run](#to-run-using-nodemon-and-have-developer-control-run)
    - [To launch the app run](#to-launch-the-app-run)

## Team Members

---

- [@Thomas Nguyen](https://github.com/NguyenSt3r)
- [@Valentin Bakalor](https://github.com/Val2049)
- [@Faizan Ul Islam](https://github.com/FizzyPop007)
- [@Kenny Nguyen](https://github.com/Kennypnguyen)
- [@Alex Smith](https://github.com/arsmith97)
- [@Theo McDonald](https://github.com/TheoMcDonald)
- [@Bunpheng Chhay](https://github.com/Bunphengchhay)
- [@Vibhore Sagar](https://github.com/Vib1240n)

## Background

---

Ace’s Barbershop – Fairly new barbershop in West Sacramento, Now that they have developed their clients relations they want to take their barbershop into new direction. They are finally going online for bookings, pricings and services available.

## Solution

---

Creating a website with all the barbers listed with their schedules and specialities. Customers get to see the recent haircuts from the barbers and be able to make appointments right from the website instead of calling the shop to verify.

## Prototype

---

<p align="center">
<img src="https://raw.githubusercontent.com/Vib1240n/A-Cup-Of-Java/679be5bf5e9b81798a197d8d811308971d246954/Assets/images/PrototypeGif.gif" />
</p>

<h4>FIGMA PROTOTYPE</h4>
<hr>
<br>
As part of our designing phase, we developed a figma clickable prototype that showcases all the views of Ace’s Barbershop website. When designing our prototype, we wanted to make sure we included all the features the client requested. To achieve this, we developed each feature as a view for the website. For example, we created an appointments view that will allow customers with an account to schedule an appointment which is one the features the client wishes to have. Another feature that was incorporated into a view of the website was the sign in feature. We created a view that would allow customers to sign in to their account so that they can schedule their appointment. They are also giving the option to sign up if they are new. To implement all these views together, we incorporated a navigation bar on the top of the website that links all the views of the website. Within our prototype, we were able to make the navigation bar clickable so that our client will be able to see all the views and experience the flow of the website. The goal of this prototype was to present an idea of the website to our client and then receive feedback on things they liked and disliked.

## Timeline

---

<p align="center">
<img src="https://raw.githubusercontent.com/Vib1240n/A-Cup-Of-Java/8538fde5ca9a74c3b2e5aea240dd365454112c43/Assets/images/COJ%20Timeline.png" />
</p>

## Developer Instructions

<hr>
<br>
Clone the repository to run the project locally using

    git clone git@github.com:Vib1240n/A-Cup-Of-Java.git

After Cloning the repository, make sure you have Node installed, to check for Node

### **Terminal**

    Node --v
    npm --v

### **Command Prompt**

    Node -v

After making sure you are up and running the latest version of Node, Open up the Project in the IDE/Code editor of choice to install dependancies. To install Dependancies run
` npm install` from the Terminal/Command prompt.<br> Make sure you are installing dependancies in the Project directory and not globally.
<br>
<br>

### **Run Server**

After installing dependancies run<br>

#### To run using Nodemon and have Developer control run

```
npm run devStart
```

#### To launch the app run

```
node server.js
```

As of right now the server will run the website on

> http://acesbarber.shop
