const userData = {
  firstname: "John",
  lastname: "Doe",
  phone: "555-555-5555",
};

var realDate = new Date().toLocaleDateString();
var realTime = new Date().toLocaleTimeString();

let message = `Hello ${userData.firstname} ${userData.lastname},\nThank you for scheduling an appointment with us at Ace’s Barbershop. Your appointment is scheduled for ${realDate} at ${realTime}.\n\n We are located at 1049 Jefferson Blvd West Sacramento, CA 95691. For any questions please contact us at (916) 956-0670. We look forward to seeing you!`;

console.log(message);
