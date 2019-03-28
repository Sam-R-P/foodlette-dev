# Foodlette Application

This is the official repository for the development and distributing of the Foodlette Web Application.
Foodlette is being developed with the goal to make choosing your next meal that much easier, by doing it for you!

## Getting Started

The following instructions will guide you through how to get the Foodlette Application up and running on a local system for it to then be made globally accessible when you are ready.

## Prerequisites

For the installation and running of the application you will need a linux based system.
On this linux based system you will be using the command line interface for the process of this installation.

## Installing

### MariaDB
Firstly, we will begin by installing the database of our choice, MariaDB.
Foodlette will use MariaDB to store the applications user generated data in.

**Step 1. Download/Install MariaDB**

To begin you will need to enter the following in the command line interface.

```
apt-get update -y
```

Next, you can install MariaDB using the following command.

```
apt-get install mariadb-server
```

If everything is successful, you can proceed on to the next step.

**Step 2. Verify that MariaDB is operational**

After installing MariaDB enter the following code.

```
mysql -u root -p
```

This should prompt a first boot setup of MariaDB. If so complete the setup by entering the necessary information.
If this does not promt a setup the default password used is "root".

Once the baove steps are completed successfully, you should then see the following output...

```
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is XXXX
Server version: 5.5.X


Copyright (c) 2000, 2014, Oracle, Monty Program Ab and others.


Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.


MariaDB [(none)]> 
```

If so well done, the installion of MariaDB has been successful.
Navigate back to the root of your command line by pressing ctrl+c.

### Server Environment
We will now be installing the node environment needed for the application to run, as well as the application files too.
To begin, we need to clone the files from this repository onto the local machine you are using.

**Step 1. Cloning the Repository**
Navigate to **OR** create the directory location you wish to install the application in, using the command line interface.

Once in the desired location, enter the following command...

```
git clone https://github.com/Sam-R-P/foodlette-dev.git
```

...and press the enter key.

This will cause your local clone to be created in the directory you are within.

**Step 2. Setting up Node**
In the directory you cloned the Foodlette application too, run the following commands in order.

```
npm install
```

This command **should** install the packages and dependencies required to run the application.

**Step 3. Verify that Application is operational**
We now need to test to see if the application runs when prompted to start.

To do so navigate to the directory in which the application is installed and run the following...

```
npm start
```

**If** you see the following...

```
Team2D@1.0.0 start /home/up863457
node serverFunctions

Foodlette listening on port 8080
```
...then everything is operational and working, congrats!

However, **If** you do not see the above then unfortunately we will need to manually install the packages required for the application to run. The steps listed below should fix the issues...

Begin by installing 'Express'.

```
npm install express
```

Once 'Express' is installed, we will need socket.io.

```
npm install socket.io
```

We also need http-server.

```
npm install http-server
```

Lastly, we will need mysql2 to interface with the database.

```
npm install mysql2
```

Once you have installed all of the above packages you should be able to successfully re-attempt starting the application.

Well done. The application, database, all packages and dependencies have been installed and setup successfully.
