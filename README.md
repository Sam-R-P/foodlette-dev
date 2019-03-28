# Foodlette Application

This is the official repository for the development and distributing of the Foodlette Web Application.
Foodlette is being developed with the goal to make choosing your next meal that much easier, by doing it for you!

## Getting Started

These instructions will guide you on how to get the Foodlette Application up and running on a local system for it to then be made globally accessible when you ready.

## Prerequisites

For this installation to be possible you will require a linux based system to install and run the application.
You will be using the command line interface for the installation of this process.

## Installing

### MariaDB
Firstly, we will begin by installing the database of our choice, MariaDB.

Step 1. Download/Install MariaDB
To begin you will need to run the following command.

```
apt-get update -y
```

Once this is done, you can install MariaDB using the following command.

```
apt-get install mariadb-server
```

If everything is successful, you can proceed on to the next step.

Step 2. Verify that MariaDB is operational
After installing MariaDB run...

```
mysql -u root -p
```

...and enter the password root.

You should then see the following output...

```
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is XXXX
Server version: 5.5.X


Copyright (c) 2000, 2014, Oracle, Monty Program Ab and others.


Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.


MariaDB [(none)]> 
```

If so well done, the installion of MariaDB has been successful.

### Server Environment
