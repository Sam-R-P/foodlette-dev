let Sequelize = require('sequelize');
let bcrypt = require('bcrypt');

// Creating an instance of our local postgresql database and connecting to it
const sequelize = new Sequelize('foodlettedb', 'foodlette', '123', {
  host: 'localhost',
  dialect: 'postgres'
});

// Setting up the User template and its fields
let User = sequelize.define('users', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    },
});

// Creating the defined tables in the specified database
sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

// Exporting User model for use in other files.
module.exports = User;
