//---------- GLOBAL VARIABLES ----------//
let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let morgan = require('morgan');
let User = require('./models/user');
let app = express();

//---------- SERVER ----------//
app.set('port', 9000);
app.use(express.static('public'));

// Start the express server
app.listen(app.get('port'), () => console.log(`Foodlette started on port ${app.get('port')}`));

// Set morgan to log info for our requests to use in development
app.use(morgan('dev'));

// Initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// Initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'user_sid',
  secret: 'donesomething',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

//---------- Middleware ----------//
// This middleware will check if user's cookie are still saved in their browser and user is not set, then if needed automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

// Middleware function to check for logged-in users
let sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect('/myWheels');
  } else {
    next();
  }
};

//---------- Routes & Gets ----------//
// Route for Home-Page
app.get('/', sessionChecker, (req, res) => {
  res.redirect('/home');
});

app.get('/home', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Routes for accessing the myWheels Page
app.get('/myWheels', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.sendFile(__dirname + '/public/myWheels.html');
  } else {
    res.redirect('/login');
  }
});

app.get('/favourites', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.sendFile(__dirname + '/public/myWheels.html');
  } else {
    res.redirect('/login');
  }
});

app.get('/profile', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.sendFile(__dirname + '/public/myWheels.html');
  } else {
    res.redirect('/login');
  }
});

// Route for user logout
app.get('/logout', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie('user_sid');
    res.redirect('/');
  } else {
    res.redirect('/home');
  }
});

// Route for user signup
app.route('/signup').get(sessionChecker, (req, res) => {
  res.sendFile(__dirname + '/public/signup.html');
})
.post((req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  .then(user => {
    req.session.user = user.dataValues;
    res.redirect('/myWheels');
  })
  .catch(error => {
    res.redirect('/signup');
  });
});

// Route for user Login
app.route('/login').get(sessionChecker, (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
})
.post((req, res) => {
  var username = req.body.username,
  password = req.body.password;

  User.findOne({ where: { username: username } }).then(function (user) {
    if (!user) {
      res.redirect('/login');
    } else if (!user.validPassword(password)) {
      res.redirect('/login');
    } else {
      req.session.user = user.dataValues;
      res.redirect('/myWheels');
    }
  });
});

// Gets for pages that do not require user to be logged in
app.get('/categories', function(req, res) {
  res.sendFile(__dirname + '/public/categories.html');
});

app.get('/comfort', function(req, res) {
  res.sendFile(__dirname + '/public/preset-wheels/comfortWheel.html');
});

app.get('/mood', function(req, res) {
  res.sendFile(__dirname + '/public/preset-wheels/moodWheel.html');
});

app.get('/spicy', function(req, res) {
  res.sendFile(__dirname + '/public/preset-wheels/spicyWheel.html');
});

app.get('/sweet', function(req, res) {
  res.sendFile(__dirname + '/public/preset-wheels/sweetWheel.html');
});

app.get('/lifestyle', function(req, res) {
  res.sendFile(__dirname + '/public/preset-wheels/lifestyleWheel.html');
});

app.get('/pleasure', function(req, res) {
  res.sendFile(__dirname + '/public/preset-wheels/pleasureWheel.html');
});

app.get('/meat', function(req, res) {
  res.sendFile(__dirname + '/public/preset-wheels/meatWheel.html');
});

app.get('/deal', function(req, res) {
  res.sendFile(__dirname + '/public/preset-wheels/dealWheel.html');
});

app.get('/country', function(req, res) {
  res.sendFile(__dirname + '/public/preset-wheels/countryWheel.html');
});

//---------- Error Handling ----------//
// Route for handling 404 requests
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});
