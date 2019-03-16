'use strict';

//---------- GLOBAL VARIABLES ----------//
const express = require('express');
const app = express();

//---------- SERVER ----------//
app.get('/', (req, res, next) => {
  next();
});

app.use(express.static(''));

app.listen(8080, function (req, res) {
  console.log('Foodlette listening on port 8080');
});

//---------- SERVER FUNCTIONS ----------//
SubmitCreateAccount(email_1, email_2, password_1, password_2) {
  //verify()? they arent empty? not all browsers check for empty inputs.

  if (crossCheck(email_1, email_2) === false) {
    sendMessage("Error", "Create an Account", "Your emails do not match, please try again.");
  } else if (crossCheck(password_1, password_2) === false) {
    sendMessage("Error", "Create an Account", "Your passwords do not match, please try again.");
  } else if ("Then check DB for matching email") {
    sendMessage("Error", "Create an Account", "Your email is already in use.");
  } else {
    //Otherwise create Account in DB and send succes message
  }
}

//---------- SERVER UTILITIES ----------//
sendMessage(title, about, message) {
}

crossCheck() {
}




//Needs to go client side
createAccount() {
}

login() {
}

createWheelTwo() {
}

createWheelTen() {
}

WheelFav() {
}
//
