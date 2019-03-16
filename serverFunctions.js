'use strict';

//---------- GLOBAL VARIABLES ----------//
const express = require('express');
const app = express();

//---------- SERVER ----------//
app.get('/', (req, res, next) => {
  next();
});

app.use(express.static('public'));

app.listen(8080, function (req, res) {
  console.log('Foodlette listening on port 8080');
});

//---------- SERVER FUNCTIONS ----------//
createAccount() {
}

login() {
}

createTwoWheel() {
}

createTenWheel() {
}

favouriteWheel() {
}

validate() {
}

passwordValidate() {
}

crossCheck() {
}

SubmitCreateAccount() {
  validate()
  crossCheck()
  crossCheck()
}

sendError() {
}
