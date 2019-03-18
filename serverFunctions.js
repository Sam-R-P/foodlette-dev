'use strict';

//---------- GLOBAL VARIABLES ----------//
const express = require('express');
const app = express();
const path = require('path');

//---------- SERVER ----------//
app.use(express.static('public'));

app.listen(8080, function(req, res) {
  console.log('Foodlette listening on port 8080');
});

//---------- SERVER GETS ----------//
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/categories', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'categories.html'));
});

app.get('/comfort', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'preset-wheels', 'comfortWheel.html'));
});

app.get('/mood', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'preset-wheels', 'moodWheel.html'));
});

app.get('/spicy', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'preset-wheels', 'spicyWheel.html'));
});

app.get('/sweet', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'preset-wheels', 'sweetWheel.html'));
});

app.get('/lifestyle', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'preset-wheels', 'lifestyleWheel.html'));
});

app.get('/pleasure', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'preset-wheels', 'pleasureWheel.html'));
});

app.get('/meat', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'preset-wheels', 'meatWheel.html'));
});

app.get('/deal', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'preset-wheels', 'dealWheel.html'));
});

app.get('/country', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'preset-wheels', 'countryWheel.html'));
});

app.get('/favourites', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'myWheels.html'));
});

app.get('/mywheels', function(req, res) {
  res.sendFile(path.join(__dirname, 'public' ,'myWheels.html'));
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
