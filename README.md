# Foodlette Application

This is the official repository for the development and distributing of the Foodlette Web Application.
Foodlette is being developed with the goal to make choosing your next meal that much easier, by doing it for you!

## Getting Started

The following instructions will guide you through how to get the Foodlette Application up and running on a local system for it to then be made globally accessible when you are ready.

## Prerequisites

To install and run the application you will need to have install the following pieces of software...

- [NodeJS](https://nodejs.org/en/) LTS Version Recommended
- [PostgreSQL](https://www.postgresql.org/) Latest Version Recommended

For the process of installing and running the application you will need to use the Powershell as administrator on a Windows system or Terminal on a Apple system, or an equivalent UNIX command line application.
After each line of code you should press the 'Enter' key, saying this now saves repeating myself!

## Installing

### 1. Verifying Installations

Firstly, we will need to ensure you have successfully installed the above software. To do so run the following lines of code one after the other.

```
node --version
```

```
npm --version
```

```
psql --version
```

If the version number has printed below each line of code when entered then we are good to go.

If not then you will need to fix your installations by trying again.

### 2. Creating the Database

There will be two methods of creating the database. The first should work. However, if you encounter any errors when entering the following lines of code please process to the method labelled "Method 2. GUI".

**Method 1. Command Line**

To start, begin by entering the code below.

```
psql -c 'CREATE ROLE "foodlette" with Login Superuser Createrole CreateDB Replication BypassRLS'
```

This will create a new user within the postgreSQL database called 'foodlette', which we will use in the application to interface with the database so we can store and access information.

Next, enter the following.

```
psql -U foodlette -c 'CREATE DATABASE "foodlettedb"'
```

This will create a new database called 'foodlettedb' for our user 'foodlette' that will store the information for the application within.

Well done, you have successfully set up the postgreSQL database for the application. You can move on to the next part.

**Method 2. GUI**

To start, navigate to where you installed the postgreSQL database on your C: drive.

Once in the PostgreSQL file you will need to find the path...

```
11/pgAdmin/bin
```

Within this file is the application called pgAdmin4, open the application. The application will open in your web browser.

On the left of the application is the 'browser' bar, this is where our activities will take place.

Select 'servers' to open up a drop down menu. In this menu right click on 'Login/Group Roles' and create a new 'Login'.
- In the 'general' tab enter the name 'foodlette'.
- In the 'definitions' tab enter the password '123', you can change this later if you wish.
- In the 'privileges' tab toggle all switches to 'Yes'.
Then save. You have successfully created a new user role in the database called foodlette. This user will be used to connect the application to the database we are about to create.

To create the database right click on the 'Databases' text in the 'browser'. Then select create a database.
- In the 'general' tab enter the database name 'foodlettedb' and set the owner to 'foodlette'.
Then save. You have now created the database and linked it to the account foodlette as the owner of it.

Well done, you have successfully set up the postgreSQL database for the application. You can move on to the next part.

### 3. Setting up the Application

We will now be setting up the application. This will be a multi-step process.

**Step 1. Cloning the Repository OR Downloading it**

Firstly, create the directory you wish to install the application and all files associated with it in.

To clone the repository navigate to the directory you wish to install it in using your command line. Then enter the following code.

```
git clone https://github.com/Sam-R-P/foodlette-dev.git
```

This will cause your local clone to be created in the directory you are within.

**OR**

To download the repository go [here](https://github.com/Sam-R-P/foodlette-dev). Then choose to download it.

After the download has completed you will then need to unpack the .zip folder into the directory you wish to install the application in.

**Step 2. Setting up Node and its Dependencies**

In the directory you cloned or installed the Foodlette application too, run the following command.

```
npm install
```

This command **should** install the packages and dependencies required to run the application.

**Step 4. Starting the Application**

Lastly, we need to start the application and access it.

To do so navigate to the directory in which the application is installed using your command line and run the following...

```
npm start
```

**If** you see the following...

```
Foodlette started on port 9000
```
...then everything is operational and working, congrats you are done!

However, **If** you do not see the above then unfortunately we will need to manually install the packages required for the application to run. The code below should fix the issues...

```
npm install --save bcrypt body-parser cookie-parser express express-session morgan pg sequelize
```

Once you have installed the above packages you should be able to successfully re-attempt starting the application.

```
npm start
```

Well done. The application, database, all packages and dependencies have been installed and setup successfully.
