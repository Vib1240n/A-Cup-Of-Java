<p align="center">
  <img src="client/src/asset/images/AcesBarbershopLogo-removebg-preview.png" />
</p>

<p align="center">
<strong>Ace's Barbershop Website by Team A Cup of Java</strong>
</p>

## Table of Contents

---

- [Table of Contents](#table-of-contents)
- [Team Members](#team-members)
- [Background](#background)
- [Solution](#solution)
- [Prototype](#prototype)
- [Timeline](#timeline)
- [Website Demo](#website-demo)
- [Testing](#testing)
  - [Functional Test: Automation via Selenium:](#functional-test-automation-via-selenium)
  - [Functional Test: User Interaction](#functional-test-user-interaction)
    - [Functional Test: User Interaction Tools](#functional-test-user-interaction-tools)
    - [Functional Test: User Interaction Setup](#functional-test-user-interaction-setup)
  - [Unit Test: API Testing](#unit-test-api-testing)
    - [Unit Test: API Testing Tools](#unit-test-api-testing-tools)
    - [Unit Test: API Testing Setup](#unit-test-api-testing-setup)
- [Run and Deploy](#run-and-deploy)
  - [Run](#run)
    - [Run the Website Locally Steps](#run-the-website-locally-steps)
  - [Deploy](#deploy)
    - [Deployment of Website Tools](#deployment-of-website-tools)
    - [Deployment of Website Steps:](#deployment-of-website-steps)

## Team Members

---

<p align="center">
  <img src="client/src/asset/images/A Cup of Java Team Logo.png" />
</p>

- [@Valentin Bakalor](https://github.com/Val2049)
  - **Email:** ValBakalor@gmail.com
- [@Bunpheng Chhay](https://github.com/Bunphengchhay)
  - **Email:** bunphengchhay@gmail.com
- [@Faizan Ul Islam](https://github.com/FizzyPop007)
  - **Email:** faizan.khan.gr8@gmail.com
- [@Theo McDonald](https://github.com/TheoMcDonald)
  - **Email:** mcdonaldtheo7@gmail.com
- [@Kenny Nguyen](https://github.com/Kennypnguyen)
  - **Email:** kennyypnguyen@gmail.com
- [@Thomas Nguyen](https://github.com/NguyenSt3r)
  - **Email:** ThomasDuyNguyenViet@gmail.com
- [@Vibhore Sagar](https://github.com/Vib1240n)
  - **Email:** vibhorsgr@gmail.com
- [@Alex Smith](https://github.com/arsmith97)
  - **Email:** alex@s3v.us

## Background

---

Ace’s Barbershop – Fairly new barbershop in West Sacramento, Now that they have developed their clients relations they want to take their barbershop into a new direction. They are finally going online for bookings, pricings and services available.

## Solution

---

Creating a website with all the barbers listed with their schedules and specialities. Customers get to see the recent haircuts from the barbers and be able to make appointments right from the website instead of calling the shop to verify.

## Prototype

---

<p align="center">
<img src="https://raw.githubusercontent.com/Vib1240n/A-Cup-Of-Java/679be5bf5e9b81798a197d8d811308971d246954/Assets/images/PrototypeGif.gif" />
</p>

<br>
As part of our designing phase, we developed a figma clickable prototype that showcases all the views of Ace’s Barbershop website. When designing our prototype, we wanted to make sure we included all the features the client requested. To achieve this, we developed each feature as a view for the website. For example, we created an appointments view that will allow customers with an account to schedule an appointment which is one the features the client wishes to have. Another feature that was incorporated into a view of the website was the sign in feature. We created a view that would allow customers to sign in to their account so that they can schedule their appointment. They are also giving the option to sign up if they are new. To implement all these views together, we incorporated a navigation bar on the top of the website that links all the views of the website. Within our prototype, we were able to make the navigation bar clickable so that our client will be able to see all the views and experience the flow of the website. The goal of this prototype was to present an idea of the website to our client and then receive feedback on things they liked and disliked.

## Timeline

---

<p align="center">
<img src="client/src/asset/images/A Cup of Java Timeline.png" />
</p>

## Website Demo

---

<p align="center">
<img src="client/src/asset/images/Aces Barbershop Website Walkthrough.gif" />
</p>                                                             
                                                             
<br>
This section will provide GIF that showcases a walkthrough of the deployed Ace's Barbershop Website.

## Testing

---

<br>
This section will provide a description of all the tests that were performed for Ace's Barbershop Website.

### Functional Test: Automation via Selenium:

<br>
One of the tests we used for Ace’s Barbershop Website was functional tests using automation (Selenium). There are three test cases that include the Selenium automated software navigating through the website using Navbar, the Selenium automated software navigating through the website using Sidebar, and the Selenium automated software signing in using email and password provided by tester/user. If the user would like to learn how to perform these tests please follow this GitHub Repository Link (https://github.com/Ace-s-Barbershop/Ace-Barbershop-Website-Tests)

### Functional Test: User Interaction

<br>
The second test we used was  functional tests using User interaction. These include user signing up, signing in, requesting an appointment, viewing user profile information, viewing previous and upcoming requested appointments, and signing out. Not only are these tests ensuring that the user can interact with the features, but also that certain error messages are displayed in the front end whenever a user performs the feature incorrectly. To run these tests:

#### Functional Test: User Interaction Tools

- Windows Operating System (Windows 10 or above) or MacOS
- Any web browser is okay (Google Chrome was used to perform these tests in the System Test Report)
- Ace’s Barbershop Website Link: https://www.acesbarber.shop

#### Functional Test: User Interaction Setup

- To run these tests, you first need to run the Ace’s Barbershop Website. The link is provided in the tools above. Then just follow the steps provided in each of the test cases in the System Test Report Section 3.0 Functional Test: Tester Interaction.
- An example test case would be when the user is signing in with a valid email. Here the tester would navigate to Sign In View and sign in with a valid email and password (meaning that the email and password has been signed up in Ace’s Barbershop Website). The expected result of this test case should the user/tester being signed in and navigated to Profile View
- Another example test case would be if the user is signing in with a valid email but incorrect password. Here the tester would navigate to Sign In View and sign in with a valid email (email has been signed up in Ace’s Barbershop Website) but incorrect password (password not associated with the email). The expected result is that user/tester is not signed in but is greeted with a pop up message stating “Incorrect Password or Email”

### Unit Test: API Testing

<br>
The last set of tests we did for Ace’s Barbershop Website were unit testing specifically testing the APIs of the website. During the Sprints 05-07, before our team pushed any changes to our GitHub, we performed tests on our APIs to ensure that they worked properly by making sure it is either sending to the server or retrieving data from server. The team performed these tests using Postman. To perform these tests:

#### Unit Test: API Testing Tools

- Windows Operating System (Windows 10 or above) or MacOS
- Any web browser (Google Chrome was used to perform these tests in the System Test Report)
- Postman
  - Link: https://www.postman.com/
  - Login to Postman or create an account if you do not have one
- Ace’s Barbershop Website Link: https://www.acesbarber.shop

#### Unit Test: API Testing Setup

- To run these tests, you first need to run the Ace’s Barbershop Website. The link is provided in the tools above.
- After the website is running, navigate to the Postman browser (link in tools) and create an account.
- Once signed in, navigate to your workspace by clicking on workspaces on the top left. Then click on “My workspace”.
- Once at “My Workspace”, select your postman agent to “Desktop Agent” on the bottom right. The tester must download “Desktop Agent” to perform these tests.
- While still in “My workspace”, click on the new tab to begin a request. The requests will be either GET or POST. Then follow the steps to follow each test in the System Test Report section 4.0 Unit Test: API Testing.
- An example test case would be Sign In API where the steps are:
  - First selecting POST in the drop down menu.
  - Then the tester will provide **“https://www.acesbarber.shop/api/login”** in the request URL text field.
  - Next the tester will click on the “body” text option.
  - Then select on the “raw” option and select “JSON” for the language in the drop down menu.
  - Then type the following in the body:
    ```
    {
      “username” : “[valid email]”,
      “password” : “[valid password]”
    }
    ```
    **Note**: Valid email and password means it is already registered. Must include “” marks as listed in step 5.
  - Once the tester has followed the steps above. Click on the “Send” button to send the request.
  - The result will be provided in the response field at the bottom. The response will be a in a form of status code (Example: 200 series OK, 300 series REDIRECTION, 400 series BAD REQUEST, and 500 series INTERNAL SERVER ERROR)
    - For this test, the user/tester should expect a status code 200 OK code and should return a **“Login Successful”** in the response body.

## Run and Deploy

---

<br>
This section will inform the reader how to run the website locally and how the team deployed Ace's Barbershop Website.

### Run

<br>
This subsection will provide instructions on how to run the website locally. The steps to run the website locally are below.
<br>

#### Run the Website Locally Steps

1. Clone the repository to run the project locally using:
   > git clone git@github.com:Ace-s-Barbershop/A-Cup-Of-Java.git
2. After Cloning the repository, make sure you have Node installed, to check for Node in terminal/command prompt type:
   > node --v && npm --v
3. After making sure you are up and running the latest version of Node, Open up the Project in Visual Studio Code or any other IDE.
4. First navigate to app directory by typing in terminal:
   > cd app && npm install
5. Then navigate to client directory and install the dependencies by typing in terminal:
   > cd ../client && npm install
6. Now that the dependencies are installed, the user must now can run the server by first opening up two split terminals
7. In the first terminal navigate to app directory and run the server by typing in terminal:
   > cd ./app && npm run dev
8. In the second terminal, navigate to client directory by typing in terminal:
   > cd client
   > and then to run the client side of the website in localhost, type this in terminal:
   > npm run start
9. Once to two terminals are done setting up the website locally, it will launch the website on
   > http://localhost:3000
   > and the server will be running on
   > http://localhost:5500
10. The user can now interact with the website locally.

### Deploy

<br> This subsection will provide instructions on how the team deployed Ace's Barbershop Website. The team used AWS to deploy Ace's Barbershop Website. Frontend and backend calls are handled via Nginx. The database is handled via cloud using MongoDB Atlas. To deploy the website, the team followed these tools and steps:

#### Deployment of Website Tools

- Command Prompt/Terminal
- Private Key File
  - Note: Client was provided this filent
  - Note: Client can generate their own private key file by following the steps in the link below
    - Link: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html

#### Deployment of Website Steps:

1. First the user opens up Command Prompt/Terminal on local desktop
2. To launch SSH client, user types in terminal:
   > ssh -i alex-ace-key.pem ubuntu@ec2-3-226-119-86.compute-1.amazonaws.com
3. Locate the private key file (provided to client)
4. To ensure key is not publicly viewable, user types in terminal:
   > chmod 600 alex-ace-key.pem
5. To connect the instance to its public DNS, type in terminal:
   > ec2-3-226-119-86.compute-1.amazonaws.com
6. Now that user is connected to instance, user must get to website’s directory by typing in terminal:
   > cd /opt/A-Cup-Of-Java/
7. Finally to start the launch the website, type in terminal:
   > sudo ./start.sh

- Note: The website can take upto 24-48 hours to update on the AWS server.
- Note: Loading the entire website will take a couple of minutes
