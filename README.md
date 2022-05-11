<p align="center">
  <img src="/Assets/images/WhiteBackgroundLogo.png" />
</p>
<p align="center">
<img src="/Assets/images/TransparentLogo.png" />
</p>

# A-Cup-Of-Java

CSC-190/191 Project

- [A-Cup-Of-Java](#a-cup-of-java)
  - [Team Members](#team-members)
  - [Background](#background)
  - [Solution](#solution)
  - [Prototype](#prototype)
  - [Timeline](#timeline)
  - [Developer Instructions](#developer-instructions)
    - [Terminal](#terminal)
    - [**Command Prompt**](#command-prompt)
    - [**Run Server**](#run-server)
      - [To run using Nodemon and have Developer control run](#to-run-using-nodemon-and-have-developer-control-run)
      - [To launch the app run](#to-launch-the-app-run)

## Team Members

- [@Thomas Nguyen](https://github.com/NguyenSt3r)
- [@Valentin Bakalor](https://github.com/Val2049)
- [@Faizan Ul Islam](https://github.com/FizzyPop007)
- [@Kenny Nguyen](https://github.com/Kennypnguyen)
- [@Alex Smith](https://github.com/arsmith97)
- [@Theo McDonald](https://github.com/TheoMcDonald)
- [@Bunpheng Chhay](https://github.com/Bunphengchhay)
- [@Vibhore Sagar](https://github.com/Vib1240n)

## Background

Ace’s Barbershop – Fairly new barbershop in West Sacramento, Now that they have developed their clients relations they want to take their barbershop into new direction. They are finally going online for bookings, pricings and services available.

## Solution

Creating a website with all the barbers listed with their schedules and specialities. Customers get to see the recent haircuts from the barbers and be able to make appointments right from the website instead of calling the shop to verify.

## Prototype

<p float="left">
  <img src="/Assets/images/FIGMA\ Prototype\ Main\ View.png" width="450" height="400" />
  <img src="/Assets/images/FIGMA Prototype Appointments View.png" width="450" height="400"/> 
  <img src="/Assets/images/FIGMA Protoype Sign in View.png" width="450" height="400"/>
</p>

FIGMA PROTOTYPE

As part of our designing phase, we developed a figma clickable prototype that showcases all the views of Ace’s Barbershop website. When designing our prototype, we wanted to make sure we included all the features the client requested. To achieve this, we developed each feature as a view for the website. For example, we created an appointments view that will allow customers with an account to schedule an appointment which is one the features the client wishes to have. Another feature that was incorporated into a view of the website was the sign in feature. We created a view that would allow customers to sign in to their account so that they can schedule their appointment. They are also giving the option to sign up if they are new. To implement all these views together, we incorporated a navigation bar on the top of the website that links all the views of the website. Within our prototype, we were able to make the navigation bar clickable so that our client will be able to see all the views and experience the flow of the website. The goal of this prototype was to present an idea of the website to our client and then receive feedback on things they liked and disliked.

## Timeline

PROJECT CHARTER/PROPOSAL

February 07 2022, AJC Sprint 00

Our team created the draft of our Project Proposal and our Project Charter Document.

USER STORIES CREATION

February 28 2022, AJC Sprint 01

We planned out a general layout of future sprints for how we would begin working on our website and the order of implementing the user stories we created, as well as finalizing our Project Charter Document and getting it signed by our client.

PROTOTYPE/FIRST CODING SPRINT

March 14 2022, AJC Sprint 02

Our team created a low-fidelity prototype of our website using Figma and the website’s home and login views.

WEBSITE VIEWS CREATION

April 04 2022, AJC Sprint 03

We created our signup, barber, appointment, about us, services views, finished the work on our login view, and began setting up our database.

PRESENTATION

April 18 2022, AJC Sprint 04

Presented our progress on our project, our thought process on how and why we developed the website the way we did, and our plans for future sprints. We also ironed out some issues with our login and about us views, updated our services and barber views, continued setting up our database, created the edit/view profile view, and linked all of our views together.

BACKEND DEVELOPMENT

September 05, 2022, AJC Sprint 05

In our first sprint back from summer break will be mainly focused on our backend of the website, which consists of implementing the models of our database, creating the hashing algorithm for our login email addresses and passwords, and restructuring our file structure. We will also implement social media links to our barber's profile view.

VIEW POLISHING

September 19, 2022, AJC Sprint 06

We will polish the views of our website to make the overall presentation of the website to be smoother.

GOOGLE CALENDER & MAPS API IMPLEMENTATION

October 03, 2022, AJC Sprint 07

We will implement the Google Calendar API for our about us view so it directs the user to the location of Ace's Barbershop and the Google Maps API into our appointment view to provide an user friendly scheduling service to our users.

ADMIN PROFILE

October 17, 2022, AJC Sprint 08

We will add admin functionality to the website, allowing the admin to modifyand update various features of the website.

DEPLOYMENT

October 31, 2022, AJC Sprint 09

We will deploy our website onto our server and ensure that it functioning properly.

TESTING PHASE

November 14, 2022, AJC Sprint 10

We will be constructing various tests on our views as users to locate and fix any errors to guarantee the safety of our user's information and integrity of our website.

## Developer Instructions

Clone the repository to run the project locally using

    git clone git@github.com:Vib1240n/A-Cup-Of-Java.git

After Cloning the repository, make sure you have Node installed, to check for Node

### Terminal

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

> http://localhost:5500


