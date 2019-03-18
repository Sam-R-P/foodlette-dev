'use strict';

//---------- GLOBAL VARIABLES ----------//
const express = require('express');
const app = express();
const path = require('path');

//---------- SERVER ----------//
app.use(express.static('public'));

app.listen(8080, function (req, res) {
  console.log('Foodlette listening on port 8080');
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/categories', function(req, res) {
  res.sendFile(path.join(__dirname, '/categories.html'));
});

app.get('/mywheels', function(req, res) {
  res.sendFile(path.join(__dirname, '/mywheels.html'));
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
